import React, { useState, useRef } from 'react';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { ArrowUpRight, ShieldCheck, Target, Users, Code, Video, Megaphone, Share2, Sparkles } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { scrollRevealCards } from '../animations/reveal';

export const AboutPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ctaCardRef = useRef<HTMLDivElement>(null);

  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [isSpotlightHovered, setIsSpotlightHovered] = useState(false);

  const handleSpotlightMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ctaCardRef.current) return;
    const rect = ctaCardRef.current.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useGSAP(() => {
    const revealEls = containerRef.current?.querySelectorAll('.about-reveal');
    if (revealEls && revealEls.length > 0 && containerRef.current) {
      scrollRevealCards(revealEls, containerRef.current, { stagger: 0.08, duration: 0.5 });
    }
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="w-full bg-soft-white text-near-black pt-28 sm:pt-36 pb-20 md:pb-28 overflow-hidden">
      {/* 1. HERO NARRATIVE */}
      <section className="relative w-full pb-16 sm:pb-24">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6 about-reveal">
              <Badge variant="lavender" className="px-3.5 py-1 text-xs">
                ABOUT US — ZENOVA ENTERPRISES
              </Badge>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-editorial font-bold text-near-black tracking-tight leading-[1.05]">
                Built on trust, clarity, <br />
                <span className="italic font-normal text-deep-violet">and genuine craftsmanship.</span>
              </h1>

              <p className="card-body-text max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed">
                We don't make fake promises or claim to be corporate grandmasters. We are a dedicated team of digital builders who have completed a solid body of real-world projects. We know our craft, we work hard, and we only take on work we know we can execute with genuine competence.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link to={ROUTES.WORK.ROOT}>
                  <Button variant="primary" size="lg" className="gap-2 px-7 py-3.5 rounded-full shadow-md">
                    Explore Our Work <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to={ROUTES.CONTACT}>
                  <Button variant="secondary" size="lg" className="gap-2 px-7 py-3.5 rounded-full border border-muted-lavender">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 w-full about-reveal">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-muted-lavender/80 aspect-[4/5] relative group">
                <img
                  src="/media/contact_studio_natural.jpg"
                  alt="Zenova Agency Studio Culture"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black/70 via-transparent to-transparent flex items-end p-6 text-soft-white">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold bg-deep-violet px-2.5 py-1 rounded-full border border-soft-white/20">
                      Studio HQ
                    </span>
                    <p className="text-xs font-editorial italic">Where honest work turns into real results.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. OUR STORY & PHILOSOPHY CHAPTER */}
      <section className="py-16 sm:py-24 bg-warm-lavender/20 border-y border-muted-lavender/50">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image Showcase */}
            <div className="lg:col-span-5 about-reveal">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-muted-lavender/70 aspect-[16/10] sm:aspect-[4/3] relative group">
                <img
                  src="/media/photo_user_real_conversations.jpg"
                  alt="Real Collaborative Work Session"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-near-black/90 text-soft-white font-mono text-[10px] font-bold">
                  Direct Creator-to-Client Access
                </div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-7 space-y-5 about-reveal">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
                OUR JOURNEY & PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-near-black tracking-tight leading-[1.1]">
                How We Operate & <br />
                <span className="italic font-normal text-deep-violet">Why Clients Value Us.</span>
              </h2>
              <p className="card-body-text text-xs sm:text-sm md:text-base leading-relaxed">
                Zenova Enterprises was founded on a straightforward principle: digital agencies shouldn't rely on buzzwords or inflated claims to build client relationships. Instead of selling empty promises, we focus on building real digital products—responsive React applications, rhythmic video edits, data-driven ad campaigns, and targeted creator promotions.
              </p>
              <p className="card-body-text text-xs sm:text-sm md:text-base leading-relaxed">
                Over time, we've refined our internal workflows and built a proven track record. We are explicit about our capabilities: when a project fits our core skillset, we execute it with precision. If a project requires a skill we haven't mastered yet, we communicate transparently—we never accept jobs we aren't properly prepared to deliver.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. CORE GUIDING PRINCIPLES */}
      <section className="py-16 sm:py-24 bg-soft-white">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3 about-reveal">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
              WHAT WE STAND FOR
            </span>
            <h2 className="text-3xl sm:text-5xl font-editorial font-bold text-near-black">
              Our Core Principles
            </h2>
            <p className="card-body-text text-xs sm:text-sm">
              Practical guidelines that keep our team grounded, honest, and focused on quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="about-reveal bg-soft-white p-6 sm:p-8 rounded-3xl border border-muted-lavender/60 shadow-xs space-y-4 hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-editorial font-bold text-near-black">Honest Scope & Competence</h3>
              <p className="card-body-text text-xs sm:text-sm leading-relaxed">
                No fake promises. We only take on jobs we know we can execute with quality. If a project requires a technology outside our skillset, we're transparent and won't accept it until we've mastered it.
              </p>
            </div>

            <div className="about-reveal bg-soft-white p-6 sm:p-8 rounded-3xl border border-muted-lavender/60 shadow-xs space-y-4 hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-editorial font-bold text-near-black">Practical Execution</h3>
              <p className="card-body-text text-xs sm:text-sm leading-relaxed">
                We focus on dependable execution—clean code, thoughtful video editing, and structured ad strategy that deliver genuine, practical value for your business.
              </p>
            </div>

            <div className="about-reveal bg-soft-white p-6 sm:p-8 rounded-3xl border border-muted-lavender/60 shadow-xs space-y-4 hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-editorial font-bold text-near-black">Direct Collaboration</h3>
              <p className="card-body-text text-xs sm:text-sm leading-relaxed">
                You work directly with the developers, editors, and creators building your project. No sales fluff, no middle management, just straightforward communication.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. OUR CAPABILITY STACK */}
      <section className="py-16 sm:py-24 bg-warm-lavender/30 border-t border-muted-lavender/50">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3 about-reveal">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
              OUR CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-editorial font-bold text-near-black">
              What We Do Well
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="about-reveal bg-soft-white p-6 rounded-2xl border border-muted-lavender/60 space-y-3 shadow-xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-deep-violet text-soft-white flex items-center justify-center">
                <Code className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-editorial font-bold text-near-black">Web Engineering</h4>
              <p className="text-xs text-neutral-slate leading-relaxed">
                Fast, responsive React & TypeScript web applications, landing pages, and editorial digital platforms.
              </p>
            </div>

            <div className="about-reveal bg-soft-white p-6 rounded-2xl border border-muted-lavender/60 space-y-3 shadow-xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-deep-violet text-soft-white flex items-center justify-center">
                <Video className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-editorial font-bold text-near-black">Video Production</h4>
              <p className="text-xs text-neutral-slate leading-relaxed">
                Post-production editing, rhythm-driven commercial films, and high-retention short-form reels.
              </p>
            </div>

            <div className="about-reveal bg-soft-white p-6 rounded-2xl border border-muted-lavender/60 space-y-3 shadow-xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-deep-violet text-soft-white flex items-center justify-center">
                <Megaphone className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-editorial font-bold text-near-black">Ad Creation & Distribution</h4>
              <p className="text-xs text-neutral-slate leading-relaxed">
                Direct-response video & static ad creatives structured for Meta, TikTok, and Google Performance Max.
              </p>
            </div>

            <div className="about-reveal bg-soft-white p-6 rounded-2xl border border-muted-lavender/60 space-y-3 shadow-xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-deep-violet text-soft-white flex items-center justify-center">
                <Share2 className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-editorial font-bold text-near-black">Creator Promotions</h4>
              <p className="text-xs text-neutral-slate leading-relaxed">
                Influencer research, handle whitelisting, and creator collaboration management for genuine reach.
              </p>
            </div>
          </div>

          {/* Bottom CTA Box — YouTube Matte Black Style with Mouse-Following Spotlight Radial Glow */}
          <div
            ref={ctaCardRef}
            onMouseMove={handleSpotlightMouseMove}
            onMouseEnter={() => setIsSpotlightHovered(true)}
            onMouseLeave={() => setIsSpotlightHovered(false)}
            className="about-reveal bg-[#0F0F0F] text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-2xl border border-neutral-800 max-w-4xl mx-auto mt-8 relative overflow-hidden group transition-colors duration-300 hover:border-neutral-700"
          >
            {/* Mouse-following cursor-centered dim white spotlight overlay */}
            <div
              className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
              style={{
                opacity: isSpotlightHovered ? 1 : 0,
                background: `radial-gradient(450px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.03) 45%, transparent 80%)`,
              }}
            />

            <div className="relative z-20 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-mono font-semibold text-white border border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-purple-300" /> Ready to Build?
              </div>
              <h3 className="text-2xl sm:text-4xl font-editorial font-bold text-white tracking-tight">
                Let's talk about your next project.
              </h3>
              <p className="max-w-lg mx-auto text-sm sm:text-base text-neutral-200 font-sans leading-relaxed">
                No sales pitches or pressure. Let's discuss what you need built and how we can help.
              </p>
              <div className="pt-2 flex items-center justify-center gap-4">
                <Link to={ROUTES.CONTACT}>
                  <Button variant="primary" size="lg" className="gap-2 px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors shadow-lg">
                    Get in Touch <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default AboutPage;
