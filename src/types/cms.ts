export type UserRole = 'visitor' | 'client' | 'team_member' | 'administrator';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export interface Profile {
  id: string;
  userId: string;
  fullName: string;
  companyName?: string;
  avatarUrl?: string;
  bio?: string;
  createdAt: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  accentColor: string;
  heroHeading: string;
  heroSubheading: string;
  features: string[];
  toolsAndTech: string[];
  processSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  serviceId: string;
  clientName: string;
  summary: string;
  fullCaseStudyMarkdown?: string;
  coverImageUrl: string;
  galleryUrls: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
  isFeatured: boolean;
  publishedAt: string;
  createdAt: string;
}

export interface MediaAsset {
  id: string;
  filename: string;
  storagePath: string;
  publicUrl: string;
  fileType: 'image' | 'video' | 'pdf' | 'document';
  fileSizeBytes: number;
  dimensions?: { width: number; height: number };
  uploadedBy: string;
  createdAt: string;
}

export interface ContactSubmission {
  id: string;
  fullName: string;
  email: string;
  company?: string;
  serviceInterest: string;
  budgetRange?: string;
  message: string;
  status: 'new' | 'in_review' | 'contacted' | 'archived';
  createdAt: string;
}

export interface Message {
  id: string;
  projectId: string;
  senderId: string;
  messageText: string;
  attachments?: string[];
  createdAt: string;
}
