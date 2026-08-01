export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: {
    ROOT: '/services',
    WEB_DEV: '/services/web-development',
    VIDEO_EDITING: '/services/video-editing',
    AD_CREATION: '/services/ad-creation',
    PAID_PROMOTIONS: '/services/paid-promotions',
  },
  WORK: {
    ROOT: '/work',
    CASE_STUDY: (slug: string) => `/work/${slug}`,
  },
  CONTACT: '/contact',
  LOGIN: '/login',
  PORTAL: {
    DASHBOARD: '/portal/dashboard',
    PROJECTS: '/portal/projects',
    FILES: '/portal/files',
    MESSAGES: '/portal/messages',
  },
  ADMIN: {
    OVERVIEW: '/admin/overview',
    CMS_PROJECTS: '/admin/cms/projects',
    CMS_SERVICES: '/admin/cms/services',
    MEDIA: '/admin/media',
    LEADS: '/admin/leads',
    USERS: '/admin/users',
  },
} as const;
