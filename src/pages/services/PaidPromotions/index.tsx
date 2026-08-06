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
  CheckSquare,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
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
      tag: 'Instagram & TikTok Creator Outreach',
      description: 'Curated 15 micro and macro fashion creators for authentic product placement, unboxing reels, and whitelisted ad distribution.',
      highlights: ['Authentic Creator Reviews', 'Creator Whitelisting Rights', 'High Engagement Retention'],
      image: '/media/cap_promo_natural.jpg',
    },
    beauty: {
      title: 'Skincare Brand x Beauty Influencers',
      tag: 'YouTube & IG Story Integration',
      description: 'End-to-end influencer partnership campaign coordinating 10 beauty creators for long-form tutorial integrations and Instagram Story promo codes.',
      highlights: ['Dedicated Tutorial Videos', 'Trackable Promo Discount Codes', 'Creator Asset Rights'],
      image: '/media/contact_studio_natural.jpg',
    },
  };

  const creatorFramework = [
    { name: 'Creator Discovery', icon: Search, desc: 'Targeted Niche & Demographic Research' },
    { name: 'Vetting & Audits', icon: ShieldCheck, desc: 'Audience Authenticity & Engagement Check' },
    { name: 'Contracting & Briefs', icon: CheckSquare, desc: 'Legal Licensing & Brand Brief Alignment' },
    { name: 'Content Production', icon: Sparkles, desc: 'Quality Approval before Live Posting' },
    { name: 'Whitelisting & Paid Boost', icon: Share2, desc: 'Amplifying Top Performing Creator Reels' },
    { name: 'Performance Analytics', icon: TrendingUp, desc: 'Sales, Clicks & ROI Tracking' },
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
                SERVICE VERTICAL / 04
              </Badge>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-bold text-near-black tracking-tight leading-[1.08]">
                Targeted Influencer Partnerships & <br />
                <span className="italic font-normal text-deep-violet">Creator Networks.</span>
              </h1>
              <p className="card-body-text max-w-xl text-xs sm:text-sm md:text-base leading-relaxed">
                We connect your brand with the right influencers and creators to promote your products, craft authentic collaborations, and deliver meaningful business results.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a href="#promo-quote-form" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto justify-center gap-2.5 px-7 py-3.5 rounded-full shadow-md">
                    Start Creator Campaign <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <Link to={ROUTES.WORK.ROOT} className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto justify-center gap-2 px-7 py-3.5 rounded-full border border-muted-lavender bg-warm-lavender/60">
                    Explore Creator Networks <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Widescreen Photo Frame */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-muted-lavender/60 w-full aspect-[4/3] group relative">
                <img
                  src="/media/cap_promo_natural.jpg"
                  alt="Creator Promotions & Broadcast Studio"
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
              CREATOR NETWORK SPECS
            </span>
            <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
              Authentic Brand Collaborations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="promo-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Creator Research</h3>
              <p className="card-body-text text-xs">
                Deep demographic vetting to match your brand with creators who share your target audience.
              </p>
            </div>

            <div className="promo-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Campaign Management</h3>
              <p className="card-body-text text-xs">
                Handling legal contracts, product shipping, creative briefing, and timeline coordination.
              </p>
            </div>

            <div className="promo-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <CheckSquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Content Approval</h3>
              <p className="card-body-text text-xs">
                Strict quality assurance ensuring creator videos align with brand guidelines before publishing.
              </p>
            </div>

            <div className="promo-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Creator Whitelisting</h3>
              <p className="card-body-text text-xs">
                Amplifying organic creator posts via paid Meta ads for maximum reach and conversion.
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
              FEATURED CREATOR CAMPAIGNS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-near-black">
              Influencer Partnerships in Action
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
              Fashion Apparel x Creator Network
            </button>
            <button
              onClick={() => setActiveCollab('beauty')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeCollab === 'beauty'
                  ? 'bg-deep-violet text-soft-white shadow-md'
                  : 'bg-warm-lavender/60 text-near-black hover:bg-warm-lavender'
              }`}
            >
              Skincare Brand x Beauty Influencers
            </button>
          </div>

          <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <Badge variant="violet" className="text-[10px]">
                {collabShowcases[activeCollab].tag}
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-near-black">
                {collabShowcases[activeCollab].title}
              </h3>
              <p className="card-body-text text-xs sm:text-sm">
                {collabShowcases[activeCollab].description}
              </p>

              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-muted-lavender/40">
                {collabShowcases[activeCollab].highlights.map((h) => (
                  <div key={h} className="flex items-center gap-1.5 text-[11px] font-semibold text-near-black">
                    <CheckCircle2 className="w-3.5 h-3.5 text-deep-violet shrink-0" />
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

      {/* 4. CREATOR FRAMEWORK MATRIX */}
      <section className="py-16 sm:py-20 bg-soft-white border-t border-muted-lavender/40">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
              EXECUTION FRAMEWORK
            </span>
            <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
              How We Manage Creator Outreach
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {creatorFramework.map((item) => {
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
      <section id="promo-quote-form" className="py-16 sm:py-24 bg-warm-lavender/40 border-t border-muted-lavender/50">
        <Container size="large" className="max-w-4xl px-6 sm:px-10">
          <div className="bg-soft-white rounded-3xl p-6 sm:p-10 border border-muted-lavender/80 shadow-xl space-y-6">
            <div className="text-center space-y-2">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
                KICKSTART CREATOR CAMPAIGN
              </span>
              <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
                Tell Us About Your Product Promotion Goals
              </h2>
              <p className="card-body-text text-xs sm:text-sm max-w-lg mx-auto">
                Fill out this form and our creator relations team will respond within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-deep-violet mx-auto" />
                <h3 className="text-xl font-editorial font-bold">Request Received</h3>
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
                  placeholder="Describe your brand, product line, and target creator audience *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-warm-lavender/30 border border-muted-lavender text-xs focus:ring-2 focus:ring-deep-violet/30 resize-none"
                />
                <Button type="submit" variant="primary" disabled={loading} className="w-full justify-center py-3.5 rounded-full">
                  {loading ? 'Submitting Inquiry...' : 'Submit Creator Promotion Inquiry'}
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
