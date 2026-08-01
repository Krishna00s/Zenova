import React, { useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { Button } from '../../../components/ui/Button';
import { LavenderHeroArt } from '../../../assets/LavenderHeroArt';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { ArrowRight, Play } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { fadeIn } from '../../../animations/fade';

export const HeroChapter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (headlineRef.current) fadeIn(headlineRef.current, { yOffset: 25, duration: 1.0 });
    if (subheadRef.current) fadeIn(subheadRef.current, { yOffset: 20, duration: 0.9, delay: 0.2 });
    if (actionsRef.current) fadeIn(actionsRef.current, { yOffset: 15, duration: 0.8, delay: 0.4 });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full bg-soft-white text-near-black pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
              WE BUILD. YOU GROW.
            </span>

            <h1
              ref={headlineRef}
              className="text-5xl sm:text-6xl lg:text-7xl font-editorial font-bold text-near-black tracking-tight leading-[1.05]"
            >
              Ideas that <br />
              Build Brands. <br />
              Systems that <br />
              <span className="italic font-normal text-deep-violet">
                Drive Growth.
              </span>
            </h1>

            <p
              ref={subheadRef}
              className="text-base sm:text-lg text-neutral-slate max-w-lg leading-relaxed pt-2"
            >
              We help ambitious businesses transform ideas into digital products, content, and growth systems that create real impact.
            </p>

            <div ref={actionsRef} className="pt-4 flex flex-wrap items-center gap-4">
              <Link to={ROUTES.WORK.ROOT}>
                <Button variant="primary" size="lg" className="gap-3 px-7 py-3.5 rounded-full shadow-lg">
                  Explore Our Work
                  <div className="w-6 h-6 rounded-full bg-soft-white/20 flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Button>
              </Link>

              <Link to={ROUTES.CONTACT}>
                <Button variant="secondary" size="lg" className="gap-2 px-6 py-3.5 rounded-full border border-muted-lavender bg-warm-lavender/60">
                  <div className="w-6 h-6 rounded-full bg-deep-violet text-soft-white flex items-center justify-center">
                    <Play className="w-3 h-3 fill-soft-white stroke-none ml-0.5" />
                  </div>
                  <span>Watch Showreel</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column 3D Lavender & Coins Art */}
          <div className="lg:col-span-6 relative">
            <LavenderHeroArt className="w-full h-auto min-h-[400px] lg:min-h-[480px]" />
          </div>
        </div>
      </Container>
    </section>
  );
};
