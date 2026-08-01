import { Service } from '../types/cms';

export async function getServices(): Promise<Service[]> {
  return [
    {
      id: 'web-development',
      slug: 'web-development',
      title: 'Web Engineering & Architecture',
      tagline: 'Custom web platforms built with extreme precision and editorial calm.',
      description: 'We design and engineer bespoke web platforms that feel weightless, responsive, and crafted to last.',
      accentColor: '#3B1F52',
      heroHeading: 'Web platforms engineered with intention and restraint.',
      heroSubheading: 'We build digital products that feel like reading a carefully composed publication.',
      features: [
        'Component Architecture',
        'Performance Optimization',
        'Editorial Typography',
        'Micro-Interactions & GSAP',
        'SEO & Accessibility',
      ],
      toolsAndTech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'GSAP', 'Supabase'],
      processSteps: [
        { title: 'Discovery & Narrative Mapping', description: 'Understanding your vision and chaptering your brand story.' },
        { title: 'System Design & Typography', description: 'Crafting bespoke tokens, layouts, and visual rhythm.' },
        { title: 'Modular Engineering', description: 'Building clean, type-safe components decoupled from DB logic.' },
        { title: 'Refinement & Delivery', description: 'Optimizing LCP, animations, and launching with zero friction.' },
      ],
      faqs: [
        { question: 'What technologies do you use for web development?', answer: 'We build with React, TypeScript, Tailwind CSS, GSAP for motion, and Supabase for backend infrastructure.' },
        { question: 'Do you use pre-built agency templates?', answer: 'Never. Every interface is handcrafted specifically for your brand identity and functional goals.' },
      ],
    },
    {
      id: 'video-editing',
      slug: 'video-editing',
      title: 'Video Editing & Post-Production',
      tagline: 'Cinematic storytelling that communicates clarity and craft.',
      description: 'We edit brand documentary films, product showcases, and editorial video content with meticulous pacing.',
      accentColor: '#2D1E40',
      heroHeading: 'Cinematic video production focused on narrative and pace.',
      heroSubheading: 'Visual stories edited to inspire confidence rather than demand attention.',
      features: ['Documentary Editing', 'Sound Design & Scoring', 'Color Grading', 'Motion Graphics', 'Multi-Format Export'],
      toolsAndTech: ['DaVinci Resolve', 'Adobe Premiere Pro', 'After Effects'],
      processSteps: [
        { title: 'Raw Footage Audit', description: 'Reviewing footage to uncover the core story spine.' },
        { title: 'Assembly & Rhythm Cut', description: 'Establishing pacing and emotional cadence.' },
        { title: 'Color & Sound Grade', description: 'Adding warm tones and polished audio.' },
      ],
      faqs: [
        { question: 'What format do you deliver videos in?', answer: 'We deliver in native 4K ProRes/H.264 formats optimized for web, social channels, and broadcast.' },
      ],
    },
    {
      id: 'ad-creation',
      slug: 'ad-creation',
      title: 'Ad Creation & Distribution',
      tagline: 'High-performing visual ads designed for authentic engagement.',
      description: 'We create visually compelling advertisement collateral that respects visitor attention while driving real business outcomes.',
      accentColor: '#44225A',
      heroHeading: 'Advertising assets engineered to earn attention quietly.',
      heroSubheading: 'High-conversion campaign creative built with editorial elegance.',
      features: ['Creative Strategy', 'Motion Ads', 'Static Campaign Graphics', 'A/B Variant Generation'],
      toolsAndTech: ['Figma', 'After Effects', 'Photoshop'],
      processSteps: [
        { title: 'Audience Insight', description: 'Defining key messaging hooks for targeted channels.' },
        { title: 'Creative Production', description: 'Designing variations focused on visual clarity.' },
      ],
      faqs: [
        { question: 'Do you create both static and video ads?', answer: 'Yes, we create multi-format campaigns including static carousels, motion banners, and short-form video ads.' },
      ],
    },
    {
      id: 'paid-promotions',
      slug: 'paid-promotions',
      title: 'Paid Promotions & Strategic Growth',
      tagline: 'Data-informed distribution that reaches ambitious audiences.',
      description: 'We manage targeted promotion budgets to position your brand before decision-makers across digital platforms.',
      accentColor: '#331B48',
      heroHeading: 'Strategic promotion built around long-term ROI.',
      heroSubheading: 'Connecting your platform to the right audience through intentional campaign management.',
      features: ['Campaign Architecture', 'Audience Targeting', 'Budget Optimization', 'Growth Analytics'],
      toolsAndTech: ['Meta Ads Manager', 'LinkedIn Campaign Manager', 'Google Ads', 'Analytics'],
      processSteps: [
        { title: 'Campaign Setup', description: 'Configuring pixels, conversions, and targeting parameters.' },
        { title: 'Optimization & Scaling', description: 'Refining delivery based on empirical conversion data.' },
      ],
      faqs: [
        { question: 'How do you measure campaign success?', answer: 'We track meaningful growth metrics: qualified lead conversion, CAC, and return on ad spend.' },
      ],
    },
  ];
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const services = await getServices();
  return services.find((s) => s.slug === slug) || null;
}
