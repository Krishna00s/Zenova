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
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { scrollRevealCards } from '../../../animations/reveal';
import { submitContactInquiry } from '../../../api/contact';

export const WebDevelopmentPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<'storefront' | 'app' | 'portfolio'>('storefront');
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

  const showcaseProjects = {
    storefront: {
      title: 'Aura Atelier Storefront',
      subtitle: 'Luxury E-Commerce & Shopping Experience',
      story: 'Designed for a high-end fashion brand. We built a lightning-fast online store with smooth product transitions, intuitive mobile navigation, and instant checkout.',
      highlights: ['Sub-second Page Load', 'Mobile Shopping First', 'Custom Checkout Engine'],
      image: '/media/cap_web_natural.jpg',
      url: 'auraatelier.com',
      badge: 'E-COMMERCE',
    },
    app: {
      title: 'Lumina Financial Platform',
      subtitle: 'Real-Time Analytics Dashboard',
      story: 'Built for a fintech startup. We transformed complex financial data into a clean, modern web dashboard that users love opening every single day.',
      highlights: ['Real-Time Streaming', 'Dark & Light Mode UI', 'Sub-50ms Render Latency'],
      image: '/media/photo_create_natural.jpg',
      url: 'luminaapp.io',
      badge: 'WEB APP',
    },
    portfolio: {
      title: 'Vanguard Architectural Studio',
      subtitle: 'Editorial Portfolio & Interactive Gallery',
      story: 'Crafted for an award-winning architecture studio. We let the high-res photography breathe with fluid scroll animations and quiet editorial typography.',
      highlights: ['60fps Scroll Motion', 'Editorial Typography', 'Headless CMS Integration'],
      image: '/media/photo_launch_natural.jpg',
      url: 'vanguardstudio.arch',
      badge: 'EDITORIAL CMS',
    },
  };

  return (
    <main ref={containerRef} className="w-full bg-soft-white text-near-black pt-28 sm:pt-32 pb-20 md:pb-28 overflow-hidden">
      {/* 1. HERO STORY CHAPTER WITH AMBIENT LIGHTING GLOW */}
      <section className="relative w-full pb-16 sm:pb-24">
        {/* Ambient Lighting Gradient Backdrop */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-deep-violet/10 via-purple-300/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="flex items-center gap-2">
                <Badge variant="violet" className="px-3.5 py-1 text-xs shadow-xs">
                  WEB ENGINEERING & DIGITAL ARCHITECTURE
                </Badge>
              </div>

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

            {/* Right Graphic Glassmorphic Browser Frame */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-near-black/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-2xl border border-muted-lavender/40 space-y-3.5 hover:border-deep-violet/40 transition-colors">
                {/* Browser Top Bar */}
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

                {/* Hero Showcase Photo Container */}
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

                {/* Simulated Graphic Micro-Code Console */}
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

      {/* 2. THE STORY / WHY WE ARE DIFFERENT */}
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

          {/* 4 Pillars Grid with Glowing Accents */}
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

      {/* 3. VISUAL SHOWCASE (INTERACTIVE BROWSER PREVIEWS & GRAPHICS) */}
      <section className="py-16 sm:py-24">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
              THE WORK SPEAKS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-near-black">
              Websites Crafted For Impact
            </h2>
            <p className="card-body-text text-xs sm:text-sm">
              Click through our recent web projects to see what we build for ambitious brands.
            </p>
          </div>

          {/* Selector Tabs */}
          <div className="flex flex-wrap gap-3 pb-8 border-b border-muted-lavender/40">
            <button
              onClick={() => setActiveProject('storefront')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeProject === 'storefront'
                  ? 'bg-deep-violet text-soft-white shadow-md'
                  : 'bg-warm-lavender/60 text-near-black hover:bg-warm-lavender'
              }`}
            >
              Luxury E-Commerce Storefront
            </button>
            <button
              onClick={() => setActiveProject('app')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeProject === 'app'
                  ? 'bg-deep-violet text-soft-white shadow-md'
                  : 'bg-warm-lavender/60 text-near-black hover:bg-warm-lavender'
              }`}
            >
              Fintech Web Application
            </button>
            <button
              onClick={() => setActiveProject('portfolio')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeProject === 'portfolio'
                  ? 'bg-deep-violet text-soft-white shadow-md'
                  : 'bg-warm-lavender/60 text-near-black hover:bg-warm-lavender'
              }`}
            >
              Architectural Studio Portfolio
            </button>
          </div>

          {/* Active Browser Display with Graphic Cards */}
          <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <Badge variant="violet" className="text-[10px]">
                {showcaseProjects[activeProject].subtitle}
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-near-black">
                {showcaseProjects[activeProject].title}
              </h3>
              <p className="card-body-text text-xs sm:text-sm leading-relaxed">
                {showcaseProjects[activeProject].story}
              </p>

              <div className="pt-4 space-y-2.5 border-t border-muted-lavender/40">
                {showcaseProjects[activeProject].highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-xs font-semibold text-near-black">
                    <CheckCircle2 className="w-4 h-4 text-deep-violet shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-near-black rounded-2xl p-4 shadow-2xl border border-muted-lavender/60 space-y-3">
                <div className="flex items-center justify-between px-2 pb-2 border-b border-soft-white/10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-mono text-[10px] text-soft-white/60">
                    https://{showcaseProjects[activeProject].url}
                  </span>
                  <MousePointerClick className="w-3.5 h-3.5 text-deep-violet" />
                </div>
                <div className="rounded-xl overflow-hidden aspect-[16/10] relative group border border-soft-white/10">
                  <img
                    src={showcaseProjects[activeProject].image}
                    alt={showcaseProjects[activeProject].title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-deep-violet/90 backdrop-blur-md text-[10px] font-mono font-bold text-soft-white">
                    {showcaseProjects[activeProject].badge}
                  </div>
                </div>
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
