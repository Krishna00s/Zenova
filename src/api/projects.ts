import { Project } from '../types/cms';

export async function getProjects(filter?: { serviceId?: string; isFeatured?: boolean }): Promise<Project[]> {
  // Milestone v0.1.0 Contract Mock - replace with Supabase query in future milestone
  const mockProjects: Project[] = [
    {
      id: 'proj-1',
      slug: 'lumina-digital-platform',
      title: 'Lumina Global Platform & Digital Brand Experience',
      serviceId: 'web-development',
      clientName: 'Lumina Tech Group',
      summary: 'Architected an editorial web application featuring dynamic layout rhythm, calm storytelling, and instant performance.',
      coverImageUrl: '/projects/lumina-cover.jpg',
      galleryUrls: ['/projects/lumina-1.jpg', '/projects/lumina-2.jpg'],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP'],
      metrics: [
        { label: 'Page Speed Score', value: '99/100' },
        { label: 'Conversion Increase', value: '+42%' },
      ],
      isFeatured: true,
      publishedAt: '2026-06-15T00:00:00Z',
      createdAt: '2026-06-10T00:00:00Z',
    },
    {
      id: 'proj-2',
      slug: 'nexus-brand-film',
      title: 'Nexus Enterprise Launch Film & Cinematic Showcase',
      serviceId: 'video-editing',
      clientName: 'Nexus Systems',
      summary: 'Crafted a calm, rhythm-driven brand documentary communicating high engineering trust through understated post-production.',
      coverImageUrl: '/projects/nexus-cover.jpg',
      galleryUrls: ['/projects/nexus-1.jpg'],
      technologies: ['DaVinci Resolve', 'Editorial Motion', 'Sound Design'],
      isFeatured: true,
      publishedAt: '2026-07-01T00:00:00Z',
      createdAt: '2026-06-25T00:00:00Z',
    },
  ];

  let result = mockProjects;
  if (filter?.serviceId) {
    result = result.filter((p) => p.serviceId === filter.serviceId);
  }
  if (filter?.isFeatured !== undefined) {
    result = result.filter((p) => p.isFeatured === filter.isFeatured);
  }
  return result;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug) || null;
}
