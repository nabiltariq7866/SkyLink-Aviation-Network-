# SkyLink Aviation Network

Enterprise-style demo for an AI-powered global private aviation broker network and aircraft matching platform.

## Product scope

The demo covers the 18 business areas defined in the supplied requirements, with shared workflows connected across the major operational surfaces.

SkyLink demonstrates a secure international marketplace and professional network for private aviation brokers, advisors, operators, aircraft owners and buyers. It covers aircraft availability, confidential requirements, AI matching, sourcing, alerts, messaging, deal rooms, disclosure controls, relationship intelligence, comparison, transaction pipeline, governance, analytics, integrations and auditability.

## Technology

- React + TypeScript + Vite
- React Router with `createBrowserRouter`
- Recharts
- Lucide React
- LocalStorage-backed synthetic demo state
- CSS design tokens for dark/light themes

## UI standards

- Dark theme is the default.
- Light theme is supported through the same semantic tokens.
- No native select controls. All dropdowns use the reusable CustomDropdown.
- Responsive layouts with independent navigation/content scrolling and custom scrollbars.
- Detail routes use real URL navigation rather than in-place fake expansions.
- Primary demo actions create or mutate local records, emit audit events, and update related screens where the workflow requires it.

## Roles

- Super Admin
- Broker
- Operator
- Aircraft Owner
- Aviation Advisor
- Buyer
- Compliance Admin

Role selection is available in the header. Restricted administration and analytics routes enforce demo access rules.

## Phase 1 demo dataset

The seeded environment includes approximately:

- 100 aviation professionals
- 25 operators represented in the demo network
- 150 aircraft listings
- 40 buyer requirements
- Gulfstream and Bombardier Global inventory
- North America, Europe, Middle East and Asia-Pacific coverage
- 10 Deal Rooms
- 500 synthetic messages
- Acquisition, leasing and charter opportunities

## Key functional demo flows

### Aircraft availability

Add aircraft -> publish listing -> inventory updates -> requirement matching refreshes -> match alerts can be created -> aircraft detail route is available.

### Buyer sourcing

Create anonymous requirement -> matching engine scores current inventory -> ranked aircraft with explanations -> shortlist -> comparison -> client-ready summary.

### Transaction

Aircraft/requirement match -> Deal Room -> participant access -> documents -> NDA/disclosure -> LOI -> negotiation -> closed.

### Availability event

Change aircraft status -> requirements are recalculated -> affected alerts are created -> audit event is recorded.

### Confidential disclosure

Request Level 3 access -> pending state -> authorized Super Admin/Compliance Admin approves -> confidential access becomes available in the demo state.

### Collaboration

Secure message -> aircraft card sharing -> simulated document attachment -> audit record.

### Governance

Run quality scan -> review duplicate/stale/verification queue item -> approve or return -> audit event.

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Static demo verification:

```bash
npm run verify
```

## Vercel

`vercel.json` contains the SPA fallback so direct navigation to nested routes works after deployment.

## Demo notes

This is a realistic client demo, not a production brokerage transaction system. External aircraft feeds, identity providers, CRM, email, calendar and e-signature providers are represented by simulated connectors and local state. No live aviation transaction or financial action is performed.

See `DEMO_FLOW.md` for the acceptance walkthrough.


## Demo acceptance journey

The demo is designed around one continuous institutional aviation workflow:

1. Register / select a demo role
2. Verify counterparty context
3. Publish or review an aircraft listing
4. Create a buyer requirement
5. Run weighted AI matching
6. Review match explanations and alternatives
7. Generate opportunity alerts
8. Open secure messaging
9. Request and approve disclosure
10. Create a private Deal Room
11. Add participants, documents and tasks
12. Progress the deal through LOI, negotiation and closed
13. Save shortlist and client-ready summary
14. Review audit events

All major demo mutations are persisted locally and emit an auditable event.

## Visual assets

`public/assets/skylink-generated-aviation-overview.png` is a generated aviation product visual used as a premium visual reference inside the demo. Supporting aviation SVG assets are also included for fast local loading.
