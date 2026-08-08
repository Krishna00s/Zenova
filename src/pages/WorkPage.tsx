import React, { useState, useRef } from 'react';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Globe,
  Film,
  Megaphone,
  Share2,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { scrollRevealCards } from '../animations/reveal';

export const WorkPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Carousel indices for the 4 project sections
  const [webIdx, setWebIdx] = useState(0);
  const [videoIdx, setVideoIdx] = useState(0);
  const [adIdx, setAdIdx] = useState(0);
  const [promoIdx, setPromoIdx] = useState(0);

  useGSAP(() => {
    const revealEls = containerRef.current?.querySelectorAll('.work-reveal');
    if (revealEls && revealEls.length > 0 && containerRef.current) {
      scrollRevealCards(revealEls, containerRef.current, { stagger: 0.08, duration: 0.5 });
    }
  }, { scope: containerRef });

  const webProjects = [
    { id: 1, title: 'Lumina Financial Platform', category: 'Fintech Web App', image: '/media/photo_understand_dev.jpg', link: ROUTES.SERVICES.WEB_DEV },
    { id: 2, title: 'Aura Atelier Storefront', category: 'Luxury E-Commerce', image: '/media/photo_sketch_wireframe.jpg', link: ROUTES.SERVICES.WEB_DEV },
    { id: 3, title: 'Vanguard Architectural Studio', category: 'Editorial CMS', image: '/media/photo_launch_review.jpg', link: ROUTES.SERVICES.WEB_DEV },
    { id: 4, title: 'Krona Cloud User Portal', category: 'Enterprise SaaS', image: '/media/photo_create_ui.jpg', link: ROUTES.SERVICES.WEB_DEV },
    { id: 5, title: 'Aethel UI Token System', category: 'Design System', image: '/media/cap_web_engineering.jpg', link: ROUTES.SERVICES.WEB_DEV },
  ];

  const videoProjects = [
    { id: 1, title: 'Echoes of Tomorrow', category: '4K Brand Documentary', image: '/media/cap_video_editing.jpg', link: ROUTES.SERVICES.VIDEO_EDITING },
    { id: 2, title: 'Aura Silk Commercial Ad', category: 'Commercial Broadcast', image: '/media/camera_studio_3d.jpg', link: ROUTES.SERVICES.VIDEO_EDITING },
    { id: 3, title: 'PULSE Tech Vertical Series', category: '9:16 Mobile Reels', image: '/media/cap_ads_phone.jpg', link: ROUTES.SERVICES.VIDEO_EDITING },
    { id: 4, title: 'Horizon Studio Craftsman', category: 'Artisan Portrait', image: '/media/contact_agency_studio.jpg', link: ROUTES.SERVICES.VIDEO_EDITING },
    { id: 5, title: 'Krona 3D Title Suite', category: 'Motion VFX', image: '/media/hero_digital_agency_3d.jpg', link: ROUTES.SERVICES.VIDEO_EDITING },
  ];

  const adProjects = [
    { id: 1, title: 'Lumina Meta Growth Funnel', category: 'Meta FB & IG Ads', image: '/media/cap_ad_creation.jpg', link: ROUTES.SERVICES.AD_CREATION },
    { id: 2, title: 'Zenith Direct Response Ads', category: 'TikTok & Shorts Ads', image: '/media/cap_ads_phone.jpg', link: ROUTES.SERVICES.AD_CREATION },
    { id: 3, title: 'Vanguard Omnichannel Ads', category: 'Google Performance Max', image: '/media/cap_promo_megaphone.jpg', link: ROUTES.SERVICES.AD_CREATION },
    { id: 4, title: 'Aura Retargeting Engine', category: 'Conversion Funnel', image: '/media/contact_studio_natural.jpg', link: ROUTES.SERVICES.AD_CREATION },
    { id: 5, title: 'Omnichannel Scale Stack', category: 'Multi-Channel Growth', image: '/media/cap_ad_natural.jpg', link: ROUTES.SERVICES.AD_CREATION },
  ];

  const promoProjects = [
    { id: 1, title: 'Fashion x Creator Network', category: 'Fashion Unboxing Reels', image: '/media/cap_paid_promotions.jpg', link: ROUTES.SERVICES.PAID_PROMOTIONS },
    { id: 2, title: 'Skincare x Beauty Leads', category: 'YouTube Tutorial Integrations', image: '/media/photo_user_real_conversations.jpg', link: ROUTES.SERVICES.PAID_PROMOTIONS },
    { id: 3, title: 'PULSE Tech x Reviewers', category: 'Tech Unboxing Series', image: '/media/hero_natural_agency.jpg', link: ROUTES.SERVICES.PAID_PROMOTIONS },
    { id: 4, title: 'Aura Wellness Campaign', category: 'Micro-Influencer Routines', image: '/media/photo_evolve_plant.jpg', link: ROUTES.SERVICES.PAID_PROMOTIONS },
    { id: 5, title: 'Global Creator Network', category: 'Whitelisted Handle Boost', image: '/media/cap_promo_natural.jpg', link: ROUTES.SERVICES.PAID_PROMOTIONS },
  ];

  return (
    <main ref={containerRef} className="w-full bg-soft-white text-near-black pt-28 sm:pt-36 pb-20 md:pb-28 overflow-hidden">
      {/* 1. HOW ZENOVA WORKS: EDITORIAL STORYTELLING CHAPTER (NO CARDS) */}
      <section className="relative w-full pb-20 sm:pb-32 border-b border-muted-lavender/50">
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
            <div className="space-y-10 sm:space-y-12 text-sm sm:text-base leading-relaxed text-neutral-slate font-sans work-reveal">
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

              <div className="space-y-3 pt-4 border-t border-muted-lavender/40">
                <span className="text-xs font-mono text-deep-violet font-bold uppercase tracking-wider block">
                  CHAPTER 02 / CRAFTSMANSHIP & CLARITY
                </span>
                <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-near-black">
                  Direct collaboration without middle layers.
                </h3>
                <p>
                  You work directly with the engineers, editors, and creators who actually build your project. We don't claim to be corporate grandmasters or a flawless team—we are a dedicated group of builders who know how to get things done. We focus on clean execution, clear communication, and shipping work that helps your business grow.
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

      {/* 2. ALL PROJECTS SHOWCASE: HALF-SCREEN SECTIONS WITH HORIZONTAL CAROUSELS */}
      <div className="w-full pt-16 sm:pt-24 space-y-24 sm:space-y-36">
        <div className="text-center max-w-2xl mx-auto space-y-3 px-6 work-reveal">
          <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
            THE ARCHIVE
          </span>
          <h2 className="text-3xl sm:text-5xl font-editorial font-bold text-near-black">
            All Zenova Projects
          </h2>
          <p className="card-body-text text-xs sm:text-sm">
            Explore our complete portfolio across Web Engineering, Video Production, Ad Distribution, and Creator Networks.
          </p>
        </div>

        {/* SECTION A: WEB ENGINEERING (HALF-SCREEN SCREEN SPACE) */}
        <section className="min-h-[45vh] sm:min-h-[50vh] flex flex-col justify-center py-10 border-y border-muted-lavender/40 bg-warm-lavender/20">
          <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-deep-violet" />
                <h3 className="text-xl sm:text-2xl font-editorial font-bold text-near-black">
                  01 / Web Engineering Projects
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setWebIdx((prev) => (prev - 1 + webProjects.length) % webProjects.length)}
                  className="w-10 h-10 rounded-full border border-muted-lavender bg-soft-white flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-xs active:scale-95 cursor-pointer"
                  aria-label="Previous Web Project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setWebIdx((prev) => (prev + 1) % webProjects.length)}
                  className="w-10 h-10 rounded-full border border-muted-lavender bg-soft-white flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-xs active:scale-95 cursor-pointer"
                  aria-label="Next Web Project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Horizontal Project Card Carousel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {webProjects.map((p, idx) => {
                const isActive = idx === webIdx;
                return (
                  <Link
                    key={p.id}
                    to={p.link}
                    onClick={() => setWebIdx(idx)}
                    className={`group rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between h-full bg-soft-white ${
                      isActive
                        ? 'border-deep-violet shadow-xl ring-2 ring-deep-violet/30 scale-[1.02] z-10'
                        : 'border-muted-lavender/60 shadow-xs hover:shadow-md hover:-translate-y-1'
                    }`}
                  >
                    <div className="aspect-[16/10] w-full overflow-hidden relative">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-deep-violet text-soft-white text-[8px] font-mono font-bold">
                        {p.category}
                      </div>
                    </div>
                    <div className="p-4 space-y-1">
                      <h4 className="text-sm font-editorial font-bold text-near-black group-hover:text-deep-violet transition-colors">
                        {p.title}
                      </h4>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>

        {/* SECTION B: VIDEO PRODUCTION (HALF-SCREEN SCREEN SPACE) */}
        <section className="min-h-[45vh] sm:min-h-[50vh] flex flex-col justify-center py-10 border-b border-muted-lavender/40 bg-soft-white">
          <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Film className="w-5 h-5 text-deep-violet" />
                <h3 className="text-xl sm:text-2xl font-editorial font-bold text-near-black">
                  02 / Video Production Projects
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setVideoIdx((prev) => (prev - 1 + videoProjects.length) % videoProjects.length)}
                  className="w-10 h-10 rounded-full border border-muted-lavender bg-soft-white flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-xs active:scale-95 cursor-pointer"
                  aria-label="Previous Video Project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setVideoIdx((prev) => (prev + 1) % videoProjects.length)}
                  className="w-10 h-10 rounded-full border border-muted-lavender bg-soft-white flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-xs active:scale-95 cursor-pointer"
                  aria-label="Next Video Project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Horizontal Project Card Carousel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {videoProjects.map((p, idx) => {
                const isActive = idx === videoIdx;
                return (
                  <Link
                    key={p.id}
                    to={p.link}
                    onClick={() => setVideoIdx(idx)}
                    className={`group rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between h-full bg-soft-white ${
                      isActive
                        ? 'border-deep-violet shadow-xl ring-2 ring-deep-violet/30 scale-[1.02] z-10'
                        : 'border-muted-lavender/60 shadow-xs hover:shadow-md hover:-translate-y-1'
                    }`}
                  >
                    <div className="aspect-[16/10] w-full overflow-hidden relative">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-deep-violet text-soft-white text-[8px] font-mono font-bold">
                        {p.category}
                      </div>
                      <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-soft-white/90 flex items-center justify-center">
                        <Play className="w-3 h-3 fill-near-black stroke-none ml-0.5" />
                      </div>
                    </div>
                    <div className="p-4 space-y-1">
                      <h4 className="text-sm font-editorial font-bold text-near-black group-hover:text-deep-violet transition-colors">
                        {p.title}
                      </h4>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>

        {/* SECTION C: AD CREATIVES & DISTRIBUTION (HALF-SCREEN SCREEN SPACE) */}
        <section className="min-h-[45vh] sm:min-h-[50vh] flex flex-col justify-center py-10 border-b border-muted-lavender/40 bg-warm-lavender/20">
          <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Megaphone className="w-5 h-5 text-deep-violet" />
                <h3 className="text-xl sm:text-2xl font-editorial font-bold text-near-black">
                  03 / Ad Creatives & Distribution Projects
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setAdIdx((prev) => (prev - 1 + adProjects.length) % adProjects.length)}
                  className="w-10 h-10 rounded-full border border-muted-lavender bg-soft-white flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-xs active:scale-95 cursor-pointer"
                  aria-label="Previous Ad Project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setAdIdx((prev) => (prev + 1) % adProjects.length)}
                  className="w-10 h-10 rounded-full border border-muted-lavender bg-soft-white flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-xs active:scale-95 cursor-pointer"
                  aria-label="Next Ad Project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Horizontal Project Card Carousel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {adProjects.map((p, idx) => {
                const isActive = idx === adIdx;
                return (
                  <Link
                    key={p.id}
                    to={p.link}
                    onClick={() => setAdIdx(idx)}
                    className={`group rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between h-full bg-soft-white ${
                      isActive
                        ? 'border-deep-violet shadow-xl ring-2 ring-deep-violet/30 scale-[1.02] z-10'
                        : 'border-muted-lavender/60 shadow-xs hover:shadow-md hover:-translate-y-1'
                    }`}
                  >
                    <div className="aspect-[16/10] w-full overflow-hidden relative">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-deep-violet text-soft-white text-[8px] font-mono font-bold">
                        {p.category}
                      </div>
                    </div>
                    <div className="p-4 space-y-1">
                      <h4 className="text-sm font-editorial font-bold text-near-black group-hover:text-deep-violet transition-colors">
                        {p.title}
                      </h4>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>

        {/* SECTION D: CREATOR PROMOTIONS & COLLABORATIONS (HALF-SCREEN SCREEN SPACE) */}
        <section className="min-h-[45vh] sm:min-h-[50vh] flex flex-col justify-center py-10 border-b border-muted-lavender/40 bg-soft-white">
          <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-deep-violet" />
                <h3 className="text-xl sm:text-2xl font-editorial font-bold text-near-black">
                  04 / Creator Promotions Projects
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPromoIdx((prev) => (prev - 1 + promoProjects.length) % promoProjects.length)}
                  className="w-10 h-10 rounded-full border border-muted-lavender bg-soft-white flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-xs active:scale-95 cursor-pointer"
                  aria-label="Previous Promo Project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setPromoIdx((prev) => (prev + 1) % promoProjects.length)}
                  className="w-10 h-10 rounded-full border border-muted-lavender bg-soft-white flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-xs active:scale-95 cursor-pointer"
                  aria-label="Next Promo Project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Horizontal Project Card Carousel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {promoProjects.map((p, idx) => {
                const isActive = idx === promoIdx;
                return (
                  <Link
                    key={p.id}
                    to={p.link}
                    onClick={() => setPromoIdx(idx)}
                    className={`group rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between h-full bg-soft-white ${
                      isActive
                        ? 'border-deep-violet shadow-xl ring-2 ring-deep-violet/30 scale-[1.02] z-10'
                        : 'border-muted-lavender/60 shadow-xs hover:shadow-md hover:-translate-y-1'
                    }`}
                  >
                    <div className="aspect-[16/10] w-full overflow-hidden relative">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-deep-violet text-soft-white text-[8px] font-mono font-bold">
                        {p.category}
                      </div>
                    </div>
                    <div className="p-4 space-y-1">
                      <h4 className="text-sm font-editorial font-bold text-near-black group-hover:text-deep-violet transition-colors">
                        {p.title}
                      </h4>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>
      </div>
    </main>
  );
};

export default WorkPage;
