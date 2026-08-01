import React from 'react';
import { Container } from '../../../components/ui/Container';

export const HumanTrustChapter: React.FC = () => {
  return (
    <section className="relative w-full bg-warm-lavender/30 text-near-black py-24 md:py-36 border-t border-muted-lavender/40">
      <Container>
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
              WHY PEOPLE WORK WITH US
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-near-black tracking-tight leading-[1.05]">
              We care about <br />
              <span className="italic font-normal text-deep-violet">
                the right things.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-neutral-slate leading-relaxed">
              We're not here to impress you with big words. We're here to understand you, build with you, and grow with you.
            </p>
          </div>
        </div>

        {/* Asymmetric Editorial Grid matching V2 Reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          {/* Card 1 (Left Column Top) */}
          <div className="lg:col-span-4 bg-soft-white rounded-3xl p-8 border border-muted-lavender/60 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="w-full aspect-[4/3] rounded-2xl bg-warm-lavender/80 overflow-hidden flex items-center justify-center p-4">
              <span className="text-xs font-mono text-deep-violet">Team Collaboration</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-editorial font-bold text-near-black">
                Real conversations. <br />
                <span className="italic font-normal text-deep-violet">No middle layers.</span>
              </h3>
              <p className="text-xs text-neutral-slate leading-relaxed">
                You talk to the people who actually build your project.
              </p>
            </div>
          </div>

          {/* Card 2 (Left Column Bottom) */}
          <div className="lg:col-span-4 bg-soft-white rounded-3xl p-8 border border-muted-lavender/60 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="text-2xl font-editorial font-bold text-near-black">
                We think long-term. <br />
                <span className="italic font-normal text-deep-violet">Not just launch day.</span>
              </h3>
              <p className="text-xs text-neutral-slate leading-relaxed">
                We build things that are easy to grow, easy to manage, and built to last.
              </p>
            </div>
            <div className="w-full aspect-[4/3] rounded-2xl bg-muted-lavender/40 overflow-hidden flex items-center justify-center p-4">
              <span className="text-xs font-mono text-deep-violet">Scalable Systems</span>
            </div>
          </div>

          {/* Card 3 (Middle Tall Portrait Column) */}
          <div className="lg:col-span-4 bg-gradient-to-b from-deep-violet via-purple-900 to-near-black text-soft-white rounded-3xl p-8 shadow-md flex flex-col justify-between min-h-[480px]">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-lavender">Craftsmanship</span>
              <h3 className="text-3xl font-editorial font-bold leading-tight">
                We sweat <br />
                <span className="italic font-normal text-muted-lavender">the small stuff.</span>
              </h3>
              <p className="text-xs text-neutral-slate/80 leading-relaxed">
                Because details are what separate good from unforgettable.
              </p>
            </div>

            <div className="pt-8 border-t border-muted-lavender/20 space-y-4">
              <h4 className="text-2xl font-editorial font-bold">Clear process. <br /><span className="italic font-normal text-muted-lavender">Peace of mind.</span></h4>
              <p className="text-xs text-neutral-slate/80 leading-relaxed">
                You'll always know what's happening, what's next, and who's working on it.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
