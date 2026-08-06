import React, { useState, useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import {
  Megaphone,
  Target,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Share2,
  Video,
  Layers,
  Sparkles,
  Facebook,
  Instagram,
  BarChart3,
  MousePointerClick,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { scrollRevealCards } from '../../../animations/reveal';
import { submitContactInquiry } from '../../../api/contact';

export const AdCreationPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    serviceInterest: 'ad-creation',
    message: '',
  });

  useGSAP(() => {
    const revealEls = containerRef.current?.querySelectorAll('.ad-reveal');
    if (revealEls && revealEls.length > 0 && containerRef.current) {
      scrollRevealCards(revealEls, containerRef.current, { stagger: 0.08, duration: 0.5 });
    }
  }, { scope: containerRef });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await submitContactInquiry(formData);
    setLoading(false);
    if (res.success) {
      setSubmitted(true);
    }
  };

  const adProjects = [
    {
      id: 1,
      category: 'Meta FB & IG Strategy',
      title: 'Lumina Growth — Meta (FB & IG) Campaign',
      subtitle: 'Multi-Variant Video Ads & Retargeting Funnel',
      story: 'Designed high-converting video ad variants targeting specific buyer personas on Facebook and Instagram, backed by custom audience retargeting funnels.',
      highlights: ['8 Ad Creative Variants', 'Targeted Audience Funnels', 'Continuous A/B Hook Testing'],
      image: '/media/cap_ad_natural.jpg',
      badge: 'META ADS',
    },
    {
      id: 2,
      category: 'TikTok Direct Response',
      title: 'Zenith Direct Response — TikTok & Shorts Ads',
      subtitle: 'Native Mobile 9:16 Video Creatives',
      story: 'Created mobile-native 9:16 ad video content engineered with UGC-style hooks, fast call-to-actions, and daily campaign bid optimization.',
      highlights: ['UGC-Style Video Hooks', '9:16 Mobile Native Format', 'Daily Bid Strategy Tuning'],
      image: '/media/cap_promo_natural.jpg',
      badge: 'TIKTOK ADS',
    },
    {
      id: 3,
      category: 'Google Performance Max',
      title: 'Vanguard Omnichannel — Google Performance Max',
      subtitle: 'Search, YouTube & Display Ad Network',
      story: 'Unified Google ad campaign strategy combining search intent keywords, high-res display banners, and YouTube video ad placements.',
      highlights: ['High-Intent Search Terms', 'YouTube Video Placements', 'Automated Performance Max'],
      image: '/media/contact_agency_natural.jpg',
      badge: 'GOOGLE ADS',
    },
    {
      id: 4,
      category: 'Retargeting Funnel Engine',
      title: 'Aura Commerce Retargeting Engine',
      subtitle: 'Dynamic Cart Recovery & Conversion Ads',
      story: 'Automated pixel-tracked retargeting funnel re-engaging window shoppers with customized offer banners and video testimonials.',
      highlights: ['Pixel & Conversion API', 'Dynamic Cart Recovery', 'Custom Video Testimonials'],
      image: '/media/photo_create_natural.jpg',
      badge: 'RETARGETING ENGINE',
    },
  ];

  const totalProjects = adProjects.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalProjects);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  const activeProject = adProjects[activeIndex];

  return (
    <main ref={containerRef} className="w-full bg-soft-white text-near-black pt-28 sm:pt-32 pb-20 md:pb-28 overflow-hidden">
      {/* 1. HERO STORY CHAPTER */}
      <section className="relative w-full pb-16 sm:pb-24">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-deep-violet/15 via-purple-300/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <Badge variant="violet" className="px-3.5 py-1 text-xs shadow-xs">
                AD CREATION & DISTRIBUTION
              </Badge>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-bold text-near-black tracking-tight leading-[1.08]">
                People scroll past boring ads. <br />
                <span className="italic font-normal text-deep-violet">We build ads people watch.</span>
              </h1>

              <p className="card-body-text max-w-xl text-xs sm:text-sm md:text-base leading-relaxed">
                Great advertising combines scroll-stopping video creatives with strategic multi-platform distribution. We create high-converting ad collateral and publish them across Meta, Google, and TikTok to drive real business growth.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a href="#ad-start-form" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto justify-center gap-2.5 px-7 py-3.5 rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all">
                    Launch Your Ad Campaign <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <Link to={ROUTES.WORK.ROOT} className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto justify-center gap-2 px-7 py-3.5 rounded-full border border-muted-lavender bg-warm-lavender/60 hover:bg-warm-lavender hover:-translate-y-0.5 transition-all">
                    See Ad Creatives <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="bg-near-black/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 shadow-2xl border border-muted-lavender/40 space-y-3 hover:border-deep-violet/40 transition-colors">
                <div className="flex items-center justify-between px-2 pb-2 border-b border-soft-white/10">
                  <div className="flex items-center gap-2 text-soft-white/80 font-mono text-[10px]">
                    <Megaphone className="w-3.5 h-3.5 text-deep-violet" />
                    <span>SPONSORED AD CAMPAIGN</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-deep-violet">
                    <Facebook className="w-3.5 h-3.5 fill-deep-violet stroke-none" />
                    <Instagram className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden aspect-[4/3] relative group border border-soft-white/10">
                  <img
                    src="/media/cap_ad_natural.jpg"
                    alt="Ad Campaign Performance Analytics"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-near-black/80 via-transparent to-transparent flex items-end justify-between p-4">
                    <div className="space-y-0.5">
                      <span className="px-2 py-0.5 rounded bg-deep-violet text-[10px] text-soft-white font-mono font-bold">Sponsored Ad Creative</span>
                      <p className="text-soft-white font-sans text-xs font-semibold">High-Converting Direct Response Video</p>
                    </div>
                    <MousePointerClick className="w-4 h-4 text-soft-white/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. OUR AD PHILOSOPHY */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-warm-lavender/40 via-warm-lavender/20 to-soft-white border-y border-muted-lavender/40">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
                WHY OUR ADS WORK
              </span>
              <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black leading-tight">
                Creatives That Connect. <br />
                <span className="italic font-normal text-deep-violet">Campaigns That Scale.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <p className="card-body-text text-xs sm:text-sm md:text-base leading-relaxed">
                Putting money behind a bad ad waste budget. We craft compelling ad videos and visual copy that speak directly to your target audience's needs, then test creative variations to find the winning formula.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
            <div className="ad-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-2xl hover:border-deep-violet/40 hover:-translate-y-1 transition-all space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-warm-lavender text-deep-violet flex items-center justify-center shadow-inner">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Targeted Audience</h3>
              <p className="card-body-text text-xs">
                Reaching people who are genuinely interested in your product or service.
              </p>
            </div>

            <div className="ad-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-2xl hover:border-deep-violet/40 hover:-translate-y-1 transition-all space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-warm-lavender text-deep-violet flex items-center justify-center shadow-inner">
                <Megaphone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">High-Impact Videos</h3>
              <p className="card-body-text text-xs">
                In-house video ad production with strong hooks and clear calls to action.
              </p>
            </div>

            <div className="ad-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-2xl hover:border-deep-violet/40 hover:-translate-y-1 transition-all space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-warm-lavender text-deep-violet flex items-center justify-center shadow-inner">
                <Share2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Multi-Platform</h3>
              <p className="card-body-text text-xs">
                Publishing and managing ads across Meta (FB & IG), Google, and TikTok.
              </p>
            </div>

            <div className="ad-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-2xl hover:border-deep-violet/40 hover:-translate-y-1 transition-all space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-warm-lavender text-deep-violet flex items-center justify-center shadow-inner">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">A/B Testing & Scale</h3>
              <p className="card-body-text text-xs">
                Constantly testing new hooks, headlines, and angles to scale winning ads.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. MONUMENTAL CENTERED "THE WORK SPEAKS" SHOWCASE CARDBOX WITH LOCKED CENTER TITLE & BOTTOM MIDDLE BUTTONS */}
      <section className="py-16 sm:py-24">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          {/* Monumental Screen-Spanning Cardbox */}
          <div className="w-full bg-soft-white rounded-3xl p-6 sm:p-12 lg:p-16 border border-muted-lavender/80 shadow-2xl space-y-10 relative overflow-hidden text-center">
            {/* Background Ambient Glow */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-deep-violet/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* PERFECTLY CENTERED FIXED TITLE HEADER */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold block">
                THE WORK SPEAKS
              </span>
              <h2 className="text-3xl sm:text-5xl font-editorial font-bold text-near-black tracking-tight">
                Featured Ad Campaigns
              </h2>
            </div>

            {/* 3D INFINITE HORIZONTAL CAROUSEL STAGE (LOCKED CENTER POSITION) */}
            <div className="w-full max-w-4xl mx-auto py-2 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]">
              <div className="flex items-center justify-center gap-2 sm:gap-4 py-2 w-full">
                {[-2, -1, 0, 1, 2].map((offset) => {
                  const projectIdx = (activeIndex + offset + totalProjects * 100) % totalProjects;
                  const proj = adProjects[projectIdx];

                  const isCenter = offset === 0;
                  const isAdjacent = Math.abs(offset) === 1;

                  return (
                    <button
                      key={`${proj.id}-${offset}`}
                      onClick={() => setActiveIndex(projectIdx)}
                      className={`transition-all duration-500 rounded-full font-semibold text-xs whitespace-nowrap px-4 sm:px-6 py-2.5 shadow-sm border ${
                        isCenter
                          ? 'bg-deep-violet text-soft-white border-deep-violet scale-105 z-20 shadow-xl opacity-100'
                          : isAdjacent
                          ? 'bg-warm-lavender/70 text-near-black border-muted-lavender/80 scale-95 z-10 opacity-70 hover:opacity-90'
                          : 'bg-warm-lavender/30 text-near-black/50 border-muted-lavender/40 scale-85 z-0 opacity-25 blur-[1px] pointer-events-none'
                      }`}
                    >
                      {proj.category}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ACTIVE PROJECT DISPLAY */}
            <div key={activeProject.id} className="pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left animate-fade-in transition-all duration-500">
              {/* Left Project Info */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center justify-between">
                  <Badge variant="violet" className="text-[10px]">
                    {activeProject.badge}
                  </Badge>
                  <span className="font-mono text-xs text-neutral-slate font-bold">
                    Campaign 0{activeIndex + 1} / 0{totalProjects}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
                    {activeProject.title}
                  </h3>
                  <p className="text-xs font-mono text-deep-violet font-semibold uppercase tracking-wider">
                    {activeProject.subtitle}
                  </p>
                </div>

                <p className="card-body-text text-xs sm:text-sm leading-relaxed">
                  {activeProject.story}
                </p>

                <div className="pt-2 space-y-2.5 border-t border-muted-lavender/40">
                  {activeProject.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2.5 text-xs font-semibold text-near-black">
                      <CheckCircle2 className="w-4 h-4 text-deep-violet shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Interactive Ad Frame */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-muted-lavender/60 w-full aspect-[16/10] relative group">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-deep-violet/90 backdrop-blur-md text-[10px] font-mono font-bold text-soft-white">
                    {activeProject.badge}
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM MIDDLE CAROUSEL NAVIGATION BUTTONS */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-muted-lavender/40 w-full text-center">
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-full border border-muted-lavender flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-md active:scale-95"
                  aria-label="Previous Campaign"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <span className="font-mono text-xs font-bold text-near-black px-4 py-2 rounded-full bg-warm-lavender/50 border border-muted-lavender/60">
                  Campaign 0{activeIndex + 1} / 0{totalProjects}
                </span>

                <button
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full border border-muted-lavender flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-md active:scale-95"
                  aria-label="Next Campaign"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. AD DISTRIBUTION MATRIX */}
      <section className="py-16 sm:py-20 bg-warm-lavender/30 border-t border-muted-lavender/40">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
              AD DISTRIBUTION STACK
            </span>
            <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
              Multi-Channel Paid Ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-4 rounded-2xl bg-soft-white border border-muted-lavender/60 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-deep-violet text-soft-white mx-auto flex items-center justify-center">
                <Target className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">Meta Ads</h4>
              <p className="card-body-text text-[10px]">FB & IG Campaigns</p>
            </div>

            <div className="p-4 rounded-2xl bg-soft-white border border-muted-lavender/60 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-deep-violet text-soft-white mx-auto flex items-center justify-center">
                <BarChart3 className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">Google Ads</h4>
              <p className="card-body-text text-[10px]">Search & Performance Max</p>
            </div>

            <div className="p-4 rounded-2xl bg-soft-white border border-muted-lavender/60 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-deep-violet text-soft-white mx-auto flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">TikTok Ads</h4>
              <p className="card-body-text text-[10px]">Mobile Video Ads</p>
            </div>

            <div className="p-4 rounded-2xl bg-soft-white border border-muted-lavender/60 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-deep-violet text-soft-white mx-auto flex items-center justify-center">
                <Layers className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">GA4 Analytics</h4>
              <p className="card-body-text text-[10px]">Funnel Tracking</p>
            </div>

            <div className="p-4 rounded-2xl bg-soft-white border border-muted-lavender/60 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-deep-violet text-soft-white mx-auto flex items-center justify-center">
                <Video className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">Studio Production</h4>
              <p className="card-body-text text-[10px]">Video Ad Collateral</p>
            </div>

            <div className="p-4 rounded-2xl bg-soft-white border border-muted-lavender/60 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-deep-violet text-soft-white mx-auto flex items-center justify-center">
                <Share2 className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">Omnichannel</h4>
              <p className="card-body-text text-[10px]">Campaign Scaling</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. SIMPLE 3-STEP PROCESS */}
      <section className="py-16 sm:py-20 bg-soft-white border-t border-muted-lavender/40">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
              SIMPLE 3-STEP PROCESS
            </span>
            <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
              How We Launch & Run Ads
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-warm-lavender/30 rounded-2xl p-6 border border-muted-lavender/60 space-y-3 hover:-translate-y-1 transition-all">
              <span className="text-xs font-mono text-deep-violet font-bold">STEP 01</span>
              <h3 className="text-xl font-editorial font-bold">Produce Ad Videos</h3>
              <p className="card-body-text text-xs">
                We craft high-converting ad video collateral and imagery focused on your key selling points.
              </p>
            </div>

            <div className="bg-warm-lavender/30 rounded-2xl p-6 border border-muted-lavender/60 space-y-3 hover:-translate-y-1 transition-all">
              <span className="text-xs font-mono text-deep-violet font-bold">STEP 02</span>
              <h3 className="text-xl font-editorial font-bold">Setup & Publish Campaigns</h3>
              <p className="card-body-text text-xs">
                We build audience retargeting funnels and publish ad campaigns across Meta, Google, and TikTok.
              </p>
            </div>

            <div className="bg-warm-lavender/30 rounded-2xl p-6 border border-muted-lavender/60 space-y-3 hover:-translate-y-1 transition-all">
              <span className="text-xs font-mono text-deep-violet font-bold">STEP 03</span>
              <h3 className="text-xl font-editorial font-bold">Optimize & Scale</h3>
              <p className="card-body-text text-xs">
                We monitor performance daily, test new creative hooks, and scale up winning ad campaigns.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. INQUIRY FORM */}
      <section id="ad-start-form" className="py-16 sm:py-24 bg-warm-lavender/40 border-t border-muted-lavender/50">
        <Container size="large" className="max-w-4xl px-6 sm:px-10">
          <div className="bg-soft-white rounded-3xl p-6 sm:p-10 border border-muted-lavender/80 shadow-xl space-y-6">
            <div className="text-center space-y-2">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
                LAUNCH YOUR AD CAMPAIGN
              </span>
              <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
                Ready to Grow Your Paid Reach?
              </h2>
              <p className="card-body-text text-xs sm:text-sm max-w-lg mx-auto">
                Tell us about your product or campaign goals. We reply within 24 hours with an ad strategy proposal.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <Sparkles className="w-12 h-12 text-deep-violet mx-auto" />
                <h3 className="text-xl font-editorial font-bold">Inquiry Received</h3>
                <p className="card-body-text text-xs">We will review your ad goals and send a campaign proposal.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-warm-lavender/30 border border-muted-lavender text-xs focus:ring-2 focus:ring-deep-violet/30"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-warm-lavender/30 border border-muted-lavender text-xs focus:ring-2 focus:ring-deep-violet/30"
                  />
                </div>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your product line, target audience, and ad goals *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-warm-lavender/30 border border-muted-lavender text-xs focus:ring-2 focus:ring-deep-violet/30 resize-none"
                />
                <Button type="submit" variant="primary" disabled={loading} className="w-full justify-center py-3.5 rounded-full shadow-md">
                  {loading ? 'Sending Inquiry...' : 'Send Ad Campaign Message'}
                </Button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default AdCreationPage;
