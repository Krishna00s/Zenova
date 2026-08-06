import React, { useState, useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { Link as RouterLink } from 'react-router-dom';
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
  DollarSign,
  Users,
  Sliders,
  Send,
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
      story: 'Designed high-converting video ad variants targeting specific buyer personas on Facebook and Instagram, backed by custom audience retargeting funnels managed by our paid media strategists.',
      highlights: ['8 Ad Creative Variants', 'Targeted Audience Funnels', 'Continuous A/B Hook Testing'],
      image: '/media/cap_ad_creation.jpg',
      badge: 'META ADS',
    },
    {
      id: 2,
      category: 'TikTok Direct Response',
      title: 'Zenith Direct Response — TikTok & Shorts Ads',
      subtitle: 'Native Mobile 9:16 Video Creatives',
      story: 'Created mobile-native 9:16 ad video content engineered with UGC-style hooks, fast call-to-actions, and daily campaign bid optimization by our ad directors.',
      highlights: ['UGC-Style Video Hooks', '9:16 Mobile Native Format', 'Daily Bid Strategy Tuning'],
      image: '/media/cap_ads_phone.jpg',
      badge: 'TIKTOK ADS',
    },
    {
      id: 3,
      category: 'Google Performance Max',
      title: 'Vanguard Omnichannel — Google Performance Max',
      subtitle: 'Search, YouTube & Display Ad Network',
      story: 'Unified Google ad campaign strategy combining search intent keywords, high-res display banners, and YouTube video ad placements scaled by our media buyers.',
      highlights: ['High-Intent Search Terms', 'YouTube Video Placements', 'Automated Performance Max'],
      image: '/media/cap_promo_megaphone.jpg',
      badge: 'GOOGLE ADS',
    },
    {
      id: 4,
      category: 'Retargeting Funnel Engine',
      title: 'Aura Commerce Retargeting Engine',
      subtitle: 'Dynamic Cart Recovery & Conversion Ads',
      story: 'Automated pixel-tracked retargeting funnel re-engaging window shoppers with customized offer banners and video testimonials crafted by our CRO team.',
      highlights: ['Pixel & Conversion API', 'Dynamic Cart Recovery', 'Custom Video Testimonials'],
      image: '/media/contact_studio_natural.jpg',
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
    <main ref={containerRef} className="w-full bg-[#090D16] text-soft-white pt-28 sm:pt-32 pb-20 md:pb-28 overflow-hidden">
      {/* 1. HERO STORY CHAPTER WITH LAYERED SPONSORED AD MOCKUP */}
      <section className="relative w-full pb-16 sm:pb-24">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-slate-800/20 rounded-full blur-3xl pointer-events-none -z-10" />

        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <Badge variant="violet" className="px-3.5 py-1 text-xs shadow-xs bg-slate-800 text-soft-white border-slate-700">
                AD CREATION & DISTRIBUTION
              </Badge>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-bold text-soft-white tracking-tight leading-[1.08]">
                People scroll past boring ads. <br />
                <span className="italic font-normal text-slate-400">We build ads people watch.</span>
              </h1>

              <p className="card-body-text max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-slate-300">
                Great advertising combines scroll-stopping video creatives with strategic multi-platform distribution. We create high-converting ad collateral and publish them across Meta, Google, and TikTok to drive real business growth.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a href="#ad-start-form" className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto justify-center gap-2.5 px-7 py-3.5 rounded-full bg-soft-white text-near-black hover:bg-slate-200 shadow-xl hover:-translate-y-0.5 transition-all font-semibold">
                    Launch Your Ad Campaign <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <RouterLink to={ROUTES.WORK.ROOT} className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto justify-center gap-2 px-7 py-3.5 rounded-full border border-slate-800 bg-[#0D131F] text-soft-white hover:bg-slate-800 hover:-translate-y-0.5 transition-all">
                    See Ad Creatives <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </RouterLink>
              </div>
            </div>

            {/* 3D MULTI-LAYERED SPONSORED AD CREATIVE SHOWCASE MOCKUP */}
            <div className="lg:col-span-6 w-full relative">
              <div className="bg-[#0D131F] backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-2xl border border-slate-800 space-y-3 relative">
                <div className="flex items-center justify-between px-2 pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-soft-white/80 font-mono text-[10px]">
                    <Megaphone className="w-3.5 h-3.5 text-soft-white" />
                    <span>SPONSORED AD CAMPAIGN</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Facebook className="w-3.5 h-3.5 text-soft-white fill-soft-white stroke-none" />
                    <Instagram className="w-3.5 h-3.5 text-soft-white" />
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden aspect-[16/10] relative group border border-slate-800">
                  <img
                    src="/media/cap_ad_creation.jpg"
                    alt="Ad Growth Strategist Monitoring Campaign Analytics"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090D16]/90 via-transparent to-transparent flex items-end justify-between p-4">
                    <div className="space-y-0.5">
                      <span className="px-2 py-0.5 rounded bg-[#090D16] text-[10px] text-soft-white font-mono font-bold border border-slate-700">Sponsored Ad Creative</span>
                      <p className="text-soft-white font-sans text-xs font-semibold">High-Converting Direct Response Video</p>
                    </div>
                    <MousePointerClick className="w-4 h-4 text-soft-white/80" />
                  </div>
                </div>

                <div className="absolute -top-4 -right-2 sm:-right-4 bg-soft-white text-near-black px-4 py-2.5 rounded-2xl shadow-xl border border-slate-300 flex items-center gap-2 z-20 animate-pulse-slow">
                  <div className="w-7 h-7 rounded-xl bg-slate-200 flex items-center justify-center font-bold font-mono text-xs text-near-black">
                    <DollarSign className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] font-mono text-neutral-slate block uppercase">Campaign ROAS</span>
                    <span className="text-xs font-bold font-editorial text-green-700">+420% ROI</span>
                  </div>
                </div>

                <div className="absolute -left-3 sm:-left-6 bottom-4 w-32 sm:w-40 bg-[#090D16] p-2 rounded-2xl shadow-2xl border-2 border-slate-700 z-20 animate-bounce-slow">
                  <div className="rounded-xl overflow-hidden aspect-[9/16] relative border border-slate-800">
                    <img
                      src="/media/cap_ads_phone.jpg"
                      alt="TikTok Ad Mobile Feed"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 right-2 p-1 rounded bg-[#090D16] text-[8px] text-soft-white font-mono text-center font-bold border border-slate-700">
                      TikTok Ad Creative
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. OUR AD PHILOSOPHY CARDS WITH DEDICATED VISUAL GRAPHICS */}
      <section className="py-16 sm:py-24 bg-[#0B0F17] border-y border-slate-800">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-slate-400 tracking-widest font-semibold">
                WHY OUR ADS WORK
              </span>
              <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-soft-white leading-tight">
                Creatives That Connect. <br />
                <span className="italic font-normal text-slate-400">Campaigns That Scale.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <p className="card-body-text text-xs sm:text-sm md:text-base leading-relaxed text-slate-300">
                Putting money behind a bad ad waste budget. We craft compelling ad videos and visual copy that speak directly to your target audience's needs, then test creative variations to find the winning formula.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
            <div className="ad-reveal bg-[#131B2E] rounded-2xl p-6 border border-slate-800 shadow-xs hover:shadow-2xl hover:border-slate-700 hover:-translate-y-1 transition-all space-y-4">
              <div className="h-24 w-full rounded-xl bg-[#090D16] p-3 flex flex-col justify-between border border-slate-800 text-soft-white">
                <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
                  <span>AUDIENCE TARGETING</span>
                  <Target className="w-3.5 h-3.5 text-soft-white" />
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-green-400" />
                  <span className="font-mono text-xs font-bold">Lookalike 1% Custom</span>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-editorial font-bold text-soft-white">Targeted Audience</h3>
                <p className="card-body-text text-xs text-slate-400">
                  Reaching people who are genuinely interested in your product or service.
                </p>
              </div>
            </div>

            <div className="ad-reveal bg-[#131B2E] rounded-2xl p-6 border border-slate-800 shadow-xs hover:shadow-2xl hover:border-slate-700 hover:-translate-y-1 transition-all space-y-4">
              <div className="h-24 w-full rounded-xl bg-[#090D16] p-3 flex flex-col justify-between border border-slate-800">
                <div className="flex items-center justify-between text-[9px] font-mono text-soft-white font-bold">
                  <span>UGC VIDEO HOOK</span>
                  <Video className="w-3.5 h-3.5 text-soft-white" />
                </div>
                <div className="text-[10px] font-mono font-bold text-soft-white bg-[#131B2E] p-1.5 rounded border border-slate-700 text-center">
                  Scroll-Stopping Hook 01
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-editorial font-bold text-soft-white">High-Impact Videos</h3>
                <p className="card-body-text text-xs text-slate-400">
                  In-house video ad production with strong hooks and clear calls to action.
                </p>
              </div>
            </div>

            <div className="ad-reveal bg-[#131B2E] rounded-2xl p-6 border border-slate-800 shadow-xs hover:shadow-2xl hover:border-slate-700 hover:-translate-y-1 transition-all space-y-4">
              <div className="h-24 w-full rounded-xl bg-[#090D16] p-3 flex items-center justify-around border border-slate-800 text-soft-white">
                <Facebook className="w-5 h-5 text-soft-white" />
                <Instagram className="w-5 h-5 text-soft-white" />
                <BarChart3 className="w-5 h-5 text-green-400" />
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-editorial font-bold text-soft-white">Multi-Platform</h3>
                <p className="card-body-text text-xs text-slate-400">
                  Publishing and managing ads across Meta (FB & IG), Google, and TikTok.
                </p>
              </div>
            </div>

            <div className="ad-reveal bg-[#131B2E] rounded-2xl p-6 border border-slate-800 shadow-xs hover:shadow-2xl hover:border-slate-700 hover:-translate-y-1 transition-all space-y-4">
              <div className="h-24 w-full rounded-xl bg-[#090D16] border border-slate-800 p-3 flex flex-col justify-between shadow-xs">
                <div className="flex items-center justify-between text-[9px] font-mono text-soft-white font-bold">
                  <span>A/B HOOK SPLIT TEST</span>
                  <TrendingUp className="w-3.5 h-3.5 text-green-400" />
                </div>
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-slate-300">Variant A: +3.8% CTR</span>
                  <span className="text-green-400 font-bold">WINNER</span>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-editorial font-bold text-soft-white">A/B Testing & Scale</h3>
                <p className="card-body-text text-xs text-slate-400">
                  Constantly testing new hooks, headlines, and angles to scale winning ads.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. MONUMENTAL SHOWCASE CARDBOX */}
      <section className="py-16 sm:py-24">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="w-full bg-[#0D131F] rounded-3xl p-6 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl space-y-8 relative overflow-hidden text-center">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-slate-400 tracking-widest font-semibold block">
                THE WORK SPEAKS
              </span>
              <h2 className="text-3xl sm:text-5xl font-editorial font-bold text-soft-white tracking-tight">
                Featured Ad Campaigns
              </h2>
            </div>

            <div className="relative w-full max-w-5xl mx-auto py-2">
              <button
                onClick={handlePrev}
                className="absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#131B2E] border border-slate-700 shadow-xl flex items-center justify-center text-soft-white hover:bg-soft-white hover:text-near-black transition-all z-30 active:scale-95"
                aria-label="Previous Campaign Left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="w-full overflow-hidden px-8 sm:px-12 [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]">
                <div className="flex items-center justify-center gap-2.5 sm:gap-4 py-2 w-full">
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
                            ? 'bg-soft-white text-near-black border-soft-white scale-105 z-20 shadow-xl opacity-100'
                            : isAdjacent
                            ? 'bg-[#131B2E] text-soft-white border-slate-700 scale-95 z-10 opacity-80 hover:opacity-100 hover:scale-100'
                            : 'bg-[#090D16] text-slate-400 border-slate-800 scale-90 z-0 opacity-45 blur-[0.5px] hover:opacity-75'
                        }`}
                      >
                        {proj.category}
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                onClick={handleNext}
                className="absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#131B2E] border border-slate-700 shadow-xl flex items-center justify-center text-soft-white hover:bg-soft-white hover:text-near-black transition-all z-30 active:scale-95"
                aria-label="Next Campaign Right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div key={activeProject.id} className="pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left animate-fade-in transition-all duration-500">
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center justify-between">
                  <Badge variant="violet" className="text-[10px] bg-slate-800 text-soft-white border-slate-700">
                    {activeProject.badge}
                  </Badge>
                  <span className="font-mono text-xs text-slate-400 font-bold">
                    Campaign 0{activeIndex + 1} / 0{totalProjects}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-4xl font-editorial font-bold text-soft-white">
                    {activeProject.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider">
                    {activeProject.subtitle}
                  </p>
                </div>

                <p className="card-body-text text-xs sm:text-sm leading-relaxed text-slate-300">
                  {activeProject.story}
                </p>

                <div className="pt-2 space-y-2.5 border-t border-slate-800">
                  {activeProject.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2.5 text-xs font-semibold text-soft-white">
                      <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800 w-full aspect-[16/10] relative group">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#090D16] text-[10px] font-mono font-bold text-soft-white border border-slate-700">
                    {activeProject.badge}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-slate-800 w-full text-center">
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-full border border-slate-700 bg-[#131B2E] flex items-center justify-center text-soft-white hover:bg-soft-white hover:text-near-black transition-all shadow-md active:scale-95"
                  aria-label="Previous Campaign Bottom"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <span className="font-mono text-xs font-bold text-soft-white px-4 py-2 rounded-full bg-[#131B2E] border border-slate-700">
                  Campaign 0{activeIndex + 1} / 0{totalProjects}
                </span>

                <button
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full border border-slate-700 bg-[#131B2E] flex items-center justify-center text-soft-white hover:bg-soft-white hover:text-near-black transition-all shadow-md active:scale-95"
                  aria-label="Next Campaign Bottom"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. AD DISTRIBUTION MATRIX */}
      <section className="py-16 sm:py-20 bg-[#0B0F17] border-t border-slate-800">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-slate-400 tracking-widest font-semibold">
              AD DISTRIBUTION STACK
            </span>
            <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-soft-white">
              Multi-Channel Paid Ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-4 rounded-2xl bg-[#131B2E] border border-slate-800 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#090D16] text-soft-white mx-auto flex items-center justify-center">
                <Target className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-soft-white font-sans">Meta Ads</h4>
              <p className="card-body-text text-[10px] text-slate-400">FB & IG Campaigns</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#131B2E] border border-slate-800 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#090D16] text-soft-white mx-auto flex items-center justify-center">
                <BarChart3 className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-soft-white font-sans">Google Ads</h4>
              <p className="card-body-text text-[10px] text-slate-400">Search & Performance Max</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#131B2E] border border-slate-800 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#090D16] text-soft-white mx-auto flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-soft-white font-sans">TikTok Ads</h4>
              <p className="card-body-text text-[10px] text-slate-400">Mobile Video Ads</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#131B2E] border border-slate-800 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#090D16] text-soft-white mx-auto flex items-center justify-center">
                <Layers className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-soft-white font-sans">GA4 Analytics</h4>
              <p className="card-body-text text-[10px] text-slate-400">Funnel Tracking</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#131B2E] border border-slate-800 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#090D16] text-soft-white mx-auto flex items-center justify-center">
                <Video className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-soft-white font-sans">Studio Production</h4>
              <p className="card-body-text text-[10px] text-slate-400">Video Ad Collateral</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#131B2E] border border-slate-800 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#090D16] text-soft-white mx-auto flex items-center justify-center">
                <Share2 className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-soft-white font-sans">Omnichannel</h4>
              <p className="card-body-text text-[10px] text-slate-400">Campaign Scaling</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. 3-STEP PROCESS WITH DEDICATED VISUAL GRAPHICS */}
      <section className="py-16 sm:py-20 bg-[#090D16] border-t border-slate-800">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-slate-400 tracking-widest font-semibold">
              SIMPLE 3-STEP PROCESS
            </span>
            <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-soft-white">
              How We Launch & Run Ads
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0D131F] rounded-2xl p-6 border border-slate-800 space-y-4 hover:-translate-y-1 transition-all">
              <div className="h-32 w-full rounded-xl bg-[#090D16] border border-slate-800 p-3 space-y-2 relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-center justify-between text-[9px] font-mono text-soft-white font-bold">
                  <span>AD VIDEO PRODUCTION</span>
                  <Video className="w-3.5 h-3.5 text-soft-white" />
                </div>
                <div className="p-2 rounded bg-[#131B2E] border border-slate-800 text-center font-mono text-[9px] font-bold text-soft-white">
                  Scripted Direct-Response Cut
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-slate-400 font-bold">STEP 01</span>
                <h3 className="text-xl font-editorial font-bold text-soft-white">Produce Ad Videos</h3>
                <p className="card-body-text text-xs text-slate-400">
                  We craft high-converting ad video collateral and imagery focused on your key selling points.
                </p>
              </div>
            </div>

            <div className="bg-[#0D131F] rounded-2xl p-6 border border-slate-800 space-y-4 hover:-translate-y-1 transition-all">
              <div className="h-32 w-full rounded-xl bg-[#090D16] p-3 space-y-2 text-soft-white relative overflow-hidden border border-slate-800 flex flex-col justify-between">
                <div className="flex items-center justify-between text-[9px] font-mono text-soft-white">
                  <span>MULTI-PLATFORM PUBLISH</span>
                  <Send className="w-3.5 h-3.5 text-green-400" />
                </div>
                <div className="flex items-center justify-around font-mono text-[10px] text-green-400 font-bold">
                  <span>Meta LIVE</span>
                  <span>Google LIVE</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-slate-400 font-bold">STEP 02</span>
                <h3 className="text-xl font-editorial font-bold text-soft-white">Setup & Publish Campaigns</h3>
                <p className="card-body-text text-xs text-slate-400">
                  We build audience retargeting funnels and publish ad campaigns across Meta, Google, and TikTok.
                </p>
              </div>
            </div>

            <div className="bg-[#0D131F] rounded-2xl p-6 border border-slate-800 space-y-4 hover:-translate-y-1 transition-all">
              <div className="h-32 w-full rounded-xl bg-[#090D16] border border-slate-800 p-3 space-y-2 relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-center justify-between text-[9px] font-mono text-soft-white font-bold">
                  <span>DAILY BID SCALING</span>
                  <Sliders className="w-3.5 h-3.5 text-soft-white" />
                </div>
                <div className="p-2 rounded bg-[#131B2E] border border-slate-800 text-center font-mono text-[9px] font-bold text-green-400">
                  Scaling ROAS to +420%
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-slate-400 font-bold">STEP 03</span>
                <h3 className="text-xl font-editorial font-bold text-soft-white">Optimize & Scale</h3>
                <p className="card-body-text text-xs text-slate-400">
                  We monitor performance daily, test new creative hooks, and scale up winning ad campaigns.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. INQUIRY FORM */}
      <section id="ad-start-form" className="py-16 sm:py-24 bg-[#0B0F17] border-t border-slate-800">
        <Container size="large" className="max-w-4xl px-6 sm:px-10">
          <div className="bg-[#0D131F] rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-slate-400 tracking-widest font-semibold">
                LAUNCH YOUR AD CAMPAIGN
              </span>
              <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-soft-white">
                Ready to Grow Your Paid Reach?
              </h2>
              <p className="card-body-text text-xs sm:text-sm max-w-lg mx-auto text-slate-300">
                Tell us about your product or campaign goals. We reply within 24 hours with an ad strategy proposal.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <Sparkles className="w-12 h-12 text-soft-white mx-auto" />
                <h3 className="text-xl font-editorial font-bold text-soft-white">Inquiry Received</h3>
                <p className="card-body-text text-xs text-slate-400">We will review your ad goals and send a campaign proposal.</p>
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
                    className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-slate-800 text-soft-white text-xs focus:ring-2 focus:ring-slate-700"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-slate-800 text-soft-white text-xs focus:ring-2 focus:ring-slate-700"
                  />
                </div>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your product line, target audience, and ad goals *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-slate-800 text-soft-white text-xs focus:ring-2 focus:ring-slate-700 resize-none"
                />
                <Button type="submit" variant="secondary" disabled={loading} className="w-full justify-center py-3.5 rounded-full bg-soft-white text-near-black hover:bg-slate-200 shadow-md font-semibold">
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
