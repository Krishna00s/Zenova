import React, { useState, useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import {
  Megaphone,
  Target,
  BarChart3,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Share2,
  Video,
  Layers,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { scrollRevealCards } from '../../../animations/reveal';
import { submitContactInquiry } from '../../../api/contact';

export const AdCreationPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeAd, setActiveAd] = useState<'lumina' | 'zenith'>('lumina');
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

  const adShowcases = {
    lumina: {
      title: 'Lumina Growth — Multi-Platform Meta & Google Ads',
      tag: 'Meta & Google Campaign Strategy',
      description: 'End-to-end campaign execution featuring 8 custom ad video creative variants, automated audience retargeting, and real-time ROAS optimization.',
      deliverables: ['Custom Ad Video Production', 'Meta Pixel & Conversion API', 'A/B Hook Testing'],
      image: '/media/cap_ad_natural.jpg',
    },
    zenith: {
      title: 'Zenith Direct Response — TikTok & IG Reels Ads',
      tag: 'Direct Response Video Ads',
      description: 'Mobile-first short-form ad video series engineered with native UGC hooks, fast call-to-actions, and automated bid strategy scaling.',
      deliverables: ['9:16 Vertical Video Creatives', 'Native Creator Style Hooks', 'Funnel Tracking'],
      image: '/media/cap_promo_natural.jpg',
    },
  };

  const platformStack = [
    { name: 'Meta Ads Manager', icon: Target, desc: 'Facebook & Instagram Campaigns' },
    { name: 'Google Ads Engine', icon: BarChart3, desc: 'Search, YouTube & Performance Max' },
    { name: 'TikTok Ads Manager', icon: TrendingUp, desc: 'Mobile Video Conversion Ads' },
    { name: 'GA4 & Attribution', icon: Layers, desc: 'Cross-Channel Conversion Tracking' },
    { name: 'Ad Video Production', icon: Video, desc: 'In-House Studio Creative Team' },
    { name: 'Omnichannel Scaling', icon: Share2, desc: 'Unified Paid Acquisition Engine' },
  ];

  return (
    <main ref={containerRef} className="w-full bg-soft-white text-near-black pt-28 sm:pt-32 pb-20 md:pb-28">
      {/* 1. HERO CHAPTER */}
      <section className="relative w-full pb-16 sm:pb-20">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Headline */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <Badge variant="violet" className="px-3.5 py-1 text-xs">
                SERVICE VERTICAL / 03
              </Badge>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-bold text-near-black tracking-tight leading-[1.08]">
                Ad Creatives, Campaign Strategy & <br />
                <span className="italic font-normal text-deep-violet">Multi-Platform Distribution.</span>
              </h1>
              <p className="card-body-text max-w-xl text-xs sm:text-sm md:text-base leading-relaxed">
                We design high-converting ad videos and visual collateral, then publish and manage paid campaigns across Meta, Google, and TikTok to maximize return on ad spend.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a href="#ad-quote-form" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto justify-center gap-2.5 px-7 py-3.5 rounded-full shadow-md">
                    Launch Ad Campaign <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <Link to={ROUTES.WORK.ROOT} className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto justify-center gap-2 px-7 py-3.5 rounded-full border border-muted-lavender bg-warm-lavender/60">
                    Explore Solutions <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Widescreen Photo Frame */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-muted-lavender/60 w-full aspect-[4/3] group relative">
                <img
                  src="/media/cap_ad_natural.jpg"
                  alt="Ad Creatives & Campaign Distribution Workspace"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. CORE CAPABILITIES MATRIX */}
      <section className="py-16 sm:py-20 bg-warm-lavender/30 border-y border-muted-lavender/40">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
              PAID ACQUISITION SPECS
            </span>
            <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
              End-to-End Ad Execution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="ad-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Ad Video Collateral</h3>
              <p className="card-body-text text-xs">
                In-house production of high-converting video ads, static banners, and motion graphics.
              </p>
            </div>

            <div className="ad-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Meta (FB & IG) Ads</h3>
              <p className="card-body-text text-xs">
                Precise custom audience building, lookalikes, retargeting, and CBO/ABO campaign structure.
              </p>
            </div>

            <div className="ad-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <Megaphone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Google & TikTok Ads</h3>
              <p className="card-body-text text-xs">
                Multi-channel acquisition spanning Google Search, Performance Max, YouTube, & TikTok Ads.
              </p>
            </div>

            <div className="ad-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Funnel Optimization</h3>
              <p className="card-body-text text-xs">
                A/B creative testing, hook variation analysis, and conversion funnel optimization.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. FEATURED CAMPAIGNS WITH INTERACTIVE TABS */}
      <section className="py-16 sm:py-24">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
              FEATURED AD CAMPAIGNS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-near-black">
              Campaign Execution & Distribution
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 pb-8 border-b border-muted-lavender/40">
            <button
              onClick={() => setActiveAd('lumina')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeAd === 'lumina'
                  ? 'bg-deep-violet text-soft-white shadow-md'
                  : 'bg-warm-lavender/60 text-near-black hover:bg-warm-lavender'
              }`}
            >
              Lumina Growth (Meta & Google)
            </button>
            <button
              onClick={() => setActiveAd('zenith')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeAd === 'zenith'
                  ? 'bg-deep-violet text-soft-white shadow-md'
                  : 'bg-warm-lavender/60 text-near-black hover:bg-warm-lavender'
              }`}
            >
              Zenith Direct Response (TikTok & IG)
            </button>
          </div>

          <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <Badge variant="violet" className="text-[10px]">
                {adShowcases[activeAd].tag}
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-near-black">
                {adShowcases[activeAd].title}
              </h3>
              <p className="card-body-text text-xs sm:text-sm">
                {adShowcases[activeAd].description}
              </p>

              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-muted-lavender/40">
                {adShowcases[activeAd].deliverables.map((d) => (
                  <div key={d} className="flex items-center gap-1.5 text-[11px] font-semibold text-near-black">
                    <CheckCircle2 className="w-3.5 h-3.5 text-deep-violet shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-muted-lavender/60 w-full aspect-[16/10] relative group">
                <img
                  src={adShowcases[activeAd].image}
                  alt={adShowcases[activeAd].title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. PLATFORM STACK MATRIX */}
      <section className="py-16 sm:py-20 bg-soft-white border-t border-muted-lavender/40">
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
            {platformStack.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="p-4 rounded-2xl bg-warm-lavender/30 border border-muted-lavender/60 text-center space-y-2 hover:-translate-y-1 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-deep-violet text-soft-white mx-auto flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-near-black font-sans">{item.name}</h4>
                  <p className="card-body-text text-[10px]">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 5. PROJECT SCOPING FORM */}
      <section id="ad-quote-form" className="py-16 sm:py-24 bg-warm-lavender/40 border-t border-muted-lavender/50">
        <Container size="large" className="max-w-4xl px-6 sm:px-10">
          <div className="bg-soft-white rounded-3xl p-6 sm:p-10 border border-muted-lavender/80 shadow-xl space-y-6">
            <div className="text-center space-y-2">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
                KICKSTART AD CAMPAIGN
              </span>
              <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
                Tell Us About Your Ad Goals
              </h2>
              <p className="card-body-text text-xs sm:text-sm max-w-lg mx-auto">
                Fill out this form and our paid media director will respond within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-deep-violet mx-auto" />
                <h3 className="text-xl font-editorial font-bold">Request Received</h3>
                <p className="card-body-text text-xs">We will audit your paid media goals and send a campaign strategy proposal.</p>
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
                  placeholder="Describe your target audience and ad campaign objectives *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-warm-lavender/30 border border-muted-lavender text-xs focus:ring-2 focus:ring-deep-violet/30 resize-none"
                />
                <Button type="submit" variant="primary" disabled={loading} className="w-full justify-center py-3.5 rounded-full">
                  {loading ? 'Submitting Strategy Request...' : 'Submit Ad Campaign Strategy Inquiry'}
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
