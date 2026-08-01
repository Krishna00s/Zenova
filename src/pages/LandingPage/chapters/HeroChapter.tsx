import React, { useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';
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
    if (headlineRef.current) fadeIn(headlineRef.current, { yOffset: 30, duration: 1.0 });
    if (subheadRef.current) fadeIn(subheadRef.current, { yOffset: 20, duration: 0.9, delay: 0.2 });
    if (actionsRef.current) fadeIn(actionsRef.current, { yOffset: 15, duration: 0.8, delay: 0.4 });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full bg-soft-white text-near-black pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2">
              <Badge variant="lavender">We Build. You Grow.</Badge>
            </div>

            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-editorial font-bold text-near-black tracking-tight leading-[1.08]"
            >
              Ideas that Build Brands.{' '}
              <span className="block italic font-normal text-deep-violet">
                Systems that Drive Growth.
              </span>
            </h1>

            <p
              ref={subheadRef}
              className="text-base sm:text-lg lg:text-xl text-neutral-slate max-w-xl font-sans leading-relaxed"
            >
              We help ambitious businesses transform ideas into digital products, content, and growth systems that create real impact.
            </p>

            <div ref={actionsRef} className="pt-2 flex flex-wrap items-center gap-4">
              <Link to={ROUTES.WORK.ROOT}>
                <Button variant="primary" size="lg" className="gap-3 shadow-md hover:shadow-lg">
                  Explore Our Work <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Link to={ROUTES.CONTACT}>
                <Button variant="secondary" size="lg" className="gap-2 border border-muted-lavender/60">
                  <Play className="w-3.5 h-3.5 fill-deep-violet stroke-none" /> Watch Showreel
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Visual Artwork Column */}
          <div className="lg:col-span-5 relative">
            <LavenderHeroArt className="w-full h-auto min-h-[380px] lg:min-h-[460px] flex items-center justify-center" />
          </div>
        </div>
      </Container>
    </section>
  );
};
