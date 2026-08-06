import React, { useState, useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { Link } from 'react-router-dom';
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
      image: '/media/cap_web_natural.jpg',
      url: 'auraatelier.com',
      badge: 'LUXURY E-COMMERCE',
    },
    {
      id: 2,
      category: 'Fintech Web App',
      title: 'Lumina Financial Platform',
      subtitle: 'Real-Time Financial Analytics Dashboard',
      story: 'Engineered for a high-growth fintech startup. We transformed complex real-time market data into a clean, modern web application with dark-mode UI and sub-50ms render latency.',
      highlights: ['Real-Time Data Streaming', 'Dark & Light Mode Toggle', 'Sub-50ms Render Latency'],
      image: '/media/photo_create_natural.jpg',
      url: 'luminaapp.io',
      badge: 'FINTECH WEB APP',
    },
    {
      id: 3,
      category: 'Editorial CMS Portfolio',
      title: 'Vanguard Architectural Studio',
      subtitle: 'Editorial Portfolio & Headless CMS',
      story: 'Crafted for an international architectural practice. We let high-resolution photography breathe with 60fps fluid scroll transitions and quiet editorial typography.',
      highlights: ['60fps Smooth Scroll Motion', 'Editorial Typography Triad', 'Headless CMS Integration'],
      image: '/media/photo_launch_natural.jpg',
      url: 'vanguardstudio.arch',
      badge: 'EDITORIAL CMS',
    },
    {
      id: 4,
      category: 'Enterprise SaaS Portal',
      title: 'Krona Cloud SaaS Portal',
      subtitle: 'Enterprise Workspace & User Portal',
      story: 'Built for an enterprise cloud platform. Features row-level security authentication, multi-tenant workspace management, and responsive dashboard analytics.',
      highlights: ['Row-Level Security Auth', 'Multi-Tenant Workspaces', 'Responsive Metric Cards'],
      image: '/media/photo_understand_natural.jpg',
      url: 'krona.cloud',
      badge: 'ENTERPRISE SAAS',
    },
    {
      id: 5,
      category: 'Creative Design Tokens',
      title: 'Aethel Design Token System',
      subtitle: 'Design System & Component Library',
      story: 'Created for a fast-scaling product design team. Includes 50+ reusable React tokens, accessible WCAG contrast compliance, and automated Storybook docs.',
      highlights: ['50+ Reusable Tokens', 'WCAG AAA Accessibility', 'Automated Storybook Hub'],
      image: '/media/photo_sketch_natural.jpg',
      url: 'aethel.design',
      badge: 'DESIGN TOKENS',
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
      {/* 1. HERO STORY CHAPTER */}
      <section className="relative w-full pb-16 sm:pb-24">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-deep-violet/10 via-purple-300/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <Badge variant="violet" className="px-3.5 py-1 text-xs shadow-xs">
                WEB ENGINEERING & DIGITAL ARCHITECTURE
              </Badge>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-bold text-near-black tracking-tight leading-[1.08]">
                Websites should feel simple. <br />
                <span className="italic font-normal text-deep-violet">And work effortlessly.</span>
              </h1>

              <p className="card-body-text max-w-xl text-xs sm:text-sm md:text-base leading-relaxed">
                Your website is often the first conversation someone has with your brand. We build websites and web applications that are clean, fast, easy to navigate, and designed to turn visitors into long-term customers.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a href="#web-start-form" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto justify-center gap-2.5 px-7 py-3.5 rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all">
                    Start Your Web Project <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <Link to={ROUTES.WORK.ROOT} className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto justify-center gap-2 px-7 py-3.5 rounded-full border border-muted-lavender bg-warm-lavender/60 hover:bg-warm-lavender hover:-translate-y-0.5 transition-all">
                    Explore Recent Builds <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="bg-near-black/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-2xl border border-muted-lavender/40 space-y-3.5 hover:border-deep-violet/40 transition-colors">
                <div className="flex items-center justify-between px-2 pb-2 border-b border-soft-white/10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="px-3 py-1 rounded-md bg-soft-white/10 font-mono text-[10px] text-soft-white/70 flex items-center gap-1.5">
                    <Globe className="w-3 h-3 text-deep-violet" />
                    <span>zenova.studio/web-dev</span>
                  </div>
                  <Code className="w-4 h-4 text-deep-violet" />
                </div>

                <div className="rounded-xl overflow-hidden aspect-[4/3] relative group border border-soft-white/10">
                  <img
                    src="/media/cap_web_natural.jpg"
                    alt="Web Development Studio Workspace"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-near-black/70 via-transparent to-transparent flex items-end justify-between p-4">
                    <span className="text-soft-white font-mono text-xs font-semibold">Handcrafted Web Engineering</span>
                    <span className="px-2.5 py-1 rounded-full bg-deep-violet text-[10px] text-soft-white font-mono font-bold">100/100 LCP</span>
                  </div>
                </div>

                <div className="bg-soft-white/5 rounded-xl p-3 border border-soft-white/10 font-mono text-[10px] text-soft-white/70 space-y-1">
                  <div className="flex items-center justify-between text-deep-violet">
                    <span>const stack = ['React', 'Next.js', 'Supabase'];</span>
                    <Terminal className="w-3 h-3" />
                  </div>
                  <div className="text-soft-white/50">// Built for sub-second speeds and zero UI friction</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. OUR PHILOSOPHY */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-warm-lavender/40 via-warm-lavender/20 to-soft-white border-y border-muted-lavender/40">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
                OUR PHILOSOPHY
              </span>
              <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black leading-tight">
                No bloated templates. <br />
                <span className="italic font-normal text-deep-violet">Just clean, custom code.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <p className="card-body-text text-xs sm:text-sm md:text-base leading-relaxed">
                Many agencies use heavy, slow templates that break easily and look like everyone else. We build custom websites tailored specifically to your goals. Whether you are non-technical or a veteran engineer, you will appreciate how fast, reliable, and easy to update our websites are.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
            <div className="web-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-2xl hover:border-deep-violet/40 hover:-translate-y-1 transition-all space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-warm-lavender text-deep-violet flex items-center justify-center shadow-inner">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Lightning Fast</h3>
              <p className="card-body-text text-xs">
                Pages load in less than a second so visitors never leave out of frustration.
              </p>
            </div>

            <div className="web-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-2xl hover:border-deep-violet/40 hover:-translate-y-1 transition-all space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-warm-lavender text-deep-violet flex items-center justify-center shadow-inner">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Mobile Perfect</h3>
              <p className="card-body-text text-xs">
                Looks and feels like a native mobile app on iPhones, Androids, and tablets.
              </p>
            </div>

            <div className="web-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-2xl hover:border-deep-violet/40 hover:-translate-y-1 transition-all space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-warm-lavender text-deep-violet flex items-center justify-center shadow-inner">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Search Engine Ready</h3>
              <p className="card-body-text text-xs">
                Built with modern SEO structure so Google can index and rank your pages higher.
              </p>
            </div>

            <div className="web-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-2xl hover:border-deep-violet/40 hover:-translate-y-1 transition-all space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-warm-lavender text-deep-violet flex items-center justify-center shadow-inner">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Easy to Update</h3>
              <p className="card-body-text text-xs">
                Simple admin dashboard so you can update text, images, and projects without coding.
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
                Featured Web Builds
              </h2>
            </div>

            {/* 3D INFINITE HORIZONTAL CAROUSEL STAGE (LOCKED CENTER POSITION) */}
            <div className="w-full max-w-4xl mx-auto py-2 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]">
              <div className="flex items-center justify-center gap-2 sm:gap-4 py-2 w-full">
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
                    Project 0{activeIndex + 1} / 0{totalProjects}
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

              {/* Right Interactive Browser Container */}
              <div className="lg:col-span-6">
                <div className="bg-near-black rounded-2xl p-4 shadow-2xl border border-muted-lavender/60 space-y-3">
                  <div className="flex items-center justify-between px-2 pb-2 border-b border-soft-white/10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="font-mono text-[10px] text-soft-white/60">
                      https://{activeProject.url}
                    </span>
                    <MousePointerClick className="w-3.5 h-3.5 text-deep-violet" />
                  </div>
                  <div className="rounded-xl overflow-hidden aspect-[16/10] relative group border border-soft-white/10">
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
            </div>

            {/* BOTTOM MIDDLE CAROUSEL NAVIGATION BUTTONS */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-muted-lavender/40 w-full text-center">
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-full border border-muted-lavender flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-md active:scale-95"
                  aria-label="Previous Project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <span className="font-mono text-xs font-bold text-near-black px-4 py-2 rounded-full bg-warm-lavender/50 border border-muted-lavender/60">
                  Project 0{activeIndex + 1} / 0{totalProjects}
                </span>

                <button
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full border border-muted-lavender flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-all shadow-md active:scale-95"
                  aria-label="Next Project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. GRAPHIC TOOLING & TECH MATRIX */}
      <section className="py-16 sm:py-20 bg-warm-lavender/30 border-t border-muted-lavender/40">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
              TECHNOLOGY MATRIX
            </span>
            <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
              Built on Modern React Engineering
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-4 rounded-2xl bg-soft-white border border-muted-lavender/60 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-deep-violet text-soft-white mx-auto flex items-center justify-center">
                <Code className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">React 18</h4>
              <p className="card-body-text text-[10px]">Component Architecture</p>
            </div>

            <div className="p-4 rounded-2xl bg-soft-white border border-muted-lavender/60 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-deep-violet text-soft-white mx-auto flex items-center justify-center">
                <Terminal className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">TypeScript</h4>
              <p className="card-body-text text-[10px]">Type Safety & Scale</p>
            </div>

            <div className="p-4 rounded-2xl bg-soft-white border border-muted-lavender/60 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-deep-violet text-soft-white mx-auto flex items-center justify-center">
                <Globe className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">Next.js Engine</h4>
              <p className="card-body-text text-[10px]">SSR & Edge Rendering</p>
            </div>

            <div className="p-4 rounded-2xl bg-soft-white border border-muted-lavender/60 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-deep-violet text-soft-white mx-auto flex items-center justify-center">
                <Server className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">Supabase / Postgres</h4>
              <p className="card-body-text text-[10px]">Backend & RLS Security</p>
            </div>

            <div className="p-4 rounded-2xl bg-soft-white border border-muted-lavender/60 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-deep-violet text-soft-white mx-auto flex items-center justify-center">
                <Layers className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">Tailwind CSS</h4>
              <p className="card-body-text text-[10px]">Editorial Tokens</p>
            </div>

            <div className="p-4 rounded-2xl bg-soft-white border border-muted-lavender/60 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-deep-violet text-soft-white mx-auto flex items-center justify-center">
                <Cpu className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">Node API</h4>
              <p className="card-body-text text-[10px]">Sub-50ms Endpoints</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. HOW WORKING TOGETHER LOOKS */}
      <section className="py-16 sm:py-20 bg-soft-white border-t border-muted-lavender/40">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
              SIMPLE 3-STEP PROCESS
            </span>
            <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
              How Working Together Feels
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-warm-lavender/30 rounded-2xl p-6 border border-muted-lavender/60 space-y-3 hover:-translate-y-1 transition-all">
              <span className="text-xs font-mono text-deep-violet font-bold">STEP 01</span>
              <h3 className="text-xl font-editorial font-bold">Design & Wireframe</h3>
              <p className="card-body-text text-xs">
                We learn about your brand and sketch out clean layouts so you see exactly how your site will look before coding.
              </p>
            </div>

            <div className="bg-warm-lavender/30 rounded-2xl p-6 border border-muted-lavender/60 space-y-3 hover:-translate-y-1 transition-all">
              <span className="text-xs font-mono text-deep-violet font-bold">STEP 02</span>
              <h3 className="text-xl font-editorial font-bold">Build & Polish</h3>
              <p className="card-body-text text-xs">
                We write clean React code, refine spacing, test on mobile screens, and ensure everything runs lightning fast.
              </p>
            </div>

            <div className="bg-warm-lavender/30 rounded-2xl p-6 border border-muted-lavender/60 space-y-3 hover:-translate-y-1 transition-all">
              <span className="text-xs font-mono text-deep-violet font-bold">STEP 03</span>
              <h3 className="text-xl font-editorial font-bold">Launch & Grow</h3>
              <p className="card-body-text text-xs">
                We connect your domain, double check Google analytics, and hand over your easy-to-use admin dashboard.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. SIMPLE INQUIRY FORM */}
      <section id="web-start-form" className="py-16 sm:py-24 bg-warm-lavender/40 border-t border-muted-lavender/50">
        <Container size="large" className="max-w-4xl px-6 sm:px-10">
          <div className="bg-soft-white rounded-3xl p-6 sm:p-10 border border-muted-lavender/80 shadow-xl space-y-6">
            <div className="text-center space-y-2">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
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
                <Sparkles className="w-12 h-12 text-deep-violet mx-auto" />
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
                  placeholder="Tell us a little bit about your website goals *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-warm-lavender/30 border border-muted-lavender text-xs focus:ring-2 focus:ring-deep-violet/30 resize-none"
                />
                <Button type="submit" variant="primary" disabled={loading} className="w-full justify-center py-3.5 rounded-full shadow-md">
                  {loading ? 'Sending Inquiry...' : 'Send Web Project Message'}
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
