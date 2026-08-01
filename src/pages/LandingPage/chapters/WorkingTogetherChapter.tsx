import React, { useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { Badge } from '../../../components/ui/Badge';
import { useGSAP } from '@gsap/react';
import { cardReveal } from '../../../animations/reveal';

export const WorkingTogetherChapter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = containerRef.current?.querySelectorAll('.process-card');
    if (cards && cards.length > 0) {
      cardReveal(cards, { stagger: 0.1 });
    }
  }, { scope: containerRef });

  const steps = [
    {
      step: '01',
      title: 'Understand',
      description: 'We learn about your business, audience, and what success looks like for you.',
      color: 'bg-deep-violet text-soft-white',
    },
    {
      step: '02',
      title: 'Plan Together',
      description: 'We shape the right strategy and map out a simple, focused plan that makes sense.',
      color: 'bg-warm-lavender text-deep-violet border border-muted-lavender',
    },
    {
      step: '03',
      title: 'Create',
      description: 'We design, build, and bring ideas to life with care and attention to every little detail.',
      color: 'bg-deep-violet/90 text-soft-white',
    },
    {
      step: '04',
      title: 'Launch',
      description: "We test everything thoroughly and launch only when it's ready to make an impact.",
      color: 'bg-warm-lavender text-deep-violet border border-muted-lavender',
    },
    {
      step: '05',
      title: 'Evolve',
      description: 'We stay with you, improving, optimizing, and helping you grow over time.',
      color: 'bg-near-black text-soft-white',
    },
  ];

  return (
    <section ref={containerRef} className="relative w-full bg-warm-lavender/30 text-near-black py-24 md:py-36 border-t border-muted-lavender/40">
      <Container>
        {/* Header Narrative */}
        <div className="max-w-3xl mb-16 space-y-4">
          <Badge variant="violet">Our Approach</Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-near-black tracking-tight">
            Working together <span className="italic font-normal text-deep-violet">should feel simple.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-slate font-sans leading-relaxed max-w-2xl">
            We keep the process clear and collaborative so you always know what's happening, and why it matters.
          </p>
        </div>

        {/* 5 Step Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="process-card group bg-soft-white rounded-3xl p-6 sm:p-8 border border-muted-lavender/60 shadow-xs hover:shadow-lg hover:border-deep-violet/30 transition-all duration-500 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Step Number Badge */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold ${item.color}`}>
                  {item.step}
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-editorial font-bold text-near-black group-hover:text-deep-violet transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-slate leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Decorative Accent Line */}
              <div className="pt-6">
                <div className="h-0.5 w-12 bg-muted-lavender group-hover:w-full group-hover:bg-deep-violet transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
