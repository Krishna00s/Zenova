import React, { useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { useGSAP } from '@gsap/react';
import { cardReveal } from '../../../animations/reveal';

export const WorkingTogetherChapter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = containerRef.current?.querySelectorAll('.approach-card');
    if (cards && cards.length > 0) {
      cardReveal(cards, { stagger: 0.1 });
    }
  }, { scope: containerRef });

  const steps = [
    {
      step: '01',
      title: 'Understand',
      description: 'We learn about your business, audience, and what success looks like for you.',
      art: 'bg-gradient-to-b from-purple-900/20 to-warm-lavender',
    },
    {
      step: '02',
      title: 'Plan Together',
      description: 'We shape the right strategy and map out a simple, focused plan that makes sense.',
      art: 'bg-gradient-to-b from-purple-800/20 to-warm-lavender',
    },
    {
      step: '03',
      title: 'Create',
      description: 'We design, build, and bring ideas to life with care and attention to every little detail.',
      art: 'bg-gradient-to-b from-deep-violet/30 to-warm-lavender',
    },
    {
      step: '04',
      title: 'Launch',
      description: "We test everything thoroughly and launch only when it's ready to make an impact.",
      art: 'bg-gradient-to-b from-purple-900/20 to-warm-lavender',
    },
    {
      step: '05',
      title: 'Evolve',
      description: 'We stay with you, improving, optimizing, and helping you grow over time.',
      art: 'bg-gradient-to-b from-purple-950/30 to-warm-lavender',
    },
  ];

  return (
    <section ref={containerRef} id="process" className="relative w-full bg-soft-white text-near-black py-24 md:py-36">
      <Container>
        {/* Header Narrative */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
            OUR APPROACH
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-near-black tracking-tight leading-[1.08]">
            Simple steps. <br />
            <span className="italic font-normal text-deep-violet">
              Thoughtful outcomes.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-slate font-sans leading-relaxed max-w-xl">
            We keep the process clear and collaborative so you always know what's happening, and why it matters.
          </p>
        </div>

        {/* 5 Column Cards with Pill Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="approach-card group bg-soft-white rounded-3xl p-5 border border-muted-lavender/60 shadow-xs hover:shadow-lg hover:border-deep-violet/30 transition-all duration-500 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Photo Thumbnail Container with Top Pill Badge */}
                <div className={`w-full aspect-[4/5] rounded-2xl ${item.art} relative overflow-hidden flex items-end justify-center pb-4`}>
                  <div className="w-10 h-10 rounded-full bg-soft-white/90 backdrop-blur-md shadow-sm flex items-center justify-center font-mono text-xs font-bold text-deep-violet border border-muted-lavender/50">
                    {item.step}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2 pt-2 text-center sm:text-left">
                  <h3 className="text-xl font-editorial font-bold text-near-black group-hover:text-deep-violet transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-slate leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
