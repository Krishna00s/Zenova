import React, { useRef } from 'react';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { ArrowUpRight, ShieldCheck, Target, Users } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { scrollRevealCards } from '../animations/reveal';

export const AboutPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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
                ABOUT ZENOVA ENTERPRISES
              </Badge>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-editorial font-bold text-near-black tracking-tight leading-[1.05]">
                Built on trust, clarity, <br />
                <span className="italic font-normal text-deep-violet">and genuine craftsmanship.</span>
              </h1>

              <p className="card-body-text max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed">
                We don't make fake promises or claim to be corporate grandmasters. We are a dedicated team of builders who have completed a solid body of work. We know our craft, we work hard, and we only take on projects we know we can execute well.
              </p>

              <div className="pt-2 flex items-center gap-4">
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

      {/* 2. CORE VALUES GRID */}
      <section className="py-16 sm:py-24 bg-warm-lavender/30 border-y border-muted-lavender/50">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3 about-reveal">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
              OUR GUIDING PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-5xl font-editorial font-bold text-near-black">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="about-reveal bg-soft-white p-6 sm:p-8 rounded-3xl border border-muted-lavender/60 shadow-xs space-y-4 hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-editorial font-bold text-near-black">Honest Scope & Competence</h3>
              <p className="card-body-text text-xs sm:text-sm leading-relaxed">
                No fake promises. We only take on jobs we know we can execute with quality. If a project requires a technology we haven't mastered yet, we're transparent and won't accept it until we're properly prepared.
              </p>
            </div>

            <div className="about-reveal bg-soft-white p-6 sm:p-8 rounded-3xl border border-muted-lavender/60 shadow-xs space-y-4 hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-editorial font-bold text-near-black">Practical Execution</h3>
              <p className="card-body-text text-xs sm:text-sm leading-relaxed">
                We focus on dependable execution—clean code, thoughtful video editing, and structured ad strategy that deliver genuine value for your business.
              </p>
            </div>

            <div className="about-reveal bg-soft-white p-6 sm:p-8 rounded-3xl border border-muted-lavender/60 shadow-xs space-y-4 hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-editorial font-bold text-near-black">Direct Collaboration</h3>
              <p className="card-body-text text-xs sm:text-sm leading-relaxed">
                You work directly with the developers, editors, and creators building your project. No sales fluff, no middle layers, just straightforward communication.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default AboutPage;
