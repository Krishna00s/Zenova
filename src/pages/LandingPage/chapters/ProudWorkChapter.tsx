import React, { useState, useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { Button } from '../../../components/ui/Button';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import {
  ArrowUpRight,
  Check,
  Play,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { scrollRevealCards } from '../../../animations/reveal';

export const ProudWorkChapter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Carousel active indices set to middle card (index 2 of 5) by default!
  const [webIndex, setWebIndex] = useState(2);
  const [videoIndex, setVideoIndex] = useState(2);
  const [adIndex, setAdIndex] = useState(2);
  const [promoIndex, setPromoIndex] = useState(2);

  useGSAP(() => {
    const cards = containerRef.current?.querySelectorAll('.showcase-card');
    if (cards && cards.length > 0 && containerRef.current) {
      scrollRevealCards(cards, containerRef.current, { stagger: 0.08, duration: 0.5 });
    }
  }, { scope: containerRef });

  // 1. Web Engineering Data (5 Cards)
  const webCards = [
    {
      id: 1,
      badge: 'FINTECH PLATFORM',
      title: 'Lumina Financial',
      desc: 'Real-time analytics dashboard with sub-50ms render speed.',
      image: '/media/photo_understand_dev.jpg',
      link: ROUTES.SERVICES.WEB_DEV,
    },
    {
      id: 2,
      badge: 'LUXURY E-COMMERCE',
      title: 'Aura Atelier Storefront',
      desc: 'High-fashion shopping engine with smooth fluid cart.',
      image: '/media/photo_sketch_wireframe.jpg',
      link: ROUTES.SERVICES.WEB_DEV,
    },
    {
      id: 3,
      badge: 'EDITORIAL CMS',
      title: 'Vanguard Arch Studio',
      desc: '60fps architectural storytelling and photography portfolio.',
      image: '/media/photo_launch_review.jpg',
      link: ROUTES.SERVICES.WEB_DEV,
    },
    {
      id: 4,
      badge: 'ENTERPRISE SAAS',
      title: 'Krona Cloud Portal',
      desc: 'Multi-tenant cloud user workspace with security auth.',
      image: '/media/photo_create_ui.jpg',
      link: ROUTES.SERVICES.WEB_DEV,
    },
    {
      id: 5,
      badge: 'DESIGN TOKENS',
      title: 'Aethel UI Token System',
      desc: '50+ reusable React component tokens and WCAG AAA compliance.',
      image: '/media/cap_web_engineering.jpg',
      link: ROUTES.SERVICES.WEB_DEV,
    },
  ];

  // 2. Video Production Data (5 Cards)
  const videoCards = [
    {
      id: 1,
      badge: 'BRAND DOCUMENTARY',
      title: 'Echoes of Tomorrow',
      desc: '4K DCI mastering with spatial audio scoring.',
      image: '/media/cap_video_editing.jpg',
      link: ROUTES.SERVICES.VIDEO_EDITING,
    },
    {
      id: 2,
      badge: 'COMMERCIAL AD',
      title: 'Aura Silk Product Ad',
      desc: 'High-impact commercial video with cinema color grading.',
      image: '/media/camera_studio_3d.jpg',
      link: ROUTES.SERVICES.VIDEO_EDITING,
    },
    {
      id: 3,
      badge: '9:16 REELS & SHORTS',
      title: 'PULSE Tech Reels',
      desc: 'Vertical mobile short-form series with kinetic text captions.',
      image: '/media/cap_ads_phone.jpg',
      link: ROUTES.SERVICES.VIDEO_EDITING,
    },
    {
      id: 4,
      badge: 'ARTISAN SHOWCASE',
      title: 'Horizon Studio Film',
      desc: 'Tactile color depth and acoustic soundtrack storytelling.',
      image: '/media/contact_agency_studio.jpg',
      link: ROUTES.SERVICES.VIDEO_EDITING,
    },
    {
      id: 5,
      badge: '3D MOTION VFX',
      title: 'Krona VFX Titles',
      desc: 'Dynamic 3D kinetic titles and lower-third graphics.',
      image: '/media/hero_digital_agency_3d.jpg',
      link: ROUTES.SERVICES.VIDEO_EDITING,
    },
  ];

  // 3. Ad Creatives & Distribution Data (5 Cards)
  const adCards = [
    {
      id: 1,
      badge: 'META FB & IG ADS',
      title: 'Lumina Meta Campaign',
      desc: 'Multi-variant video ads backed by custom retargeting funnels.',
      image: '/media/cap_ad_creation.jpg',
      link: ROUTES.SERVICES.AD_CREATION,
    },
    {
      id: 2,
      badge: 'TIKTOK DIRECT RESPONSE',
      title: 'Zenith Direct Ads',
      desc: 'Mobile 9:16 video ads with UGC-style hooks and daily bid tuning.',
      image: '/media/cap_ads_phone.jpg',
      link: ROUTES.SERVICES.AD_CREATION,
    },
    {
      id: 3,
      badge: 'GOOGLE PERF MAX',
      title: 'Vanguard Google Ads',
      desc: 'Search, display, and YouTube video ad ecosystem scaling.',
      image: '/media/cap_promo_megaphone.jpg',
      link: ROUTES.SERVICES.AD_CREATION,
    },
    {
      id: 4,
      badge: 'RETARGETING ENGINE',
      title: 'Aura Commerce Retargeting',
      desc: 'Cart recovery funnels with dynamic offer banners and social proof.',
      image: '/media/contact_studio_natural.jpg',
      link: ROUTES.SERVICES.AD_CREATION,
    },
    {
      id: 5,
      badge: 'OMNICHANNEL SCALE',
      title: 'Omnichannel Growth Stack',
      desc: 'Multi-channel ad distribution scaling ROI to +420%.',
      image: '/media/cap_ad_natural.jpg',
      link: ROUTES.SERVICES.AD_CREATION,
    },
  ];

  // 4. Creator Promotions Data (5 Cards)
  const promoCards = [
    {
      id: 1,
      badge: 'FASHION COLLAB',
      title: 'Fashion x Creator Network',
      desc: '15 fashion creators for authentic unboxing reels & whitelisting.',
      image: '/media/cap_paid_promotions.jpg',
      link: ROUTES.SERVICES.PAID_PROMOTIONS,
    },
    {
      id: 2,
      badge: 'BEAUTY INTEGRATION',
      title: 'Skincare x Beauty Leads',
      desc: 'Long-form tutorial integrations and promo code tracking.',
      image: '/media/photo_user_real_conversations.jpg',
      link: ROUTES.SERVICES.PAID_PROMOTIONS,
    },
    {
      id: 3,
      badge: 'TECH UNBOXING',
      title: 'PULSE x Tech Reviewers',
      desc: '8 vetted tech reviewers with whitelisted Reel ad boosting.',
      image: '/media/hero_natural_agency.jpg',
      link: ROUTES.SERVICES.PAID_PROMOTIONS,
    },
    {
      id: 4,
      badge: 'WELLNESS MICRO-CREATORS',
      title: 'Aura Wellness Series',
      desc: '20 niche wellness creators doing daily routine integrations.',
      image: '/media/photo_evolve_plant.jpg',
      link: ROUTES.SERVICES.PAID_PROMOTIONS,
    },
    {
      id: 5,
      badge: 'CREATOR WHITELISTING',
      title: 'Global Influencer Network',
      desc: 'Whitelisted creator handles for high conversion rate Meta ads.',
      image: '/media/cap_promo_natural.jpg',
      link: ROUTES.SERVICES.PAID_PROMOTIONS,
    },
  ];

  return (
    <section ref={containerRef} className="relative w-full bg-soft-white text-near-black py-32 sm:py-44 md:py-56 space-y-32 sm:space-y-44 md:space-y-56">
      {/* 01 WEB ENGINEERING SHOWCASE */}
      <Container>
        <div className="showcase-card bg-warm-lavender/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-muted-lavender/60 space-y-8 sm:space-y-10 shadow-xs hover:shadow-2xl hover:border-deep-violet/30 transition-all duration-500">
          {/* Top Row: Left Narrative (With Top Padding & Spacious Layout) + Right Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2 sm:pt-4">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
                  01 / WEB ENGINEERING
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-near-black leading-[1.12]">
                  Websites That Work.{' '}
                  <span className="italic font-normal text-deep-violet block">
                    Experiences That Convert.
                  </span>
                </h3>
              </div>

              <p className="card-body-text text-xs sm:text-sm md:text-base leading-relaxed">
                We design and develop modern, responsive websites that load fast, rank better, and turn visitors into customers.
              </p>

              {/* Checklist Grid */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-near-black pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Custom Websites
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Web Applications
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> E-commerce Solutions
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Performance Optimized
                </li>
              </ul>

              <div className="pt-3">
                <Link to={ROUTES.SERVICES.WEB_DEV}>
                  <Button variant="primary" size="md" className="gap-2 px-7 py-3.5 rounded-full shadow-md hover:-translate-y-0.5 transition-all">
                    View Web Engineering <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Main Dedicated Image */}
            <div className="lg:col-span-6 w-full">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-muted-lavender/80 w-full aspect-[16/10] group hover:scale-[1.01] transition-transform duration-500 relative">
                <img
                  src="/media/photo_understand_dev.jpg"
                  alt="Senior Web Developer Workstation"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black/70 via-transparent to-transparent flex items-end justify-between p-4 text-soft-white">
                  <span className="text-[10px] font-mono font-bold bg-deep-violet px-2.5 py-1 rounded-full border border-soft-white/20">
                    React 18 & Next.js Engine
                  </span>
                  <span className="text-xs font-mono font-semibold text-green-400">
                    Sub-Second Speed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Featured Solutions 4-Card Collection on Mobile, 5-Card Row on Desktop */}
          <div className="pt-8 sm:pt-10 border-t border-muted-lavender/50 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet font-semibold tracking-wider">
                FEATURED SOLUTIONS
              </span>

              {/* Desktop Navigation Arrows (Hidden on Mobile) */}
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={() => setWebIndex((prev) => (prev - 1 + webCards.length) % webCards.length)}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-muted-lavender bg-soft-white flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-xs active:scale-95 cursor-pointer"
                  aria-label="Previous Web Card"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setWebIndex((prev) => (prev + 1) % webCards.length)}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-muted-lavender bg-soft-white flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-xs active:scale-95 cursor-pointer"
                  aria-label="Next Web Card"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 4-Card Grid Collection (2x2 Grid) on Mobile, 5-Card Row on Desktop */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
              {webCards.map((_, idx) => {
                const rotatedIdx = (idx + webIndex) % webCards.length;
                const displayCard = webCards[rotatedIdx];
                const isFifthCardOnMobile = idx === 4;

                return (
                  <Link
                    key={`${displayCard.id}-${idx}`}
                    to={displayCard.link}
                    className={`rounded-2xl p-3.5 sm:p-4 transition-all duration-300 flex flex-col justify-between h-full text-left cursor-pointer bg-soft-white text-near-black border border-muted-lavender/70 hover:border-deep-violet/60 hover:bg-warm-lavender/40 hover:ring-2 hover:ring-deep-violet/30 hover:shadow-md hover:-translate-y-0.5 shadow-xs ${
                      isFifthCardOnMobile ? 'hidden md:flex' : 'flex'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="aspect-[16/10] rounded-xl overflow-hidden relative border border-slate-200/50">
                        <img src={displayCard.image} alt={displayCard.title} className="w-full h-full object-cover object-center" />
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-deep-violet text-soft-white text-[8px] font-mono font-bold">
                          {displayCard.badge}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs sm:text-sm font-editorial font-bold text-near-black line-clamp-1">
                          {displayCard.title}
                        </h4>
                        <p className="card-body-text text-[10px] sm:text-[11px] leading-relaxed line-clamp-2">
                          {displayCard.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Navigation Arrows (Centered Underneath 4-Card Collection) */}
            <div className="flex md:hidden items-center justify-center gap-3 pt-4 border-t border-muted-lavender/30">
              <button
                onClick={() => setWebIndex((prev) => (prev - 1 + webCards.length) % webCards.length)}
                className="w-10 h-10 rounded-full border border-muted-lavender bg-soft-white flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-xs active:scale-95 cursor-pointer"
                aria-label="Previous Web Card Mobile"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-mono text-[11px] font-bold text-deep-violet px-3 py-1 rounded-full bg-warm-lavender/50 border border-muted-lavender/50">
                0{((webIndex) % webCards.length) + 1} / 0{webCards.length}
              </span>
              <button
                onClick={() => setWebIndex((prev) => (prev + 1) % webCards.length)}
                className="w-10 h-10 rounded-full border border-muted-lavender bg-soft-white flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-xs active:scale-95 cursor-pointer"
                aria-label="Next Web Card Mobile"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* 02 VIDEO PRODUCTION SHOWCASE */}
      <Container>
        <div className="showcase-card bg-soft-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-muted-lavender/60 space-y-8 sm:space-y-10 shadow-xs hover:shadow-2xl hover:border-deep-violet/30 transition-all duration-500">
          {/* Top Row: Left Main Image + Right Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2 sm:pt-4">
            <div className="lg:col-span-6 w-full order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-muted-lavender/80 w-full aspect-[16/10] group hover:scale-[1.01] transition-transform duration-500 relative">
                <img
                  src="/media/cap_video_editing.jpg"
                  alt="DaVinci Resolve Video Editor Suite"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-near-black/40 backdrop-blur-[1px] flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-soft-white/90 shadow-2xl flex items-center justify-center text-near-black group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-near-black stroke-none ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-near-black/90 backdrop-blur-md text-[10px] font-mono font-bold text-soft-white border border-soft-white/20">
                  4K DCI Cinema Grading
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5 sm:space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
                  02 / VIDEO PRODUCTION
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-near-black leading-[1.12]">
                  Stories That Engage.{' '}
                  <span className="italic font-normal text-deep-violet block">
                    Edits That Inspire.
                  </span>
                </h3>
              </div>

              <p className="card-body-text text-xs sm:text-sm md:text-base leading-relaxed">
                From brand films to short-form content, we craft visuals that connect, inspire, and convert viewers into loyal advocates.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-near-black pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Cinematic Storytelling
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Short-form & Reels
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Color Grading
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Sound Design
                </li>
              </ul>

              <div className="pt-3">
                <Link to={ROUTES.SERVICES.VIDEO_EDITING}>
                  <Button variant="primary" size="md" className="gap-2 px-7 py-3.5 rounded-full shadow-md hover:-translate-y-0.5 transition-all">
                    Explore Video Work <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Row: 4-Card Collection on Mobile, 5-Card Row on Desktop */}
          <div className="pt-8 sm:pt-10 border-t border-muted-lavender/50 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet font-semibold tracking-wider">
                FEATURED EDITS
              </span>

              {/* Desktop Navigation Arrows (Hidden on Mobile) */}
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={() => setVideoIndex((prev) => (prev - 1 + videoCards.length) % videoCards.length)}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-muted-lavender bg-soft-white flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-xs active:scale-95 cursor-pointer"
                  aria-label="Previous Video Card"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setVideoIndex((prev) => (prev + 1) % videoCards.length)}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-muted-lavender bg-soft-white flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-xs active:scale-95 cursor-pointer"
                  aria-label="Next Video Card"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 4-Card Grid Collection (2x2 Grid) on Mobile, 5-Card Row on Desktop */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
              {videoCards.map((_, idx) => {
                const rotatedIdx = (idx + videoIndex) % videoCards.length;
                const displayCard = videoCards[rotatedIdx];
                const isFifthCardOnMobile = idx === 4;

                return (
                  <Link
                    key={`${displayCard.id}-${idx}`}
                    to={displayCard.link}
                    className={`rounded-2xl p-3.5 sm:p-4 transition-all duration-300 flex flex-col justify-between h-full text-left cursor-pointer bg-soft-white text-near-black border border-muted-lavender/70 hover:border-deep-violet/60 hover:bg-warm-lavender/40 hover:ring-2 hover:ring-deep-violet/30 hover:shadow-md hover:-translate-y-0.5 shadow-xs ${
                      isFifthCardOnMobile ? 'hidden md:flex' : 'flex'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="aspect-[16/10] rounded-xl overflow-hidden relative border border-slate-200/50 group">
                        <img src={displayCard.image} alt={displayCard.title} className="w-full h-full object-cover object-center" />
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-deep-violet text-soft-white text-[8px] font-mono font-bold">
                          {displayCard.badge}
                        </div>
                        <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-soft-white/90 flex items-center justify-center">
                          <Play className="w-3 h-3 fill-near-black stroke-none ml-0.5" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs sm:text-sm font-editorial font-bold text-near-black line-clamp-1">
                          {displayCard.title}
                        </h4>
                        <p className="card-body-text text-[10px] sm:text-[11px] leading-relaxed line-clamp-2">
                          {displayCard.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Navigation Arrows (Centered Underneath 4-Card Collection) */}
            <div className="flex md:hidden items-center justify-center gap-3 pt-4 border-t border-muted-lavender/30">
              <button
                onClick={() => setVideoIndex((prev) => (prev - 1 + videoCards.length) % videoCards.length)}
                className="w-10 h-10 rounded-full border border-muted-lavender bg-soft-white flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-xs active:scale-95 cursor-pointer"
                aria-label="Previous Video Card Mobile"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-mono text-[11px] font-bold text-deep-violet px-3 py-1 rounded-full bg-warm-lavender/50 border border-muted-lavender/50">
                0{((videoIndex) % videoCards.length) + 1} / 0{videoCards.length}
              </span>
              <button
                onClick={() => setVideoIndex((prev) => (prev + 1) % videoCards.length)}
                className="w-10 h-10 rounded-full border border-muted-lavender bg-soft-white flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-xs active:scale-95 cursor-pointer"
                aria-label="Next Video Card Mobile"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* 03 AD CREATIVES & DISTRIBUTION SHOWCASE */}
      <Container>
        <div className="showcase-card bg-warm-lavender/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-muted-lavender/60 space-y-8 sm:space-y-10 shadow-xs hover:shadow-2xl hover:border-deep-violet/30 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2 sm:pt-4">
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
                  03 / AD CREATIVES & DISTRIBUTION
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-near-black leading-[1.12]">
                  Create. Publish. Scale.{' '}
                  <span className="italic font-normal text-deep-violet block">
                    All in One Place.
                  </span>
                </h3>
              </div>

              <p className="card-body-text text-xs sm:text-sm md:text-base leading-relaxed">
                We create high-performing ad videos and collateral, then publish and manage them across Meta, Google, and TikTok to maximize ROI.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-near-black pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Ad Video Creation
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Meta (FB & IG) Ads
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Campaign Management
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Performance Tracking
                </li>
              </ul>

              <div className="pt-3 flex items-center gap-4">
                <Link to={ROUTES.SERVICES.AD_CREATION}>
                  <Button variant="primary" size="md" className="gap-2 px-7 py-3.5 rounded-full shadow-md hover:-translate-y-0.5 transition-all">
                    Explore Ad Solutions <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
                <div className="flex items-center gap-2 text-deep-violet">
                  <Facebook className="w-5 h-5 fill-deep-violet stroke-none" />
                  <Instagram className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 w-full">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-muted-lavender/80 w-full aspect-[16/10] group hover:scale-[1.01] transition-transform duration-500 relative">
                <img
                  src="/media/cap_ad_creation.jpg"
                  alt="Ad Growth Strategist Monitoring Performance Analytics"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black/70 via-transparent to-transparent flex items-end justify-between p-4 text-soft-white">
                  <span className="text-[10px] font-mono font-bold bg-deep-violet px-2.5 py-1 rounded-full border border-soft-white/20">
                    Sponsored Ad Creative
                  </span>
                  <span className="text-xs font-mono font-semibold text-green-400">
                    +420% ROAS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: 4-Card Collection on Mobile, 5-Card Row on Desktop */}
          <div className="pt-8 sm:pt-10 border-t border-muted-lavender/50 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet font-semibold tracking-wider">
                FEATURED CAMPAIGNS
              </span>

              {/* Desktop Navigation Arrows (Hidden on Mobile) */}
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={() => setAdIndex((prev) => (prev - 1 + adCards.length) % adCards.length)}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-muted-lavender bg-soft-white flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-xs active:scale-95 cursor-pointer"
                  aria-label="Previous Ad Card"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setAdIndex((prev) => (prev + 1) % adCards.length)}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-muted-lavender bg-soft-white flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-xs active:scale-95 cursor-pointer"
                  aria-label="Next Ad Card"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 4-Card Grid Collection (2x2 Grid) on Mobile, 5-Card Row on Desktop */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
              {adCards.map((_, idx) => {
                const rotatedIdx = (idx + adIndex) % adCards.length;
                const displayCard = adCards[rotatedIdx];
                const isFifthCardOnMobile = idx === 4;

                return (
                  <Link
                    key={`${displayCard.id}-${idx}`}
                    to={displayCard.link}
                    className={`rounded-2xl p-3.5 sm:p-4 transition-all duration-300 flex flex-col justify-between h-full text-left cursor-pointer bg-soft-white text-near-black border border-muted-lavender/70 hover:border-deep-violet/60 hover:bg-warm-lavender/40 hover:ring-2 hover:ring-deep-violet/30 hover:shadow-md hover:-translate-y-0.5 shadow-xs ${
                      isFifthCardOnMobile ? 'hidden md:flex' : 'flex'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="aspect-[16/10] rounded-xl overflow-hidden relative border border-slate-200/50">
                        <img src={displayCard.image} alt={displayCard.title} className="w-full h-full object-cover object-center" />
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-deep-violet text-soft-white text-[8px] font-mono font-bold">
                          {displayCard.badge}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs sm:text-sm font-editorial font-bold text-near-black line-clamp-1">
                          {displayCard.title}
                        </h4>
                        <p className="card-body-text text-[10px] sm:text-[11px] leading-relaxed line-clamp-2">
                          {displayCard.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Navigation Arrows (Centered Underneath 4-Card Collection) */}
            <div className="flex md:hidden items-center justify-center gap-3 pt-4 border-t border-muted-lavender/30">
              <button
                onClick={() => setAdIndex((prev) => (prev - 1 + adCards.length) % adCards.length)}
                className="w-10 h-10 rounded-full border border-muted-lavender bg-soft-white flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-xs active:scale-95 cursor-pointer"
                aria-label="Previous Ad Card Mobile"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-mono text-[11px] font-bold text-deep-violet px-3 py-1 rounded-full bg-warm-lavender/50 border border-muted-lavender/50">
                0{((adIndex) % adCards.length) + 1} / 0{adCards.length}
              </span>
              <button
                onClick={() => setAdIndex((prev) => (prev + 1) % adCards.length)}
                className="w-10 h-10 rounded-full border border-muted-lavender bg-soft-white flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-xs active:scale-95 cursor-pointer"
                aria-label="Next Ad Card Mobile"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* 04 CREATOR PROMOTIONS SHOWCASE */}
      <Container>
        <div className="showcase-card bg-soft-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-muted-lavender/60 space-y-8 sm:space-y-10 shadow-xs hover:shadow-2xl hover:border-deep-violet/30 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2 sm:pt-4">
            <div className="lg:col-span-6 w-full order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-muted-lavender/80 w-full aspect-[16/10] group hover:scale-[1.01] transition-transform duration-500 relative">
                <img
                  src="/media/cap_paid_promotions.jpg"
                  alt="Content Creator Team Filming Campaign"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-soft-white/90 backdrop-blur-md text-near-black font-mono text-[10px] font-bold shadow-md">
                  Vetted Creator Network
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5 sm:space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
                  04 / CREATOR PROMOTIONS
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-near-black leading-[1.12]">
                  Right Creators.{' '}
                  <span className="italic font-normal text-deep-violet block">
                    Real Impact.
                  </span>
                </h3>
              </div>

              <p className="card-body-text text-xs sm:text-sm md:text-base leading-relaxed">
                We connect your brand with authentic influencers and content creators to promote your products and deliver meaningful growth.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-near-black pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Influencer Research
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Campaign Management
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Content Approval
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Performance Tracking
                </li>
              </ul>

              <div className="pt-3">
                <Link to={ROUTES.SERVICES.PAID_PROMOTIONS}>
                  <Button variant="primary" size="md" className="gap-2 px-7 py-3.5 rounded-full shadow-md hover:-translate-y-0.5 transition-all">
                    Explore Creator Networks <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Row: 4-Card Collection on Mobile, 5-Card Row on Desktop */}
          <div className="pt-8 sm:pt-10 border-t border-muted-lavender/50 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet font-semibold tracking-wider">
                FEATURED CREATOR NETWORKS
              </span>

              {/* Desktop Navigation Arrows (Hidden on Mobile) */}
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={() => setPromoIndex((prev) => (prev - 1 + promoCards.length) % promoCards.length)}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-muted-lavender bg-soft-white flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-xs active:scale-95 cursor-pointer"
                  aria-label="Previous Promo Card"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setPromoIndex((prev) => (prev + 1) % promoCards.length)}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-muted-lavender bg-soft-white flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-xs active:scale-95 cursor-pointer"
                  aria-label="Next Promo Card"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 4-Card Grid Collection (2x2 Grid) on Mobile, 5-Card Row on Desktop */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
              {promoCards.map((_, idx) => {
                const rotatedIdx = (idx + promoIndex) % promoCards.length;
                const displayCard = promoCards[rotatedIdx];
                const isFifthCardOnMobile = idx === 4;

                return (
                  <Link
                    key={`${displayCard.id}-${idx}`}
                    to={displayCard.link}
                    className={`rounded-2xl p-3.5 sm:p-4 transition-all duration-300 flex flex-col justify-between h-full text-left cursor-pointer bg-soft-white text-near-black border border-muted-lavender/70 hover:border-deep-violet/60 hover:bg-warm-lavender/40 hover:ring-2 hover:ring-deep-violet/30 hover:shadow-md hover:-translate-y-0.5 shadow-xs ${
                      isFifthCardOnMobile ? 'hidden md:flex' : 'flex'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="aspect-[16/10] rounded-xl overflow-hidden relative border border-slate-200/50">
                        <img src={displayCard.image} alt={displayCard.title} className="w-full h-full object-cover object-center" />
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-deep-violet text-soft-white text-[8px] font-mono font-bold">
                          {displayCard.badge}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs sm:text-sm font-editorial font-bold text-near-black line-clamp-1">
                          {displayCard.title}
                        </h4>
                        <p className="card-body-text text-[10px] sm:text-[11px] leading-relaxed line-clamp-2">
                          {displayCard.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Navigation Arrows (Centered Underneath 4-Card Collection) */}
            <div className="flex md:hidden items-center justify-center gap-3 pt-4 border-t border-muted-lavender/30">
              <button
                onClick={() => setPromoIndex((prev) => (prev - 1 + promoCards.length) % promoCards.length)}
                className="w-10 h-10 rounded-full border border-muted-lavender bg-soft-white flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-xs active:scale-95 cursor-pointer"
                aria-label="Previous Promo Card Mobile"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-mono text-[11px] font-bold text-deep-violet px-3 py-1 rounded-full bg-warm-lavender/50 border border-muted-lavender/50">
                0{((promoIndex) % promoCards.length) + 1} / 0{promoCards.length}
              </span>
              <button
                onClick={() => setPromoIndex((prev) => (prev + 1) % promoCards.length)}
                className="w-10 h-10 rounded-full border border-muted-lavender bg-soft-white flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-xs active:scale-95 cursor-pointer"
                aria-label="Next Promo Card Mobile"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProudWorkChapter;
