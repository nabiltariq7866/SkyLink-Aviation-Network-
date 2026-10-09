# SkyLink Demo Acceptance Checklist

## Core flow
- [x] Role selection
- [x] Aircraft listing creation/edit/status
- [x] Buyer requirement creation/edit
- [x] Weighted AI matching
- [x] Match explanation
- [x] Opportunity alerts
- [x] Secure messages
- [x] Disclosure request/approval
- [x] Deal Room creation
- [x] Participants
- [x] Documents
- [x] Tasks
- [x] Deal stage progression
- [x] Shortlist
- [x] Comparison
- [x] Client summary
- [x] Audit events

## Product behavior
- [x] Browser routing with createBrowserRouter
- [x] Detail pages for core records
- [x] No native select controls
- [x] Custom dropdowns
- [x] Dark default theme
- [x] Light theme
- [x] Responsive layout
- [x] Independent sidebar/main scrolling
- [x] Route scroll reset
- [x] LocalStorage persistence
- [x] Vercel SPA rewrite

## Required Phase 1 scenario
Registration / verification → aircraft posted → buyer requirement → AI match → notification → messaging → confidential disclosure → Deal Room → shortlist → LOI → negotiation → close.


## Dummy data coverage
- [x] 150 synthetic aircraft listings across global markets
- [x] 40 institutional buyer requirements
- [x] 100 aviation professionals / brokers
- [x] 10 active transaction Deal Rooms
- [x] 500 seeded secure-message records
- [x] Persistent local demo state for created/updated records
- [x] Generated aviation suite visual asset included in public assets

## Cross-module acceptance behavior
- [x] Publish aircraft recalculates qualified requirement matches and creates opportunity alerts
- [x] Aircraft status changes recalculate active matches and create an audit event
- [x] Requirement creation/update recalculates matching counts
- [x] Shortlist records persist into comparison and client-summary generation
- [x] Deal Room actions persist participants, documents, tasks and stage changes
- [x] Disclosure requests and approvals are audit logged
- [x] Secure messages support simulated document attachments
