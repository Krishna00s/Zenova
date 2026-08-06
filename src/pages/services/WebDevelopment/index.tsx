import React, { useState, useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import {
  Code,
  Layout,
  Zap,
  Layers,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Server,
  Cpu,
  Globe,
  Terminal,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { scrollRevealCards } from '../../../animations/reveal';
import { submitContactInquiry } from '../../../api/contact';

export const WebDevelopmentPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'lumina' | 'aura' | 'vanguard'>('lumina');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    serviceInterest: 'web-development',
    message: '',
  });

  useGSAP(() => {
    const revealEls = containerRef.current?.querySelectorAll('.web-reveal');
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

  const caseStudies = {
    lumina: {
      title: 'Lumina Financial Platform',
      tag: 'Web Application & Dashboard',
      description: 'A high-throughput financial analytics web application engineered for real-time data streaming, sub-50ms render latency, and clean dark-mode UI.',
      stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Recharts'],
      metrics: ['0.4s LCP Score', '100/100 Lighthouse Performance', 'Zero UI Lag'],
      image: '/media/cap_web_natural.jpg',
    },
    aura: {
      title: 'Aura Atelier Luxury E-Commerce',
      tag: 'E-Commerce Storefront',
      description: 'Bespoke luxury fashion storefront featuring dynamic cart drawer transitions, instant image loading, and a custom checkout engine.',
      stack: ['Next.js', 'TypeScript', 'Stripe', 'Supabase', 'Framer Motion', 'Tailwind CSS'],
      metrics: ['99.9% Uptime', '3.8x Higher Conversion', 'Sub-second Checkout'],
      image: '/media/photo_create_natural.jpg',
    },
    vanguard: {
      title: 'Vanguard Architectural Studio',
      tag: 'Portfolio & Web CMS',
      description: 'Minimalist editorial architectural web app with dynamic webGL project showcases, headless CMS integration, and fluid page transitions.',
      stack: ['React', 'TypeScript', 'GSAP', 'Headless CMS', 'Vercel', 'Tailwind CSS'],
      metrics: ['Smooth 60fps Transitions', 'Global Edge CDN', 'Full SEO Score'],
      image: '/media/photo_launch_natural.jpg',
    },
  };

  const techStack = [
    { name: 'React 18', icon: Code, desc: 'Component Architecture' },
    { name: 'TypeScript', icon: Terminal, desc: 'Type Safety & Scale' },
    { name: 'Next.js', icon: Globe, desc: 'SSR & Static Generation' },
    { name: 'Supabase / Postgres', icon: Server, desc: 'Backend & RLS Security' },
    { name: 'Tailwind CSS', icon: Layout, desc: 'Editorial Token Systems' },
    { name: 'Node.js Engine', icon: Cpu, desc: 'High-Speed API Endpoints' },
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
                SERVICE VERTICAL / 01
              </Badge>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-bold text-near-black tracking-tight leading-[1.08]">
                Bespoke Web Platforms & <br />
                <span className="italic font-normal text-deep-violet">Digital Architecture.</span>
              </h1>
              <p className="card-body-text max-w-xl text-xs sm:text-sm md:text-base leading-relaxed">
                We design and engineer modern, high-performance websites and web applications built with extreme technical precision, fast response times, and clean editorial aesthetics.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a href="#quote-form" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto justify-center gap-2.5 px-7 py-3.5 rounded-full shadow-md">
                    Discuss Web Project <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <Link to={ROUTES.WORK.ROOT} className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto justify-center gap-2 px-7 py-3.5 rounded-full border border-muted-lavender bg-warm-lavender/60">
                    Explore Work <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Widescreen Photo Frame */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-muted-lavender/60 w-full aspect-[4/3] group relative">
                <img
                  src="/media/cap_web_natural.jpg"
                  alt="Web Engineering Studio Workspace"
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
              ENGINEERING SPECS
            </span>
            <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
              What We Build & Engineer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="web-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Custom Web Apps</h3>
              <p className="card-body-text text-xs">
                Complex dashboards, SaaS products, and portal applications built on React and TypeScript.
              </p>
            </div>

            <div className="web-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <Layout className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">E-Commerce Platforms</h3>
              <p className="card-body-text text-xs">
                High-converting storefronts with custom checkout integrations and lightning-fast search.
              </p>
            </div>

            <div className="web-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Performance & SEO</h3>
              <p className="card-body-text text-xs">
                Sub-second page loads, 100/100 Core Web Vitals, and semantic HTML5 DOM optimization.
              </p>
            </div>

            <div className="web-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Design Tokens</h3>
              <p className="card-body-text text-xs">
                Reusable UI component libraries, micro-animations, and fluid multi-device layouts.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. FEATURED CASE STUDIES WITH INTERACTIVE TABS */}
      <section className="py-16 sm:py-24">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
              FEATURED WEB CASE STUDIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-near-black">
              Proven Platforms in Production
            </h2>
          </div>

          {/* Interactive Case Study Selector Tabs */}
          <div className="flex flex-wrap gap-3 pb-8 border-b border-muted-lavender/40">
            <button
              onClick={() => setActiveTab('lumina')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'lumina'
                  ? 'bg-deep-violet text-soft-white shadow-md'
                  : 'bg-warm-lavender/60 text-near-black hover:bg-warm-lavender'
              }`}
            >
              Lumina Financial Platform
            </button>
            <button
              onClick={() => setActiveTab('aura')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'aura'
                  ? 'bg-deep-violet text-soft-white shadow-md'
                  : 'bg-warm-lavender/60 text-near-black hover:bg-warm-lavender'
              }`}
            >
              Aura Atelier Luxury E-Commerce
            </button>
            <button
              onClick={() => setActiveTab('vanguard')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'vanguard'
                  ? 'bg-deep-violet text-soft-white shadow-md'
                  : 'bg-warm-lavender/60 text-near-black hover:bg-warm-lavender'
              }`}
            >
              Vanguard Studio Web App
            </button>
          </div>

          {/* Active Tab Panel */}
          <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <Badge variant="violet" className="text-[10px]">
                {caseStudies[activeTab].tag}
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-near-black">
                {caseStudies[activeTab].title}
              </h3>
              <p className="card-body-text text-xs sm:text-sm">
                {caseStudies[activeTab].description}
              </p>

              {/* Tech Badges */}
              <div className="pt-2 flex flex-wrap gap-2">
                {caseStudies[activeTab].stack.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-md bg-warm-lavender/60 text-deep-violet font-mono text-[11px] font-medium border border-muted-lavender/40">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-muted-lavender/40">
                {caseStudies[activeTab].metrics.map((m) => (
                  <div key={m} className="flex items-center gap-1.5 text-[11px] font-semibold text-near-black">
                    <CheckCircle2 className="w-3.5 h-3.5 text-deep-violet shrink-0" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-muted-lavender/60 w-full aspect-[16/10] relative group">
                <img
                  src={caseStudies[activeTab].image}
                  alt={caseStudies[activeTab].title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. TECH STACK MATRIX */}
      <section className="py-16 sm:py-20 bg-soft-white border-t border-muted-lavender/40">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
              TECHNOLOGY MATRIX
            </span>
            <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
              Modern Full-Stack Tooling
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((item) => {
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
      <section id="quote-form" className="py-16 sm:py-24 bg-warm-lavender/40 border-t border-muted-lavender/50">
        <Container size="large" className="max-w-4xl px-6 sm:px-10">
          <div className="bg-soft-white rounded-3xl p-6 sm:p-10 border border-muted-lavender/80 shadow-xl space-y-6">
            <div className="text-center space-y-2">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
                KICKSTART WEB DEVELOPMENT
              </span>
              <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
                Tell Us About Your Web Project
              </h2>
              <p className="card-body-text text-xs sm:text-sm max-w-lg mx-auto">
                Fill out this quick form and our lead web engineer will respond within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-deep-violet mx-auto" />
                <h3 className="text-xl font-editorial font-bold">Request Received</h3>
                <p className="card-body-text text-xs">We will be in touch with a clear scope and timeline proposal.</p>
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
                  placeholder="Describe your website or web app requirements *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-warm-lavender/30 border border-muted-lavender text-xs focus:ring-2 focus:ring-deep-violet/30 resize-none"
                />
                <Button type="submit" variant="primary" disabled={loading} className="w-full justify-center py-3.5 rounded-full">
                  {loading ? 'Submitting Proposal...' : 'Submit Web Engineering Inquiry'}
                </Button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default WebDevelopmentPage;
