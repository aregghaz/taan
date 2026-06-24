export const AUXILIUM_STATS = [
  { value: '24/7', label: 'Ride visibility' },
  { value: '-35%', label: 'Dispatch overhead' },
  { value: '+42%', label: 'Response speed' },
];

export const AUXILIUM_TAGS = [
  'NEMT operations platform',
  'Payer administration',
  'Ride reporting dashboard',
  'Eligibility and audit controls',
  'User access management',
  'Ride lifecycle tracking',
  'Member and payer records',
  'Performance analytics',
];

export const AUXILIUM_FEATURES = [
  'Real-time ride timeline with driver state tracking',
  'Smart alerts for no-shows and route delays',
  'Unified dashboard for members, rides, and standing orders',
];

export const AUXILIUM_PROJECT_STORY = [
  'Auxilium is a healthcare transportation operations platform designed for NEMT teams that coordinate high-volume ride programs across members, payers, contractors, and internal administrators.',
  'The product brings together the everyday workflows that usually live in separate tools: ride creation, user permissions, payer setup, eligibility configuration, service rules, reporting, monitoring, and audit history.',
  'The interface is intentionally operational rather than decorative. Dense tables, profile panels, status controls, report cards, and chart dashboards help teams compare information quickly and act without opening too many screens.',
];

export const AUXILIUM_PRODUCT_MODULES = [
  {
    title: 'Administrator workspace',
    text: 'Admins can manage users, reset passwords, review logins, inspect permissions, and keep business roles aligned with payer or contractor responsibilities.',
  },
  {
    title: 'Payer configuration',
    text: 'Payer records include company identity, contact information, service levels, feature toggles, eligibility rules, authorization settings, and location context.',
  },
  {
    title: 'Ride operations',
    text: 'Dispatch and monitoring views support ride creation, standing orders, driver assignment, live status review, exception handling, and operational follow-up.',
  },
  {
    title: 'Reporting and analytics',
    text: 'The reporting layer turns ride outcomes into dashboards for completion rate, on-time performance, cost, member volume, incomplete rides, and rendering services.',
  },
  {
    title: 'Compliance visibility',
    text: 'Audit logs, verified addresses, access history, and permission-based workflows help teams maintain accountability in a healthcare transportation environment.',
  },
  {
    title: 'Multi-role coordination',
    text: 'The system is shaped around real operational roles: payers, supervisors, dispatchers, administrators, contractors, drivers, and member support teams.',
  },
] as const;

export const AUXILIUM_WORKSTREAMS = [
  {
    title: 'Dispatch centers',
    description: 'One timeline keeps rides, members, incidents, and next actions visible together.',
  },
  {
    title: 'Supervisors',
    description: 'Alerts surface route delays and no-shows before they become escalations.',
  },
  {
    title: 'Operations teams',
    description: 'Status tracking reduces manual calls and keeps every shift more coordinated.',
  },
  {
    title: 'Service quality',
    description: 'Better ETA visibility improves rider confidence and response consistency.',
  },
] as const;

export const AUXILIUM_HIGHLIGHTS = [
  'Dispatch centers get one timeline for rides, members, incidents, and active driver states.',
  'Supervisors receive alerts faster and resolve delays before escalation impacts service.',
  'Operations teams reduce manual calls with automated status tracking across every shift.',
  'Real-time visibility improves ETA accuracy and strengthens rider confidence.',
];
