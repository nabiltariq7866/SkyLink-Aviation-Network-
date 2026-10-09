# SkyLink Demo Verification Checklist

## Routing
- BrowserRouter: `createBrowserRouter` + `RouterProvider`
- Detail routes exist for aircraft, requirements, brokers, and deal rooms
- NotFound route exists
- Route changes reset scroll position

## UX constraints
- No native `<select>` controls
- Custom dropdown component used for selection controls
- Sidebar and main content have independent scroll behavior
- Dark theme is default
- Light theme uses the same semantic token system
- Responsive breakpoints included

## Connected demo workflows
1. Add Aircraft -> marketplace record -> match queue -> opportunity alert -> audit event
2. Edit Aircraft -> marketplace update -> audit event
3. Aircraft status change -> requirement match counts recalculated -> alert -> audit event
4. Create Requirement -> ranked matches -> opportunity alert -> requirement detail
5. Edit Requirement -> recalculated matches -> audit event
6. Match review -> reason breakdown -> aircraft detail
7. Aircraft -> shortlist -> comparison -> client summary -> report record
8. Aircraft/Match -> Deal Room -> participants -> documents -> stage progression -> Closed
9. Deal Room -> secure message workspace
10. Disclosure request -> pending -> authorized approval -> Level 3 unlocked
11. Invite Broker -> network list -> audit event
12. Create Opportunity -> pipeline -> stage progression
13. Create Alert -> review/read state
14. Add Integration -> persisted registry -> connection test -> audit event
15. Generate Report -> persisted recent report -> viewer/export actions
16. Security actions -> live audit trail
17. Settings -> role/theme/preferences/reset demo

## Demo persistence
All core demo changes are stored in localStorage and survive browser refreshes.
