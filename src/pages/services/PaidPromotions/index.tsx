import React, { useState, useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import {
  Share2,
  Users,
  Search,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Instagram,
  Heart,
  MessageCircle,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { scrollRevealCards } from '../../../animations/reveal';
import { submitContactInquiry } from '../../../api/contact';

export const PaidPromotionsPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCollab, setActiveCollab] = useState<'fashion' | 'beauty'>('fashion');
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

  const collabShowcases = {
    fashion: {
      title: 'Fashion Apparel x Creator Network',
      subtitle: 'Instagram & TikTok Creator Collaborations',
      story: 'Coordinated 15 fashion creators for authentic product unboxing reels, styling stories, and creator whitelisting rights for paid Meta ads.',
      highlights: ['Authentic Creator Reviews', 'Whitelisting Rights For Ads', 'Trackable Creator Links'],
      image: '/media/cap_promo_natural.jpg',
    },
    beauty: {
      title: 'Skincare Brand x Beauty Influencers',
      subtitle: 'YouTube & IG Story Product Integrations',
      story: 'Handpicked 10 beauty creators for long-form skincare tutorial integrations and Instagram Story promo discount codes.',
      highlights: ['Dedicated Tutorial Videos', 'Trackable Promo Discount Codes', 'Complete Asset Usage Rights'],
      image: '/media/contact_studio_natural.jpg',
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
                PAID PROMOTIONS & CREATOR NETWORKS
              </Badge>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-bold text-near-black tracking-tight leading-[1.08]">
                People trust people, <br />
                <span className="italic font-normal text-deep-violet">not corporate logos.</span>
              </h1>

              <p className="card-body-text max-w-xl text-xs sm:text-sm md:text-base leading-relaxed">
                Influencer marketing works best when it feels genuine. We handpick creators who align with your brand, coordinate authentic product promotions, and amplify top-performing creator posts to drive real impact.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a href="#promo-start-form" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto justify-center gap-2.5 px-7 py-3.5 rounded-full shadow-md">
                    Start Creator Campaign <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <Link to={ROUTES.WORK.ROOT} className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto justify-center gap-2 px-7 py-3.5 rounded-full border border-muted-lavender bg-warm-lavender/60">
                    Explore Collaborations <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Creator Social Feed Frame */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-near-black rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-2xl border border-muted-lavender/40 space-y-3">
                <div className="flex items-center justify-between px-2 pt-1 pb-2 border-b border-soft-white/10">
                  <div className="flex items-center gap-2 text-soft-white/80 font-mono text-[10px]">
                    <Users className="w-3.5 h-3.5 text-deep-violet" />
                    <span>CREATOR PARTNERSHIP</span>
                  </div>
                  <Instagram className="w-4 h-4 text-deep-violet" />
                </div>

                <div className="rounded-xl overflow-hidden aspect-[4/3] relative group">
                  <img
                    src="/media/cap_promo_natural.jpg"
                    alt="Creator Promotion Broadcast Studio"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-soft-white/90 backdrop-blur-md text-near-black font-mono text-[10px] font-bold shadow-md">
                    Paid Partnership
                  </div>
                </div>

                <div className="flex items-center justify-between text-soft-white/70 px-2 text-xs">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> 14.2k</span>
                    <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5 text-soft-white/70" /> 380</span>
                  </div>
                  <span className="font-mono text-[10px] text-muted-lavender">Authentic Reach</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. OUR CREATOR PHILOSOPHY */}
      <section className="py-16 sm:py-20 bg-warm-lavender/30 border-y border-muted-lavender/40">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
                CREATOR NETWORK SPECS
              </span>
              <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black leading-tight">
                Right Creators. <br />
                <span className="italic font-normal text-deep-violet">Real Impact.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <p className="card-body-text text-xs sm:text-sm md:text-base leading-relaxed">
                We handle the entire influencer partnership process so you don't have to spend hours messaging creators. From researching authentic channels to contracting, content approval, and tracking promo codes, we make creator marketing simple and measurable.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
            <div className="promo-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Vetted Creators</h3>
              <p className="card-body-text text-xs">
                We audit audience demographics to ensure creators have genuine active followers.
              </p>
            </div>

            <div className="promo-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">End-to-End Management</h3>
              <p className="card-body-text text-xs">
                Handling outreach, contracts, product shipping, and briefing guidelines.
              </p>
            </div>

            <div className="promo-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Content Quality Review</h3>
              <p className="card-body-text text-xs">
                Reviewing every draft video before it goes live to maintain your brand standards.
              </p>
            </div>

            <div className="promo-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <Share2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Ad Whitelisting</h3>
              <p className="card-body-text text-xs">
                Running targeted Meta ads directly through creator handles for higher conversion rates.
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
              Featured Creator Partnerships
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 pb-8 border-b border-muted-lavender/40">
            <button
              onClick={() => setActiveCollab('fashion')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeCollab === 'fashion'
                  ? 'bg-deep-violet text-soft-white shadow-md'
                  : 'bg-warm-lavender/60 text-near-black hover:bg-warm-lavender'
              }`}
            >
              Fashion Apparel Network
            </button>
            <button
              onClick={() => setActiveCollab('beauty')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeCollab === 'beauty'
                  ? 'bg-deep-violet text-soft-white shadow-md'
                  : 'bg-warm-lavender/60 text-near-black hover:bg-warm-lavender'
              }`}
            >
              Skincare & Beauty Influencers
            </button>
          </div>

          <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <Badge variant="violet" className="text-[10px]">
                {collabShowcases[activeCollab].subtitle}
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-near-black">
                {collabShowcases[activeCollab].title}
              </h3>
              <p className="card-body-text text-xs sm:text-sm leading-relaxed">
                {collabShowcases[activeCollab].story}
              </p>

              <div className="pt-4 space-y-2 border-t border-muted-lavender/40">
                {collabShowcases[activeCollab].highlights.map((h) => (
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
                  src={collabShowcases[activeCollab].image}
                  alt={collabShowcases[activeCollab].title}
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
              How Creator Campaigns Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 space-y-3">
              <span className="text-xs font-mono text-deep-violet font-bold">STEP 01</span>
              <h3 className="text-xl font-editorial font-bold">Handpick Creators</h3>
              <p className="card-body-text text-xs">
                We present a vetted list of creators matching your brand aesthetic and target demographics.
              </p>
            </div>

            <div className="bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 space-y-3">
              <span className="text-xs font-mono text-deep-violet font-bold">STEP 02</span>
              <h3 className="text-xl font-editorial font-bold">Coordinate & Review</h3>
              <p className="card-body-text text-xs">
                We handle contracts, ship product samples, brief creators, and review all content drafts.
              </p>
            </div>

            <div className="bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 space-y-3">
              <span className="text-xs font-mono text-deep-violet font-bold">STEP 03</span>
              <h3 className="text-xl font-editorial font-bold">Publish & Amplify</h3>
              <p className="card-body-text text-xs">
                Creators post live, we track engagement and promo codes, and whitelist high-performing posts for ads.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. INQUIRY FORM */}
      <section id="promo-start-form" className="py-16 sm:py-24 bg-soft-white border-t border-muted-lavender/50">
        <Container size="large" className="max-w-4xl px-6 sm:px-10">
          <div className="bg-warm-lavender/40 rounded-3xl p-6 sm:p-10 border border-muted-lavender/80 shadow-xl space-y-6">
            <div className="text-center space-y-2">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
                KICKSTART CREATOR PROMOTIONS
              </span>
              <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
                Ready to Partner With Creators?
              </h2>
              <p className="card-body-text text-xs sm:text-sm max-w-lg mx-auto">
                Tell us about your product line and target creator audience. We reply within 24 hours with a creator strategy proposal.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <Sparkles className="w-12 h-12 text-deep-violet mx-auto" />
                <h3 className="text-xl font-editorial font-bold">Inquiry Received</h3>
                <p className="card-body-text text-xs">We will compile a curated list of relevant creators for your brand.</p>
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
                  placeholder="Describe your brand, product line, and target creator audience *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-soft-white border border-muted-lavender text-xs focus:ring-2 focus:ring-deep-violet/30 resize-none"
                />
                <Button type="submit" variant="primary" disabled={loading} className="w-full justify-center py-3.5 rounded-full shadow-md">
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
