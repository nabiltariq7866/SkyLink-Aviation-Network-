import type {Aircraft,Requirement} from '../types/domain';
export type MatchReason={label:string;score:number;max:number;status:'strong'|'partial'|'miss'};
export type RankedAircraft=Aircraft & {match:number;reasons:MatchReason[]};
export function explainMatch(a:Aircraft,r:Requirement):MatchReason[]{
 const model=a.model&&r.models.includes(a.model)?30:(r.models.some(m=>a.model.toLowerCase().includes(m.toLowerCase().split(' ')[0]))?14:0);
 const budget=a.price<=r.budget?18:Math.max(0,18-Math.min(18,(a.price-r.budget)*2));
 const range=a.range>=r.range?14:Math.max(0,14-Math.round((r.range-a.range)/500)*3);
 const capacity=a.capacity>=r.passengers?12:Math.max(0,12-(r.passengers-a.capacity)*3);
 const region=a.location.toLowerCase().split(',')[1]?.trim()||a.location.toLowerCase();
 const location=r.location.toLowerCase().split('/').some(x=>a.location.toLowerCase().includes(x.trim()))?8:4;
 const availability=a.status==='Available'?8:a.status==='Under Discussion'?4:1;
 const age=r.maxAge?Math.max(0,6-Math.max(0,(new Date().getFullYear()-a.year)-r.maxAge)):6;
 const cabin=r.cabin?(a.cabin||'').toLowerCase().includes(r.cabin.toLowerCase())?5:1:5;
 const maintenance=r.maintenance?(a.maintenanceStatus||'').toLowerCase().includes(r.maintenance.toLowerCase())?5:1:5;
 const excluded=(r.exclusions||[]).some(x=>(a.model+' '+a.manufacturer+' '+a.location).toLowerCase().includes(x.toLowerCase()));
 const mustHavePenalty=(r.mustHaves||[]).some(x=>!(a.model+' '+a.manufacturer+' '+a.engine+' '+(a.cabin||'')+' '+(a.maintenanceStatus||'')).toLowerCase().includes(x.toLowerCase()))?8:0;
 const delivery=(a.deliveryDays||30)<=(r.deliveryDays||90)?6:2;
 return [
  {label:'Aircraft model fit',score:model,max:30,status:model>=25?'strong':model>0?'partial':'miss'},
  {label:'Budget fit',score:budget,max:18,status:budget>=15?'strong':budget>0?'partial':'miss'},
  {label:'Mission / range fit',score:range,max:14,status:range>=12?'strong':range>0?'partial':'miss'},
  {label:'Passenger capacity',score:capacity,max:12,status:capacity>=10?'strong':capacity>0?'partial':'miss'},
  {label:'Location fit',score:location,max:8,status:location>=8?'strong':'partial'},
  {label:'Availability readiness',score:availability,max:8,status:availability>=8?'strong':availability>2?'partial':'miss'},
  {label:'Aircraft age fit',score:excluded?0:age,max:6,status:age>=5?'strong':age>0?'partial':'miss'},
  {label:'Cabin fit',score:cabin,max:5,status:cabin>=5?'strong':'partial'},
  {label:'Maintenance fit',score:Math.max(0,maintenance-mustHavePenalty),max:5,status:maintenance>=5&&!mustHavePenalty?'strong':'miss'},
  {label:'Delivery readiness',score:delivery,max:6,status:delivery>=5?'strong':'partial'},
 ];
}
export function scoreMatch(a:Aircraft,r:Requirement){const reasons=explainMatch(a,r);const earned=reasons.reduce((s,x)=>s+x.score,0);const possible=reasons.reduce((s,x)=>s+x.max,0);return Math.min(99,Math.max(0,Math.round(earned/possible*100)))}
export function rankMatches(aircraft:Aircraft[],r:Requirement):RankedAircraft[]{return aircraft.map(a=>{const reasons=explainMatch(a,r);return {...a,match:scoreMatch(a,r),reasons}}).sort((a,b)=>b.match-a.match)}
export function calculateAllMatches(aircraft:Aircraft[],requirements:Requirement[]){return requirements.map(r=>({requirementId:r.id,count:rankMatches(aircraft,r).filter(x=>x.match>=70).length,top:rankMatches(aircraft,r).slice(0,3)}))}
