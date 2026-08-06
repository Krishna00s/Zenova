import React, { useState, useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { Link as RouterLink } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import {
  Share2,
  Users,
  Search,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Instagram,
  Heart,
  MessageCircle,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  Award,
  Package,
  Check,
  Send,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { scrollRevealCards } from '../../../animations/reveal';
import { submitContactInquiry } from '../../../api/contact';

export const PaidPromotionsPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    serviceInterest: 'paid-promotions',
    message: '',
  });

  useGSAP(() => {
    const revealEls = containerRef.current?.querySelectorAll('.promo-reveal');
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

  const promoProjects = [
    {
      id: 1,
      category: 'Fashion Apparel Network',
      title: 'Fashion Apparel x Creator Network',
      subtitle: 'Instagram & TikTok Creator Collaborations',
      story: 'Coordinated 15 fashion creators for authentic product unboxing reels, styling stories, and creator whitelisting rights for paid Meta ads.',
      highlights: ['Authentic Creator Reviews', 'Whitelisting Rights For Ads', 'Trackable Creator Links'],
      image: '/media/cap_paid_promotions.jpg',
      badge: 'FASHION COLLAB',
    },
    {
      id: 2,
      category: 'Skincare & Beauty Influencers',
      title: 'Skincare Brand x Beauty Influencers',
      subtitle: 'YouTube & IG Story Product Integrations',
      story: 'Handpicked 10 beauty creators for long-form skincare tutorial integrations and Instagram Story promo discount codes coordinated by our creator leads.',
      highlights: ['Dedicated Tutorial Videos', 'Trackable Promo Discount Codes', 'Complete Asset Usage Rights'],
      image: '/media/photo_user_real_conversations.jpg',
      badge: 'BEAUTY COLLAB',
    },
    {
      id: 3,
      category: 'Tech Unboxing Series',
      title: 'PULSE Tech x Creator Unboxing Series',
      subtitle: 'Tech Creator Review & Whitelisting Boost',
      story: 'Paired a hardware tech brand with top 8 tech review creators for in-depth unboxing videos and whitelisted Instagram Reel boosting.',
      highlights: ['8 Vetted Tech Reviewers', 'Whitelisted Instagram Reel Ad Boost', 'High Engagement Retention'],
      image: '/media/hero_natural_agency.jpg',
      badge: 'TECH COLLAB',
    },
    {
      id: 4,
      category: 'Wellness & Lifestyle Network',
      title: 'Aura Wellness x Micro-Creator Series',
      subtitle: 'Lifestyle Micro-Influencer Campaign',
      story: 'Activated 20 niche wellness creators for daily lifestyle routine integrations, stories, and trackable affiliate discount codes managed by our team.',
      highlights: ['20 Active Micro-Creators', 'Daily Routine Integrations', 'Affiliate Discount Tracking'],
      image: '/media/photo_evolve_plant.jpg',
      badge: 'WELLNESS COLLAB',
    },
  ];

  const totalProjects = promoProjects.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalProjects);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  const activeProject = promoProjects[activeIndex];

  return (
    <main ref={containerRef} className="w-full bg-[#090D16] text-soft-white pt-28 sm:pt-32 pb-20 md:pb-28 overflow-hidden">
      {/* 1. HERO STORY CHAPTER WITH LAYERED CREATOR PARTNERSHIP MOCKUP */}
      <section className="relative w-full pb-16 sm:pb-24">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-slate-800/20 rounded-full blur-3xl pointer-events-none -z-10" />

        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <Badge variant="violet" className="px-3.5 py-1 text-xs shadow-xs bg-slate-800 text-soft-white border-slate-700">
                PAID PROMOTIONS & CREATOR NETWORKS
              </Badge>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-bold text-soft-white tracking-tight leading-[1.08]">
                People trust people, <br />
                <span className="italic font-normal text-slate-400">not corporate logos.</span>
              </h1>

              <p className="card-body-text max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-slate-300">
                Influencer marketing works best when it feels genuine. We handpick creators who align with your brand, coordinate authentic product promotions, and amplify top-performing creator posts to drive real impact.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a href="#promo-start-form" className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto justify-center gap-2.5 px-7 py-3.5 rounded-full bg-soft-white text-near-black hover:bg-slate-200 shadow-xl hover:-translate-y-0.5 transition-all font-semibold">
                    Start Creator Campaign <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <RouterLink to={ROUTES.WORK.ROOT} className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto justify-center gap-2 px-7 py-3.5 rounded-full border border-slate-800 bg-[#0D131F] text-soft-white hover:bg-slate-800 hover:-translate-y-0.5 transition-all">
                    Explore Collaborations <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </RouterLink>
              </div>
            </div>

            {/* 3D MULTI-LAYERED CREATOR COLLABORATION SHOWCASE MOCKUP */}
            <div className="lg:col-span-6 w-full relative">
              <div className="bg-[#0D131F] backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-2xl border border-slate-800 space-y-3 relative">
                <div className="flex items-center justify-between px-2 pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-soft-white/80 font-mono text-[10px]">
                    <Users className="w-3.5 h-3.5 text-soft-white" />
                    <span>CREATOR PARTNERSHIP</span>
                  </div>
                  <Instagram className="w-4 h-4 text-soft-white" />
                </div>

                <div className="rounded-xl overflow-hidden aspect-[16/10] relative group border border-slate-800">
                  <img
                    src="/media/cap_paid_promotions.jpg"
                    alt="Creator & Influencer Team Filming Campaign"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-soft-white/90 backdrop-blur-md text-near-black font-mono text-[10px] font-bold shadow-md">
                    Paid Partnership
                  </div>
                </div>

                <div className="flex items-center justify-between text-soft-white/70 px-2 text-xs">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> 14.2k</span>
                    <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5 text-slate-300" /> 380</span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 font-bold">Authentic Reach</span>
                </div>

                <div className="absolute -top-4 -right-2 sm:-right-4 bg-soft-white text-near-black px-4 py-2.5 rounded-2xl shadow-xl border border-slate-300 flex items-center gap-2 z-20 animate-pulse-slow">
                  <div className="w-7 h-7 rounded-xl bg-slate-200 flex items-center justify-center font-bold font-mono text-xs text-near-black">
                    <Award className="w-4 h-4 text-amber-600" />
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] font-mono text-neutral-slate block uppercase">Vetted Creator</span>
                    <span className="text-xs font-bold font-editorial text-near-black">100k+ Active</span>
                  </div>
                </div>

                <div className="absolute -left-3 sm:-left-6 bottom-4 bg-[#131B2E] p-3 rounded-2xl shadow-2xl border border-slate-700 z-20 space-y-1 text-left max-w-[150px] sm:max-w-[180px]">
                  <span className="text-[9px] font-mono font-bold text-soft-white uppercase tracking-wider block">Exclusive Code</span>
                  <p className="text-xs font-bold text-soft-white font-mono bg-[#090D16] px-2 py-1 rounded text-center border border-slate-700">SAVE20_AURA</p>
                  <span className="text-[8px] font-mono text-slate-400 block text-center">Tracked Sales Conversion</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. OUR CREATOR PHILOSOPHY CARDS WITH DEDICATED VISUAL GRAPHICS */}
      <section className="py-16 sm:py-24 bg-[#0B0F17] border-y border-slate-800">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-slate-400 tracking-widest font-semibold">
                CREATOR NETWORK SPECS
              </span>
              <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-soft-white leading-tight">
                Right Creators. <br />
                <span className="italic font-normal text-slate-400">Real Impact.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <p className="card-body-text text-xs sm:text-sm md:text-base leading-relaxed text-slate-300">
                We handle the entire influencer partnership process so you don't have to spend hours messaging creators. From researching authentic channels to contracting, content approval, and tracking promo codes, we make creator marketing simple and measurable.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
            <div className="promo-reveal bg-[#131B2E] rounded-2xl p-6 border border-slate-800 shadow-xs hover:shadow-2xl hover:border-slate-700 hover:-translate-y-1 transition-all space-y-4">
              <div className="h-24 w-full rounded-xl bg-[#090D16] p-3 flex flex-col justify-between border border-slate-800 text-soft-white">
                <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 font-bold">
                  <span>AUDIENCE AUDIT SCORE</span>
                  <Search className="w-3.5 h-3.5 text-soft-white" />
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="violet" className="text-[9px] bg-slate-800 text-soft-white border-slate-700">98.4% Real</Badge>
                  <span className="text-[10px] font-mono text-green-400 font-bold">Active Engagement</span>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-editorial font-bold text-soft-white">Vetted Creators</h3>
                <p className="card-body-text text-xs text-slate-400">
                  We audit audience demographics to ensure creators have genuine active followers.
                </p>
              </div>
            </div>

            <div className="promo-reveal bg-[#131B2E] rounded-2xl p-6 border border-slate-800 shadow-xs hover:shadow-2xl hover:border-slate-700 hover:-translate-y-1 transition-all space-y-4">
              <div className="h-24 w-full rounded-xl bg-[#090D16] p-3 flex flex-col justify-between border border-slate-800">
                <div className="flex items-center justify-between text-[9px] font-mono text-soft-white font-bold">
                  <span>SHIPMENT & BRIEFING</span>
                  <Package className="w-3.5 h-3.5 text-soft-white" />
                </div>
                <div className="text-[10px] font-mono font-bold text-soft-white bg-[#131B2E] p-1 rounded border border-slate-700 text-center">
                  Product Sample Dispatched
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-editorial font-bold text-soft-white">End-to-End Management</h3>
                <p className="card-body-text text-xs text-slate-400">
                  Handling outreach, contracts, product shipping, and briefing guidelines.
                </p>
              </div>
            </div>

            <div className="promo-reveal bg-[#131B2E] rounded-2xl p-6 border border-slate-800 shadow-xs hover:shadow-2xl hover:border-slate-700 hover:-translate-y-1 transition-all space-y-4">
              <div className="h-24 w-full rounded-xl bg-[#090D16] p-3 flex flex-col justify-between border border-slate-800 text-soft-white">
                <div className="flex items-center justify-between text-[9px] font-mono text-green-400 font-bold">
                  <span>CONTENT QUALITY CHECK</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-300">
                  <Check className="w-3.5 h-3.5 text-green-400" />
                  <span>Draft Reel Approved</span>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-editorial font-bold text-soft-white">Content Quality Review</h3>
                <p className="card-body-text text-xs text-slate-400">
                  Reviewing every draft video before it goes live to maintain your brand standards.
                </p>
              </div>
            </div>

            <div className="promo-reveal bg-[#131B2E] rounded-2xl p-6 border border-slate-800 shadow-xs hover:shadow-2xl hover:border-slate-700 hover:-translate-y-1 transition-all space-y-4">
              <div className="h-24 w-full rounded-xl bg-[#090D16] border border-slate-800 p-3 flex flex-col justify-between shadow-xs">
                <div className="flex items-center justify-between text-[9px] font-mono text-soft-white font-bold">
                  <span>CREATOR HANDLE BOOST</span>
                  <Share2 className="w-3.5 h-3.5 text-soft-white" />
                </div>
                <div className="p-1 rounded bg-[#131B2E] border border-slate-700 text-[9px] font-mono text-center font-bold text-soft-white">
                  Whitelisted Paid Ad
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-editorial font-bold text-soft-white">Ad Whitelisting</h3>
                <p className="card-body-text text-xs text-slate-400">
                  Running targeted Meta ads directly through creator handles for higher conversion rates.
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
                Featured Creator Partnerships
              </h2>
            </div>

            <div className="relative w-full max-w-5xl mx-auto py-2">
              <button
                onClick={handlePrev}
                className="absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#131B2E] border border-slate-700 shadow-xl flex items-center justify-center text-soft-white hover:bg-soft-white hover:text-near-black transition-all z-30 active:scale-95"
                aria-label="Previous Creator Collaboration Left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="w-full overflow-hidden px-8 sm:px-12 [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]">
                <div className="flex items-center justify-center gap-2.5 sm:gap-4 py-2 w-full">
                  {[-2, -1, 0, 1, 2].map((offset) => {
                    const projectIdx = (activeIndex + offset + totalProjects * 100) % totalProjects;
                    const proj = promoProjects[projectIdx];

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
                aria-label="Next Creator Collaboration Right"
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
                    Collab 0{activeIndex + 1} / 0{totalProjects}
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
                  aria-label="Previous Creator Collaboration Bottom"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <span className="font-mono text-xs font-bold text-soft-white px-4 py-2 rounded-full bg-[#131B2E] border border-slate-700">
                  Collab 0{activeIndex + 1} / 0{totalProjects}
                </span>

                <button
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full border border-slate-700 bg-[#131B2E] flex items-center justify-center text-soft-white hover:bg-soft-white hover:text-near-black transition-all shadow-md active:scale-95"
                  aria-label="Next Creator Collaboration Bottom"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. CREATOR FRAMEWORK MATRIX */}
      <section className="py-16 sm:py-20 bg-[#0B0F17] border-t border-slate-800">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-slate-400 tracking-widest font-semibold">
              EXECUTION FRAMEWORK
            </span>
            <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-soft-white">
              How We Manage Creator Outreach
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-4 rounded-2xl bg-[#131B2E] border border-slate-800 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#090D16] text-soft-white mx-auto flex items-center justify-center">
                <Search className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-soft-white font-sans">Discovery</h4>
              <p className="card-body-text text-[10px] text-slate-400">Demographic Research</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#131B2E] border border-slate-800 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#090D16] text-soft-white mx-auto flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-soft-white font-sans">Audits</h4>
              <p className="card-body-text text-[10px] text-slate-400">Audience Check</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#131B2E] border border-slate-800 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#090D16] text-soft-white mx-auto flex items-center justify-center">
                <CheckSquare className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-soft-white font-sans">Contracts</h4>
              <p className="card-body-text text-[10px] text-slate-400">Legal & Licensing</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#131B2E] border border-slate-800 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#090D16] text-soft-white mx-auto flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-soft-white font-sans">Production</h4>
              <p className="card-body-text text-[10px] text-slate-400">Draft Approval</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#131B2E] border border-slate-800 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#090D16] text-soft-white mx-auto flex items-center justify-center">
                <Share2 className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-soft-white font-sans">Whitelisting</h4>
              <p className="card-body-text text-[10px] text-slate-400">Paid Post Boost</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#131B2E] border border-slate-800 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#090D16] text-soft-white mx-auto flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-soft-white font-sans">Analytics</h4>
              <p className="card-body-text text-[10px] text-slate-400">Clicks & ROI</p>
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
              How Creator Campaigns Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0D131F] rounded-2xl p-6 border border-slate-800 space-y-4 hover:-translate-y-1 transition-all">
              <div className="h-32 w-full rounded-xl bg-[#090D16] border border-slate-800 p-3 space-y-2 relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-center justify-between text-[9px] font-mono text-soft-white font-bold">
                  <span>VETTED CREATOR ROSTER</span>
                  <Users className="w-3.5 h-3.5 text-soft-white" />
                </div>
                <div className="p-2 rounded bg-[#131B2E] border border-slate-800 text-center font-mono text-[9px] font-bold text-soft-white">
                  15 Handpicked Influencers
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-slate-400 font-bold">STEP 01</span>
                <h3 className="text-xl font-editorial font-bold text-soft-white">Handpick Creators</h3>
                <p className="card-body-text text-xs text-slate-400">
                  We present a vetted list of creators matching your brand aesthetic and target demographics.
                </p>
              </div>
            </div>

            <div className="bg-[#0D131F] rounded-2xl p-6 border border-slate-800 space-y-4 hover:-translate-y-1 transition-all">
              <div className="h-32 w-full rounded-xl bg-[#090D16] p-3 space-y-2 text-soft-white relative overflow-hidden border border-slate-800 flex flex-col justify-between">
                <div className="flex items-center justify-between text-[9px] font-mono text-soft-white">
                  <span>CONTRACTS & DRAFT REVIEW</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
                </div>
                <div className="p-1 rounded bg-[#131B2E] text-center font-mono text-[9px] font-bold text-soft-white border border-slate-800">
                  Samples Shipped & Approved
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-slate-400 font-bold">STEP 02</span>
                <h3 className="text-xl font-editorial font-bold text-soft-white">Coordinate & Review</h3>
                <p className="card-body-text text-xs text-slate-400">
                  We handle contracts, ship product samples, brief creators, and review all content drafts.
                </p>
              </div>
            </div>

            <div className="bg-[#0D131F] rounded-2xl p-6 border border-slate-800 space-y-4 hover:-translate-y-1 transition-all">
              <div className="h-32 w-full rounded-xl bg-[#090D16] border border-slate-800 p-3 space-y-2 relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-center justify-between text-[9px] font-mono text-soft-white font-bold">
                  <span>PUBLISH & WHITELIST</span>
                  <Send className="w-3.5 h-3.5 text-soft-white" />
                </div>
                <div className="p-2 rounded bg-[#131B2E] border border-slate-800 text-center font-mono text-[9px] font-bold text-green-400">
                  Live Reel + Paid Ad Boost
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-slate-400 font-bold">STEP 03</span>
                <h3 className="text-xl font-editorial font-bold text-soft-white">Publish & Amplify</h3>
                <p className="card-body-text text-xs text-slate-400">
                  Creators post live, we track engagement and promo codes, and whitelist high-performing posts for ads.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. INQUIRY FORM */}
      <section id="promo-start-form" className="py-16 sm:py-24 bg-[#0B0F17] border-t border-slate-800">
        <Container size="large" className="max-w-4xl px-6 sm:px-10">
          <div className="bg-[#0D131F] rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-slate-400 tracking-widest font-semibold">
                KICKSTART CREATOR PROMOTIONS
              </span>
              <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-soft-white">
                Ready to Partner With Creators?
              </h2>
              <p className="card-body-text text-xs sm:text-sm max-w-lg mx-auto text-slate-300">
                Tell us about your product line and target creator audience. We reply within 24 hours with a creator strategy proposal.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <Sparkles className="w-12 h-12 text-soft-white mx-auto" />
                <h3 className="text-xl font-editorial font-bold text-soft-white">Inquiry Received</h3>
                <p className="card-body-text text-xs text-slate-400">We will compile a curated list of relevant creators for your brand.</p>
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
                  placeholder="Describe your brand, product line, and target creator audience *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-slate-800 text-soft-white text-xs focus:ring-2 focus:ring-slate-700 resize-none"
                />
                <Button type="submit" variant="secondary" disabled={loading} className="w-full justify-center py-3.5 rounded-full bg-soft-white text-near-black hover:bg-slate-200 shadow-md font-semibold">
                  {loading ? 'Sending Inquiry...' : 'Send Creator Promotion Message'}
                </Button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default PaidPromotionsPage;
