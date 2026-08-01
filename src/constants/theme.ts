export const THEME_COLORS = {
  softWhite: '#FAF9F6',
  warmLavender: '#F3EEF8',
  deepViolet: '#3B1F52',
  mutedLavender: '#E2D7ED',
  nearBlack: '#121113',
  neutralSlate: '#5C5862',
} as const;

export const SERVICE_ACCENTS = {
  webDevelopment: {
    accent: '#3B1F52',
    secondary: '#F3EEF8',
    label: 'Web Engineering & Digital Architecture',
  },
  videoEditing: {
    accent: '#2D1E40',
    secondary: '#EBE5F2',
    label: 'Post-Production & Editorial Motion',
  },
  adCreation: {
    accent: '#44225A',
    secondary: '#F5EFFF',
    label: 'Brand Advertising & Visual Campaign Strategy',
  },
  paidPromotions: {
    accent: '#331B48',
    secondary: '#EEE6F5',
    label: 'Performance Marketing & Strategic Growth',
  },
} as const;
