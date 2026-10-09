import type {Aircraft, Alert, Requirement} from '../types/domain';
import {rankMatches} from './matching';

export const QUALIFIED_MATCH_SCORE = 70;

export function recomputeRequirement(req: Requirement, aircraft: Aircraft[]): Requirement {
  const matches = rankMatches(aircraft, req).filter(x => x.match >= QUALIFIED_MATCH_SCORE).length;
  return {...req, matches};
}

export function recomputeRequirements(requirements: Requirement[], aircraft: Aircraft[]) {
  return requirements.map(req => recomputeRequirement(req, aircraft));
}

export function buildMatchAlerts(aircraft: Aircraft, requirements: Requirement[]): Omit<Alert, 'id'|'time'|'read'>[] {
  const hits = requirements.filter(req => rankMatches([aircraft], req)[0]?.match >= QUALIFIED_MATCH_SCORE);
  return hits.map(req => ({
    title: 'New aircraft match',
    message: `${aircraft.manufacturer} ${aircraft.model} matches ${req.title} at ${rankMatches([aircraft], req)[0]?.match ?? 0}% compatibility.`,
    severity: 'High' as const,
    type: 'Match',
    resourceId: req.id,
  }));
}

export function buildStatusAlert(aircraft: Aircraft, previous: string, next: string): Omit<Alert, 'id'|'time'|'read'> {
  return {
    title: 'Aircraft availability changed',
    message: `${aircraft.manufacturer} ${aircraft.model} moved from ${previous} to ${next}. Active sourcing parties have been notified.`,
    severity: next === 'LOI Submitted' ? 'High' : 'Medium',
    type: 'Availability',
    resourceId: aircraft.id,
  };
}
