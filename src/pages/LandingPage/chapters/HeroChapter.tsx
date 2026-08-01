import React, { useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { Button } from '../../../components/ui/Button';
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
    <section ref={containerRef} className="relative w-full bg-soft-white text-near-black pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column Narrative */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
              WE BUILD. YOU GROW.
            </span>

            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-near-black tracking-tight leading-[1.08]"
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
              className="text-sm sm:text-base text-neutral-slate max-w-lg leading-relaxed pt-1"
            >
              We help ambitious businesses transform ideas into digital products, content, and growth systems that create real impact.
            </p>

            <div ref={actionsRef} className="pt-3 flex flex-wrap items-center gap-3">
              <Link to={ROUTES.WORK.ROOT}>
                <Button variant="primary" size="lg" className="gap-2.5 px-6 py-3 rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Explore Our Work
                  <div className="w-5 h-5 rounded-full bg-soft-white/20 flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Button>
              </Link>

              <Link to={ROUTES.CONTACT}>
                <Button variant="secondary" size="lg" className="gap-2 px-6 py-3 rounded-full border border-muted-lavender bg-warm-lavender/60 hover:bg-warm-lavender hover:-translate-y-0.5 transition-all">
                  <div className="w-5 h-5 rounded-full bg-deep-violet text-soft-white flex items-center justify-center">
                    <Play className="w-2.5 h-2.5 fill-soft-white stroke-none ml-0.5" />
                  </div>
                  <span>Watch Showreel</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column 3D Lavender & Coins Artwork */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-muted-lavender/60 group hover:scale-[1.01] transition-transform duration-500">
              <img
                src="/media/hero_lavender_landscape.jpg"
                alt="3D Lavender Field with Metallic Coins"
                className="w-full h-auto object-cover min-h-[340px] md:min-h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-near-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
