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
  Sparkles,
  Facebook,
  Instagram,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { scrollRevealCards } from '../../../animations/reveal';
import { submitContactInquiry } from '../../../api/contact';

export const AdCreationPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCampaign, setActiveCampaign] = useState<'meta' | 'tiktok'>('meta');
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

  const campaignShowcases = {
    meta: {
      title: 'Lumina Growth — Meta (FB & IG) Campaign',
      subtitle: 'Multi-Variant Video Ads & Retargeting',
      story: 'Designed high-converting video ad variants targeting specific buyer personas on Facebook and Instagram, backed by custom audience retargeting funnels.',
      highlights: ['8 Ad Creative Variants', 'Targeted Audience Funnels', 'Continuous A/B Hook Testing'],
      image: '/media/cap_ad_natural.jpg',
    },
    tiktok: {
      title: 'Zenith Direct Response — TikTok & Shorts Ads',
      subtitle: 'Native Mobile Video Creatives',
      story: 'Created mobile-native 9:16 ad video content engineered with UGC-style hooks, fast call-to-actions, and daily campaign bid optimization.',
      highlights: ['UGC-Style Video Hooks', '9:16 Mobile Native Format', 'Daily Bid Strategy Tuning'],
      image: '/media/cap_promo_natural.jpg',
    },
  };

  return (
    <main ref={containerRef} className="w-full bg-soft-white text-near-black pt-28 sm:pt-32 pb-20 md:pb-28">
      {/* 1. HERO STORY CHAPTER */}
      <section className="relative w-full pb-16 sm:pb-24">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <Badge variant="violet" className="px-3.5 py-1 text-xs">
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
                  <Button variant="primary" size="lg" className="w-full sm:w-auto justify-center gap-2.5 px-7 py-3.5 rounded-full shadow-md">
                    Launch Your Ad Campaign <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <Link to={ROUTES.WORK.ROOT} className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto justify-center gap-2 px-7 py-3.5 rounded-full border border-muted-lavender bg-warm-lavender/60">
                    See Ad Creatives <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Ad Feed Mockup Frame */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-near-black rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-2xl border border-muted-lavender/40 space-y-3">
                <div className="flex items-center justify-between px-2 pt-1 pb-2 border-b border-soft-white/10">
                  <div className="flex items-center gap-2 text-soft-white/80 font-mono text-[10px]">
                    <Megaphone className="w-3.5 h-3.5 text-deep-violet" />
                    <span>SPONSORED AD CAMPAIGN</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-deep-violet">
                    <Facebook className="w-3.5 h-3.5 fill-deep-violet stroke-none" />
                    <Instagram className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden aspect-[4/3] relative group">
                  <img
                    src="/media/cap_ad_natural.jpg"
                    alt="Ad Campaign Performance Analytics"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-near-black/70 via-transparent to-transparent flex items-end p-4">
                    <div className="space-y-1">
                      <span className="px-2 py-0.5 rounded bg-deep-violet text-[10px] text-soft-white font-mono font-bold">Sponsored Ad Creative</span>
                      <p className="text-soft-white font-sans text-xs font-semibold">High-Converting Direct Response Video</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. OUR AD PHILOSOPHY */}
      <section className="py-16 sm:py-20 bg-warm-lavender/30 border-y border-muted-lavender/40">
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
            <div className="ad-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Targeted Audience</h3>
              <p className="card-body-text text-xs">
                Reaching people who are genuinely interested in your product or service.
              </p>
            </div>

            <div className="ad-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <Megaphone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">High-Impact Videos</h3>
              <p className="card-body-text text-xs">
                In-house video ad production with strong hooks and clear calls to action.
              </p>
            </div>

            <div className="ad-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <Share2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Multi-Platform</h3>
              <p className="card-body-text text-xs">
                Publishing and managing ads across Meta (FB & IG), Google, and TikTok.
              </p>
            </div>

            <div className="ad-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
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

      {/* 3. VISUAL SHOWCASE */}
      <section className="py-16 sm:py-24">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
              THE WORK SPEAKS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-near-black">
              Featured Ad Campaigns
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 pb-8 border-b border-muted-lavender/40">
            <button
              onClick={() => setActiveCampaign('meta')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeCampaign === 'meta'
                  ? 'bg-deep-violet text-soft-white shadow-md'
                  : 'bg-warm-lavender/60 text-near-black hover:bg-warm-lavender'
              }`}
            >
              Meta (FB & IG) Campaign Strategy
            </button>
            <button
              onClick={() => setActiveCampaign('tiktok')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeCampaign === 'tiktok'
                  ? 'bg-deep-violet text-soft-white shadow-md'
                  : 'bg-warm-lavender/60 text-near-black hover:bg-warm-lavender'
              }`}
            >
              TikTok & Shorts Direct Response Ads
            </button>
          </div>

          <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <Badge variant="violet" className="text-[10px]">
                {campaignShowcases[activeCampaign].subtitle}
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-near-black">
                {campaignShowcases[activeCampaign].title}
              </h3>
              <p className="card-body-text text-xs sm:text-sm leading-relaxed">
                {campaignShowcases[activeCampaign].story}
              </p>

              <div className="pt-4 space-y-2 border-t border-muted-lavender/40">
                {campaignShowcases[activeCampaign].highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-xs font-semibold text-near-black">
                    <CheckCircle2 className="w-4 h-4 text-deep-violet shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-muted-lavender/60 w-full aspect-[16/10] relative group">
                <img
                  src={campaignShowcases[activeCampaign].image}
                  alt={campaignShowcases[activeCampaign].title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. SIMPLE 3-STEP PROCESS */}
      <section className="py-16 sm:py-20 bg-warm-lavender/30 border-t border-muted-lavender/40">
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
            <div className="bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 space-y-3">
              <span className="text-xs font-mono text-deep-violet font-bold">STEP 01</span>
              <h3 className="text-xl font-editorial font-bold">Produce Ad Videos</h3>
              <p className="card-body-text text-xs">
                We craft high-converting ad video collateral and imagery focused on your key selling points.
              </p>
            </div>

            <div className="bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 space-y-3">
              <span className="text-xs font-mono text-deep-violet font-bold">STEP 02</span>
              <h3 className="text-xl font-editorial font-bold">Setup & Publish Campaigns</h3>
              <p className="card-body-text text-xs">
                We build audience retargeting funnels and publish ad campaigns across Meta, Google, and TikTok.
              </p>
            </div>

            <div className="bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 space-y-3">
              <span className="text-xs font-mono text-deep-violet font-bold">STEP 03</span>
              <h3 className="text-xl font-editorial font-bold">Optimize & Scale</h3>
              <p className="card-body-text text-xs">
                We monitor performance daily, test new creative hooks, and scale up winning ad campaigns.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. INQUIRY FORM */}
      <section id="ad-start-form" className="py-16 sm:py-24 bg-soft-white border-t border-muted-lavender/50">
        <Container size="large" className="max-w-4xl px-6 sm:px-10">
          <div className="bg-warm-lavender/40 rounded-3xl p-6 sm:p-10 border border-muted-lavender/80 shadow-xl space-y-6">
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
                    className="w-full px-4 py-3 rounded-xl bg-soft-white border border-muted-lavender text-xs focus:ring-2 focus:ring-deep-violet/30"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-soft-white border border-muted-lavender text-xs focus:ring-2 focus:ring-deep-violet/30"
                  />
                </div>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your product line, target audience, and ad goals *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-soft-white border border-muted-lavender text-xs focus:ring-2 focus:ring-deep-violet/30 resize-none"
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
