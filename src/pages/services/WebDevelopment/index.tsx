import React, { useState, useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { Badge } from '../../../components/ui/Badge';
import { Link as RouterLink } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import {
  Code,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Smartphone,
  Zap,
  Sparkles,
  ShieldCheck,
  MousePointerClick,
  Terminal,
  Cpu,
  Layers,
  Server,
  ChevronLeft,
  ChevronRight,
  Check,
  Plus,
  X,
  TrendingUp,
  Layout,
  FileCode,
  Flame,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { scrollRevealCards } from '../../../animations/reveal';
import { submitContactInquiry } from '../../../api/contact';

export const WebDevelopmentPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
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

  const webProjects = [
    {
      id: 1,
      category: 'Luxury E-Commerce',
      title: 'Aura Atelier Luxury Storefront',
      subtitle: 'E-Commerce & High-Conversion Shopping Engine',
      story: 'Designed for an international luxury fashion house. We engineered a sub-second e-commerce experience with dynamic cart transitions, fluid mobile navigation, and custom Stripe checkout integration.',
      highlights: ['Sub-second Page Load Speed', 'Mobile-First Touch Architecture', 'Custom Checkout Engine'],
      image: '/media/photo_sketch_wireframe.jpg',
      url: 'auraatelier.com',
      badge: 'LUXURY E-COMMERCE',
      tagline: 'High-Fashion Digital Flagship',
    },
    {
      id: 2,
      category: 'Fintech Web App',
      title: 'Lumina Financial Platform',
      subtitle: 'Real-Time Financial Analytics Dashboard',
      story: 'Engineered for a high-growth fintech startup. Our engineering team transformed complex real-time market data into a clean web application with dark-mode UI and sub-50ms render latency.',
      highlights: ['Real-Time Data Streaming', 'Dark & Light Mode Toggle', 'Sub-50ms Render Latency'],
      image: '/media/photo_understand_dev.jpg',
      url: 'luminaapp.io',
      badge: 'FINTECH WEB APP',
      tagline: 'Sub-50ms Financial Terminal',
    },
    {
      id: 3,
      category: 'Editorial CMS Portfolio',
      title: 'Vanguard Architectural Studio',
      subtitle: 'Editorial Portfolio & Headless CMS',
      story: 'Crafted for an international architectural practice. Our frontend team let high-resolution photography breathe with 60fps fluid scroll transitions and quiet editorial typography.',
      highlights: ['60fps Smooth Scroll Motion', 'Editorial Typography Triad', 'Headless CMS Integration'],
      image: '/media/photo_launch_review.jpg',
      url: 'vanguardstudio.arch',
      badge: 'EDITORIAL CMS',
      tagline: 'Architectural Storytelling Engine',
    },
    {
      id: 4,
      category: 'Enterprise SaaS Portal',
      title: 'Krona Cloud SaaS Portal',
      subtitle: 'Enterprise Workspace & User Portal',
      story: 'Built for an enterprise cloud platform. Features row-level security authentication, multi-tenant workspace management, and responsive dashboard analytics engineered by our web team.',
      highlights: ['Row-Level Security Auth', 'Multi-Tenant Workspaces', 'Responsive Metric Cards'],
      image: '/media/photo_create_ui.jpg',
      url: 'krona.cloud',
      badge: 'ENTERPRISE SAAS',
      tagline: 'Multi-Tenant Cloud Workspace',
    },
    {
      id: 5,
      category: 'Creative Design Tokens',
      title: 'Aethel Design Token System',
      subtitle: 'Design System & Component Library',
      story: 'Created for a fast-scaling product design team. Includes 50+ reusable React tokens, accessible WCAG contrast compliance, and automated Storybook docs built by our web developers.',
      highlights: ['50+ Reusable Tokens', 'WCAG AAA Accessibility', 'Automated Storybook Hub'],
      image: '/media/cap_web_engineering.jpg',
      url: 'aethel.design',
      badge: 'DESIGN TOKENS',
      tagline: 'Reusable React UI Tokens',
    },
  ];

  const totalProjects = webProjects.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalProjects);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  const activeProject = webProjects[activeIndex];

  return (
    <main ref={containerRef} className="w-full bg-soft-white text-near-black pt-28 sm:pt-32 pb-20 md:pb-28 overflow-hidden">
      {/* 1. HERO STORY CHAPTER WITH MULTI-LAYERED 3D UI MOCKUP */}
      <section className="relative w-full pb-16 sm:pb-24">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-slate-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-5 sm:space-y-6 web-reveal w-full">
              <Badge variant="violet" className="px-3.5 py-1 text-xs shadow-xs bg-near-black text-soft-white border-transparent">
                WEB ENGINEERING & DIGITAL ARCHITECTURE
              </Badge>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-bold text-near-black tracking-tight leading-[1.08]">
                Websites should feel simple. <br />
                <span className="italic font-normal text-slate-700">And work effortlessly.</span>
              </h1>

              <p className="card-body-text max-w-xl text-xs sm:text-sm md:text-base leading-relaxed">
                Your website is often the first conversation someone has with your brand. We build websites and web applications that are clean, fast, easy to navigate, and designed to turn visitors into long-term customers.
              </p>

              {/* Desktop Only Buttons */}
              <div className="hidden lg:flex flex-wrap items-center gap-3 pt-2">
                <a href="#web-start-form" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-near-black text-soft-white font-medium text-sm shadow-md hover:bg-slate-800 hover:-translate-y-0.5 transition-all cursor-pointer">
                    Start Your Web Project <ArrowRight className="w-4 h-4" />
                  </button>
                </a>
                <RouterLink to={ROUTES.WORK.ROOT} className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-slate-200 bg-slate-100 text-near-black font-medium text-sm hover:bg-slate-200 hover:-translate-y-0.5 transition-all cursor-pointer">
                    Explore Recent Builds <ArrowUpRight className="w-4 h-4" />
                  </button>
                </RouterLink>
              </div>
            </div>

            {/* 3D MULTI-LAYERED PRODUCT SHOWCASE MOCKUP (IMAGE) */}
            <div className="lg:col-span-6 w-full relative">
              <div className="bg-soft-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-2xl border border-slate-200 relative space-y-3">
                <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-100 border border-slate-200">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                  </div>
                  <div className="px-4 py-1 rounded-md bg-soft-white font-mono text-[10px] text-near-black/70 flex items-center gap-2 shadow-xs border border-slate-200 w-1/2 justify-center">
                    <Globe className="w-3 h-3 text-near-black" />
                    <span>zenova.studio/app</span>
                  </div>
                  <Layout className="w-3.5 h-3.5 text-near-black" />
                </div>

                <div className="rounded-xl overflow-hidden aspect-[16/10] relative border border-slate-200 shadow-inner group">
                  <img
                    src="/media/photo_understand_dev.jpg"
                    alt="Senior Web Developer Engineering Code"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-near-black/80 via-transparent to-transparent flex items-end justify-between p-4">
                    <div className="text-soft-white space-y-0.5">
                      <span className="text-[10px] font-mono font-bold text-near-black bg-soft-white px-2 py-0.5 rounded">Web Developer</span>
                      <p className="text-xs font-semibold">Sub-Second Load Time Architecture</p>
                    </div>
                  </div>
                </div>

                {/* FLOATING MOBILE PHONE SCREEN */}
                <div className="absolute -left-3 sm:-left-6 bottom-4 w-36 sm:w-44 bg-near-black p-2 sm:p-2.5 rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-soft-white/80 z-20 animate-bounce-slow">
                  <div className="w-10 h-2 bg-soft-white/20 rounded-full mx-auto mb-2" />
                  <div className="rounded-xl overflow-hidden aspect-[9/16] relative border border-soft-white/10">
                    <img
                      src="/media/photo_sketch_wireframe.jpg"
                      alt="UI UX Lead Sketching Wireframes"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 right-2 p-1.5 rounded-lg bg-near-black/90 text-[8px] text-soft-white font-mono flex items-center justify-between">
                      <span>Mobile First</span>
                      <span className="text-green-400 font-bold">60 FPS</span>
                    </div>
                  </div>
                </div>

                {/* FLOATING UX BADGE */}
                <div className="absolute -top-4 -right-2 sm:-right-4 bg-near-black text-soft-white px-4 py-2.5 rounded-2xl shadow-xl border border-soft-white/40 flex items-center gap-2 z-20 animate-pulse-slow">
                  <div className="w-7 h-7 rounded-xl bg-soft-white/20 flex items-center justify-center font-bold font-mono text-xs">
                    UX
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] font-mono text-soft-white/70 block uppercase">Standard</span>
                    <span className="text-xs font-bold font-editorial">WCAG AAA</span>
                  </div>
                </div>

                {/* FLOATING UI CARD COMPONENT */}
                <div className="absolute -bottom-5 -right-2 sm:-right-4 bg-soft-white p-3 rounded-2xl shadow-2xl border border-slate-200 z-20 space-y-1.5 max-w-[170px] sm:max-w-[200px]">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-near-black font-sans">React 18 Engine</span>
                    <Zap className="w-3.5 h-3.5 text-near-black" />
                  </div>
                  <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-near-black w-4/5 rounded-full" />
                  </div>
                  <div className="flex items-center gap-1.5 pt-1">
                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <div className="w-5 h-5 rounded-full bg-slate-200 text-near-black flex items-center justify-center">
                      <Plus className="w-3 h-3" />
                    </div>
                    <div className="w-5 h-5 rounded-full bg-slate-200 text-near-black flex items-center justify-center">
                      <X className="w-3 h-3" />
                    </div>
                    <span className="text-[9px] font-mono text-neutral-slate ml-auto font-semibold">100% Custom</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Only Buttons (Placed BELOW the Image on Mobile Screens) */}
            <div className="block lg:hidden w-full space-y-3 pt-8 mt-4 z-30 relative">
              <a href="#web-start-form" className="w-full block">
                <button className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-near-black text-soft-white font-medium text-sm shadow-md hover:bg-slate-800 transition-all cursor-pointer">
                  Start Your Web Project <ArrowRight className="w-4 h-4" />
                </button>
              </a>
              <RouterLink to={ROUTES.WORK.ROOT} className="w-full block">
                <button className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-slate-200 bg-slate-100 text-near-black font-medium text-sm hover:bg-slate-200 transition-all cursor-pointer">
                  Explore Recent Builds <ArrowUpRight className="w-4 h-4" />
                </button>
              </RouterLink>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. OUR PHILOSOPHY CARDS WITH VISUAL GRAPHICS */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-100/60 via-slate-50 to-soft-white border-y border-slate-200">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-near-black tracking-widest font-semibold">
                OUR PHILOSOPHY
              </span>
              <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black leading-tight">
                No bloated templates. <br />
                <span className="italic font-normal text-slate-700">Just clean, custom code.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <p className="card-body-text text-xs sm:text-sm md:text-base leading-relaxed">
                Many agencies use heavy, slow templates that break easily and look like everyone else. We build custom websites tailored specifically to your goals. Whether you are non-technical or a veteran engineer, you will appreciate how fast, reliable, and easy to update our websites are.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
            <div className="web-reveal bg-soft-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-2xl hover:border-near-black/40 hover:-translate-y-1 transition-all space-y-4">
              <div className="h-24 w-full rounded-xl bg-near-black/95 p-3 flex flex-col justify-between border border-soft-white/10">
                <div className="flex items-center justify-between text-[9px] font-mono text-soft-white/60">
                  <span>LIGHTHOUSE SCORE</span>
                  <span className="text-green-400 font-bold">100/100</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-soft-white font-mono text-lg font-bold">0.3s</div>
                  <Flame className="w-5 h-5 text-soft-white animate-pulse" />
                </div>
                <div className="h-1.5 w-full bg-soft-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-slate-400 to-green-400 w-full" />
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-editorial font-bold text-near-black">Lightning Fast</h3>
                <p className="card-body-text text-xs">
                  Pages load in less than a second so visitors never leave out of frustration.
                </p>
              </div>
            </div>

            <div className="web-reveal bg-soft-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-2xl hover:border-near-black/40 hover:-translate-y-1 transition-all space-y-4">
              <div className="h-24 w-full rounded-xl bg-slate-100 p-3 flex items-center justify-center border border-slate-200 relative overflow-hidden">
                <div className="w-12 h-20 bg-near-black rounded-lg border border-soft-white/20 p-1 flex flex-col justify-between shadow-md">
                  <div className="w-4 h-1 bg-soft-white/30 rounded-full mx-auto" />
                  <div className="w-full h-12 bg-slate-800 rounded flex items-center justify-center">
                    <Smartphone className="w-3.5 h-3.5 text-soft-white" />
                  </div>
                  <div className="w-2 h-2 rounded-full bg-soft-white/30 mx-auto" />
                </div>
                <span className="absolute top-2 right-2 text-[9px] font-mono font-bold text-near-black bg-soft-white px-1.5 py-0.5 rounded shadow-xs border border-slate-200">
                  Touch Ready
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-editorial font-bold text-near-black">Mobile Perfect</h3>
                <p className="card-body-text text-xs">
                  Looks and feels like a native mobile app on iPhones, Androids, and tablets.
                </p>
              </div>
            </div>

            <div className="web-reveal bg-soft-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-2xl hover:border-near-black/40 hover:-translate-y-1 transition-all space-y-4">
              <div className="h-24 w-full rounded-xl bg-soft-white border border-slate-200 p-3 flex flex-col justify-between shadow-xs">
                <div className="flex items-center gap-2 text-[10px] text-slate-800 font-sans font-semibold">
                  <Globe className="w-3 h-3 text-near-black" />
                  <span>google.com/search</span>
                </div>
                <div className="text-[10px] font-bold text-near-black line-clamp-1">
                  #1 Rank — Zenova Agency Web Dev
                </div>
                <div className="text-[9px] text-neutral-slate line-clamp-1 font-mono">
                  Schema.org Structured Data Enabled
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-editorial font-bold text-near-black">Search Engine Ready</h3>
                <p className="card-body-text text-xs">
                  Built with modern SEO structure so Google can index and rank your pages higher.
                </p>
              </div>
            </div>

            <div className="web-reveal bg-soft-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-2xl hover:border-near-black/40 hover:-translate-y-1 transition-all space-y-4">
              <div className="h-24 w-full rounded-xl bg-near-black/95 p-3 flex flex-col justify-between border border-soft-white/10 text-soft-white">
                <div className="flex items-center justify-between text-[9px] font-mono text-soft-white/80">
                  <span>ADMIN CMS PANEL</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                  <span>1-Click Content Update</span>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-editorial font-bold text-near-black">Easy to Update</h3>
                <p className="card-body-text text-xs">
                  Simple admin dashboard so you can update text, images, and projects without coding.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. MONUMENTAL CENTERED "THE WORK SPEAKS" SHOWCASE CARDBOX */}
      <section className="py-16 sm:py-24">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="w-full bg-soft-white rounded-3xl p-6 sm:p-12 lg:p-16 border border-slate-200 shadow-2xl space-y-8 relative overflow-hidden text-center">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-near-black tracking-widest font-semibold block">
                THE WORK SPEAKS
              </span>
              <h2 className="text-3xl sm:text-5xl font-editorial font-bold text-near-black tracking-tight">
                Featured Web Builds
              </h2>
            </div>

            <div className="relative w-full max-w-5xl mx-auto py-2">
              <button
                onClick={handlePrev}
                className="absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-soft-white/95 border border-slate-200 shadow-xl flex items-center justify-center text-near-black hover:bg-near-black hover:text-soft-white transition-all z-30 active:scale-95"
                aria-label="Previous Project Left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="w-full overflow-hidden px-8 sm:px-12 [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]">
                <div className="flex items-center justify-center gap-2.5 sm:gap-4 py-2 w-full">
                  {[-2, -1, 0, 1, 2].map((offset) => {
                    const projectIdx = (activeIndex + offset + totalProjects * 100) % totalProjects;
                    const proj = webProjects[projectIdx];

                    const isCenter = offset === 0;
                    const isAdjacent = Math.abs(offset) === 1;

                    return (
                      <button
                        key={`${proj.id}-${offset}`}
                        onClick={() => setActiveIndex(projectIdx)}
                        className={`transition-all duration-500 rounded-full font-semibold text-xs whitespace-nowrap px-4 sm:px-6 py-2.5 shadow-sm border ${
                          isCenter
                            ? 'bg-near-black text-soft-white border-near-black scale-105 z-20 shadow-xl opacity-100'
                            : isAdjacent
                            ? 'bg-slate-100 text-near-black border-slate-200 scale-95 z-10 opacity-80 hover:opacity-100 hover:scale-100'
                            : 'bg-slate-50 text-near-black/70 border-slate-200/60 scale-90 z-0 opacity-45 blur-[0.5px] hover:opacity-75'
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
                className="absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-soft-white/95 border border-slate-200 shadow-xl flex items-center justify-center text-near-black hover:bg-near-black hover:text-soft-white transition-all z-30 active:scale-95"
                aria-label="Next Project Right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div key={activeProject.id} className="pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left animate-fade-in transition-all duration-500">
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center justify-between">
                  <Badge variant="violet" className="text-[10px] bg-near-black text-soft-white border-transparent">
                    {activeProject.badge}
                  </Badge>
                  <span className="font-mono text-xs text-neutral-slate font-bold">
                    Project 0{activeIndex + 1} / 0{totalProjects}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
                    {activeProject.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-700 font-semibold uppercase tracking-wider">
                    {activeProject.subtitle}
                  </p>
                </div>

                <p className="card-body-text text-xs sm:text-sm leading-relaxed">
                  {activeProject.story}
                </p>

                <div className="pt-2 space-y-2.5 border-t border-slate-200">
                  {activeProject.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2.5 text-xs font-semibold text-near-black">
                      <CheckCircle2 className="w-4 h-4 text-near-black shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 relative">
                <div className="bg-near-black rounded-2xl p-4 shadow-2xl border border-slate-800 space-y-3 relative overflow-hidden">
                  <div className="flex items-center justify-between px-2 pb-2 border-b border-soft-white/10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                    </div>
                    <span className="font-mono text-[10px] text-soft-white/60">
                      https://{activeProject.url}
                    </span>
                    <MousePointerClick className="w-3.5 h-3.5 text-soft-white" />
                  </div>

                  <div className="rounded-xl overflow-hidden aspect-[16/10] relative group border border-soft-white/10">
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-near-black/80 via-transparent to-transparent flex items-end justify-between p-4">
                      <span className="px-2.5 py-1 rounded-full bg-near-black text-[10px] font-mono font-bold text-soft-white border border-soft-white/20 shadow-md">
                        {activeProject.tagline}
                      </span>
                      <span className="text-soft-white text-xs font-mono font-semibold flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-green-400" /> Active Build
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-slate-200 w-full text-center">
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-near-black hover:bg-near-black hover:text-soft-white transition-all shadow-md active:scale-95"
                  aria-label="Previous Project Bottom"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <span className="font-mono text-xs font-bold text-near-black px-4 py-2 rounded-full bg-slate-100 border border-slate-200">
                  Project 0{activeIndex + 1} / 0{totalProjects}
                </span>

                <button
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-near-black hover:bg-near-black hover:text-soft-white transition-all shadow-md active:scale-95"
                  aria-label="Next Project Bottom"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. GRAPHIC TOOLING & TECH MATRIX */}
      <section className="py-16 sm:py-20 bg-slate-100/50 border-t border-slate-200">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-near-black tracking-widest font-semibold">
              TECHNOLOGY MATRIX
            </span>
            <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
              Built on Modern React Engineering
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-4 rounded-2xl bg-soft-white border border-slate-200 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-near-black text-soft-white mx-auto flex items-center justify-center">
                <Code className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">React 18</h4>
              <p className="card-body-text text-[10px]">Component Architecture</p>
            </div>

            <div className="p-4 rounded-2xl bg-soft-white border border-slate-200 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-near-black text-soft-white mx-auto flex items-center justify-center">
                <Terminal className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">TypeScript</h4>
              <p className="card-body-text text-[10px]">Type Safety & Scale</p>
            </div>

            <div className="p-4 rounded-2xl bg-soft-white border border-slate-200 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-near-black text-soft-white mx-auto flex items-center justify-center">
                <Globe className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">Next.js Engine</h4>
              <p className="card-body-text text-[10px]">SSR & Edge Rendering</p>
            </div>

            <div className="p-4 rounded-2xl bg-soft-white border border-slate-200 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-near-black text-soft-white mx-auto flex items-center justify-center">
                <Server className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">Supabase / Postgres</h4>
              <p className="card-body-text text-[10px]">Backend & RLS Security</p>
            </div>

            <div className="p-4 rounded-2xl bg-soft-white border border-slate-200 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-near-black text-soft-white mx-auto flex items-center justify-center">
                <Layers className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">Tailwind CSS</h4>
              <p className="card-body-text text-[10px]">Editorial Tokens</p>
            </div>

            <div className="p-4 rounded-2xl bg-soft-white border border-slate-200 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-near-black text-soft-white mx-auto flex items-center justify-center">
                <Cpu className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">Node API</h4>
              <p className="card-body-text text-[10px]">Sub-50ms Endpoints</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. 3-STEP PROCESS WITH DEDICATED VISUAL GRAPHIC CARDS */}
      <section className="py-16 sm:py-20 bg-soft-white border-t border-slate-200">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-near-black tracking-widest font-semibold">
              SIMPLE 3-STEP PROCESS
            </span>
            <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
              How Working Together Feels
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4 hover:-translate-y-1 transition-all">
              <div className="h-32 w-full rounded-xl bg-soft-white border border-slate-200 p-3 space-y-2 relative overflow-hidden">
                <div className="flex items-center justify-between text-[9px] font-mono text-near-black font-bold">
                  <span>FIGMA WIREFRAME SKETCH</span>
                  <span className="px-1.5 py-0.5 rounded bg-slate-200">01</span>
                </div>
                <div className="grid grid-cols-3 gap-1.5 pt-1">
                  <div className="h-12 rounded bg-slate-100 border border-dashed border-slate-300 flex items-center justify-center text-[8px] font-mono">Hero</div>
                  <div className="h-12 rounded bg-slate-100 border border-dashed border-slate-300 flex items-center justify-center text-[8px] font-mono">Grid</div>
                  <div className="h-12 rounded bg-slate-100 border border-dashed border-slate-300 flex items-center justify-center text-[8px] font-mono">CTA</div>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-near-black font-bold">STEP 01</span>
                <h3 className="text-xl font-editorial font-bold">Design & Wireframe</h3>
                <p className="card-body-text text-xs">
                  We learn about your brand and sketch out clean layouts so you see exactly how your site will look before coding.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4 hover:-translate-y-1 transition-all">
              <div className="h-32 w-full rounded-xl bg-near-black/95 p-3 space-y-2 text-soft-white relative overflow-hidden border border-soft-white/10">
                <div className="flex items-center justify-between text-[9px] font-mono text-soft-white">
                  <span>REACT 18 COMPILER</span>
                  <FileCode className="w-3.5 h-3.5 text-green-400" />
                </div>
                <div className="font-mono text-[9px] text-soft-white/70 space-y-0.5">
                  <p className="text-green-400">✓ Compiled successfully in 1.9s</p>
                  <p className="text-soft-white/40">// Zero compilation warnings</p>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-near-black font-bold">STEP 02</span>
                <h3 className="text-xl font-editorial font-bold">Build & Polish</h3>
                <p className="card-body-text text-xs">
                  We write clean React code, refine spacing, test on mobile screens, and ensure everything runs lightning fast.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4 hover:-translate-y-1 transition-all">
              <div className="h-32 w-full rounded-xl bg-soft-white border border-slate-200 p-3 space-y-2 relative overflow-hidden">
                <div className="flex items-center justify-between text-[9px] font-mono text-near-black font-bold">
                  <span>SSL DOMAIN LIVE</span>
                  <Badge variant="violet" className="text-[8px] bg-near-black text-soft-white border-transparent">ACTIVE</Badge>
                </div>
                <div className="p-2 rounded bg-slate-100 border border-slate-200 flex items-center justify-between text-[10px] font-mono">
                  <span>https://yourdomain.com</span>
                  <Globe className="w-3.5 h-3.5 text-near-black" />
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-near-black font-bold">STEP 03</span>
                <h3 className="text-xl font-editorial font-bold">Launch & Grow</h3>
                <p className="card-body-text text-xs">
                  We connect your domain, double check Google analytics, and hand over your easy-to-use admin dashboard.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. SIMPLE INQUIRY FORM */}
      <section id="web-start-form" className="py-16 sm:py-24 bg-slate-100/60 border-t border-slate-200">
        <Container size="large" className="max-w-4xl px-6 sm:px-10">
          <div className="bg-soft-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
            <div className="text-center space-y-2">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-near-black tracking-widest font-semibold">
                LETS BUILD YOUR WEBSITE
              </span>
              <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
                Have a Web Project in Mind?
              </h2>
              <p className="card-body-text text-xs sm:text-sm max-w-lg mx-auto">
                Tell us about your business or project idea. We reply within 24 hours with clear next steps.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <Sparkles className="w-12 h-12 text-near-black mx-auto" />
                <h3 className="text-xl font-editorial font-bold">Thank You!</h3>
                <p className="card-body-text text-xs">We received your inquiry and will be in touch shortly.</p>
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
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-slate-900/20"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-slate-900/20"
                  />
                </div>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us a little bit about your website goals *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-slate-900/20 resize-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full justify-center py-3.5 rounded-full bg-near-black text-soft-white font-medium text-sm shadow-md hover:bg-slate-800 transition-all cursor-pointer"
                >
                  {loading ? 'Sending Inquiry...' : 'Send Web Project Message'}
                </button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default WebDevelopmentPage;
