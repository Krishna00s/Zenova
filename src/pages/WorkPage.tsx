import React, { useState, useRef } from 'react';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { scrollRevealCards } from '../animations/reveal';

export const WorkPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'video' | 'ads' | 'promotions'>('all');

  useGSAP(() => {
    const revealEls = containerRef.current?.querySelectorAll('.work-reveal');
    if (revealEls && revealEls.length > 0 && containerRef.current) {
      scrollRevealCards(revealEls, containerRef.current, { stagger: 0.08, duration: 0.5 });
    }
  }, { scope: containerRef });

  const allProjects = [
    {
      id: 'web-1',
      domain: 'web',
      domainLabel: 'WEB ENGINEERING',
      title: 'Lumina Financial Platform',
      category: 'Fintech Web Application',
      description: 'Real-time financial analytics portal engineered for sub-50ms dashboard response speed.',
      image: '/media/photo_understand_dev.jpg',
      link: ROUTES.SERVICES.WEB_DEV,
    },
    {
      id: 'video-1',
      domain: 'video',
      domainLabel: 'VIDEO PRODUCTION',
      title: 'Echoes of Tomorrow',
      category: '4K Brand Documentary Film',
      description: 'Cinematic brand story cut with rhythm, color grading, and custom sound design.',
      image: '/media/cap_video_editing.jpg',
      link: ROUTES.SERVICES.VIDEO_EDITING,
    },
    {
      id: 'ads-1',
      domain: 'ads',
      domainLabel: 'AD CREATION',
      title: 'Lumina Meta Growth Funnel',
      category: 'Meta & TikTok Performance Ads',
      description: 'Direct-response visual creative stack designed to drive qualified user signups.',
      image: '/media/cap_ad_creation.jpg',
      link: ROUTES.SERVICES.AD_CREATION,
    },
    {
      id: 'promotions-1',
      domain: 'promotions',
      domainLabel: 'CREATOR PROMOTIONS',
      title: 'Fashion x Creator Network',
      category: 'Influencer Whitelisting',
      description: 'Handpicked lifestyle creators producing authentic unboxing and daily routine integration.',
      image: '/media/cap_paid_promotions.jpg',
      link: ROUTES.SERVICES.PAID_PROMOTIONS,
    },
    {
      id: 'web-2',
      domain: 'web',
      domainLabel: 'WEB ENGINEERING',
      title: 'Aura Atelier Storefront',
      category: 'Luxury E-Commerce',
      description: 'Custom React & Tailwind e-commerce experience with fluid micro-interactions and seamless checkout.',
      image: '/media/photo_sketch_wireframe.jpg',
      link: ROUTES.SERVICES.WEB_DEV,
    },
    {
      id: 'video-2',
      domain: 'video',
      domainLabel: 'VIDEO PRODUCTION',
      title: 'PULSE Tech Vertical Series',
      category: '9:16 Mobile Social Reels',
      description: 'High-retention mobile video content crafted for viral reach across Instagram and TikTok.',
      image: '/media/cap_ads_phone.jpg',
      link: ROUTES.SERVICES.VIDEO_EDITING,
    },
    {
      id: 'ads-2',
      domain: 'ads',
      domainLabel: 'AD CREATION',
      title: 'Zenith Direct Response Stack',
      category: 'Omnichannel Ad Campaign',
      description: 'Multi-variant ad creative testing across Meta, Google Performance Max, and YouTube.',
      image: '/media/cap_promo_megaphone.jpg',
      link: ROUTES.SERVICES.AD_CREATION,
    },
    {
      id: 'promotions-2',
      domain: 'promotions',
      domainLabel: 'CREATOR PROMOTIONS',
      title: 'Skincare x Creator Integration',
      category: 'YouTube & Reel Sponsorships',
      description: 'Dedicated creator product integrations with tracked attribution and whitelisted handle ads.',
      image: '/media/photo_user_real_conversations.jpg',
      link: ROUTES.SERVICES.PAID_PROMOTIONS,
    },
  ];

  const filteredProjects = activeCategory === 'all'
    ? allProjects
    : allProjects.filter((p) => p.domain === activeCategory);

  return (
    <main ref={containerRef} className="w-full bg-soft-white text-near-black pt-28 sm:pt-36 pb-20 md:pb-28 overflow-hidden">
      {/* 1. HOW ZENOVA WORKS: EDITORIAL STORYTELLING CHAPTER */}
      <section className="relative w-full pb-16 sm:pb-24 border-b border-muted-lavender/50">
        <Container size="large" className="max-w-4xl px-6 sm:px-10">
          <div className="space-y-12 sm:space-y-16 text-left">
            <div className="space-y-4 work-reveal">
              <Badge variant="lavender" className="px-3.5 py-1 text-xs">
                HOW ZENOVA WORKS
              </Badge>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-editorial font-bold tracking-tight text-near-black leading-[1.05]">
                We don't build projects. <br />
                <span className="italic font-normal text-deep-violet">We build relationships that scale.</span>
              </h1>
            </div>

            {/* Narrative Storytelling Paragraphs */}
            <div className="space-y-10 sm:space-y-12 text-sm sm:text-base leading-relaxed text-slate-700 font-sans work-reveal">
              <div className="space-y-3">
                <span className="text-xs font-mono text-deep-violet font-bold uppercase tracking-wider block">
                  CHAPTER 01 / LISTEN & UNDERSTAND
                </span>
                <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-near-black">
                  Start with genuine understanding.
                </h3>
                <p>
                  Before we write a single line of code, edit a second of video, or launch a paid campaign, we listen. We take the time to understand your brand identity, your target audience, and your core business goals. There are no templates or guesswork—only quiet, deliberate strategy tailored to your exact vision.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-muted-lavender/40">
                <span className="text-xs font-mono text-deep-violet font-bold uppercase tracking-wider block">
                  CHAPTER 02 / CRAFTSMANSHIP & CLARITY
                </span>
                <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-near-black">
                  Direct collaboration without middle layers.
                </h3>
                <p className="leading-relaxed">
                  You work directly with the engineers, editors, and creators who actually build your project.
                </p>

                {/* PROMINENT HIGH-VISIBILITY CALLOUT BOX */}
                <div className="my-4 p-5 sm:p-6 bg-warm-lavender/90 border-l-4 border-deep-violet rounded-2xl sm:rounded-3xl shadow-md space-y-2">
                  <div className="flex items-center gap-2 text-deep-violet font-mono text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-deep-violet" />
                    <span>OUR REALITY & PROMISE</span>
                  </div>
                  <p className="text-base sm:text-lg font-editorial font-bold text-near-black leading-snug">
                    "We don't claim to be corporate grandmasters or a flawless team—we are a dedicated group of builders who know how to get things done."
                  </p>
                </div>

                <p className="leading-relaxed">
                  We focus on clean execution, clear communication, and taking on work we know how to do well. If a project requires a skill outside our current domain, we are transparent—we never accept jobs we can't deliver.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-muted-lavender/40">
                <span className="text-xs font-mono text-deep-violet font-bold uppercase tracking-wider block">
                  CHAPTER 03 / LONG-TERM IMPACT
                </span>
                <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-near-black">
                  Built to last and evolve over time.
                </h3>
                <p>
                  Launch day is just the beginning. We build digital assets—from sub-second web platforms to high-retention video collateral—designed to perform consistently and grow alongside your business as your audience expands.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. THE ARCHIVE SECTION: UNIFIED 2-ROW x 3-COLUMN GRID WITH BREATHABLE SPACING */}
      <section className="w-full pt-16 sm:pt-24 space-y-10 sm:space-y-14">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12 space-y-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 work-reveal">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
              THE ARCHIVE
            </span>
            <h2 className="text-3xl sm:text-5xl font-editorial font-bold text-near-black">
              Selected Projects Archive
            </h2>
            <p className="card-body-text max-w-lg mx-auto text-xs sm:text-sm text-slate-600 leading-relaxed">
              A curated collection across Web Engineering, Video Production, Ad Distribution, and Creator Promotions—built with focus, clarity, and competence.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 work-reveal">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'web', label: 'Web Engineering' },
              { id: 'video', label: 'Video Production' },
              { id: 'ads', label: 'Ad Creation' },
              { id: 'promotions', label: 'Creator Promotions' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-sans font-medium transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-near-black text-soft-white shadow-md'
                    : 'bg-warm-lavender/60 text-near-black/70 hover:bg-warm-lavender hover:text-near-black'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 2 Rows x 3 Columns Grid (6 Cards per view with generous breathing space) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 work-reveal">
            {filteredProjects.slice(0, 6).map((project) => (
              <Link
                key={project.id}
                to={project.link}
                className="group bg-soft-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-muted-lavender/60 shadow-xs hover:shadow-2xl hover:border-deep-violet/40 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Photo Container */}
                  <div className="w-full aspect-[16/10] sm:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden relative bg-warm-lavender/40 border border-slate-200/50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-near-black/90 backdrop-blur-md text-soft-white text-[9px] font-mono font-bold tracking-wider uppercase border border-white/10">
                      {project.domainLabel}
                    </div>
                  </div>

                  {/* Narrative Title & Description */}
                  <div className="space-y-2 px-1 pt-1">
                    <span className="text-[11px] font-mono text-deep-violet font-semibold uppercase tracking-wider block">
                      {project.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-editorial font-bold text-near-black group-hover:text-deep-violet transition-colors leading-snug flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-deep-violet group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                    <p className="card-body-text text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default WorkPage;
