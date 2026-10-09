export const routeGroups = {
  core: ['/', '/aircraft', '/requirements', '/matches', '/network', '/deal-rooms', '/messages'],
  intelligence: ['/copilot', '/alerts', '/relationships', '/search', '/comparison', '/analytics'],
  operations: ['/pipeline', '/disclosure', '/integrations'],
  administration: ['/governance', '/security', '/reports', '/settings']
} as const;
