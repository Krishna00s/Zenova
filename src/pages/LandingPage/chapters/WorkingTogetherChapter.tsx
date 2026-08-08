import React, { useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { useGSAP } from '@gsap/react';
import { scrollRevealCards } from '../../../animations/reveal';

export const WorkingTogetherChapter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = containerRef.current?.querySelectorAll('.approach-card');
    if (cards && cards.length > 0 && containerRef.current) {
      scrollRevealCards(cards, containerRef.current, { stagger: 0.06, duration: 0.5 });
    }
  }, { scope: containerRef });

  const steps = [
    {
      step: '01',
      title: 'Understand',
      description: 'We learn about your business, audience, and what success looks like for you.',
      image: '/media/photo_understand_natural.jpg',
    },
    {
      step: '02',
      title: 'Plan Together',
      description: 'We shape the right strategy and map out a simple, focused plan that makes sense.',
      image: '/media/photo_sketch_natural.jpg',
    },
    {
      step: '03',
      title: 'Create',
      description: 'We design, build, and bring ideas to life with care and attention to every little detail.',
      image: '/media/photo_create_natural.jpg',
    },
    {
      step: '04',
      title: 'Launch',
      description: "We test everything thoroughly and launch only when it's ready to make an impact.",
      image: '/media/photo_launch_natural.jpg',
    },
    {
      step: '05',
      title: 'Evolve',
      description: 'We stay with you, improving, optimizing, and helping you grow over time.',
      image: '/media/photo_evolve_natural.jpg',
    },
    {
      step: '06',
      title: 'Scale & Succeed',
      description: 'We partner with you for continuous growth, expanding your reach and scaling your results.',
      image: '/media/photo_user_real_conversations.jpg',
    },
  ];

  return (
    <section ref={containerRef} id="process" className="relative w-full bg-soft-white text-near-black pt-8 sm:pt-10 md:pt-14 pb-16 sm:pb-20 md:pb-28">
      <Container>
        {/* Header Narrative */}
        <div className="max-w-3xl mb-10 sm:mb-12 space-y-2 sm:space-y-3 px-1">
          <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
            OUR APPROACH
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-editorial font-bold text-near-black tracking-tight leading-[1.08]">
            Simple steps. <br />
            <span className="italic font-normal text-deep-violet">
              Thoughtful outcomes.
            </span>
          </h2>
          <p className="card-body-text max-w-xl text-xs sm:text-sm">
            We keep the process clear and collaborative so you always know what's happening, and why it matters.
          </p>
        </div>

        {/* 5 Cards on Large Screens (lg:grid-cols-5), 6 Cards on Mobile/Tablet (2 Cols x 3 Rows) */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className={`approach-card group bg-soft-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-4 lg:p-5 border border-muted-lavender/60 shadow-xs hover:shadow-2xl hover:border-deep-violet/40 hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-500 flex flex-col justify-between ${
                index >= 5 ? 'lg:hidden' : ''
              }`}
            >
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                {/* Photo Container - Balanced 4:3 Aspect Ratio */}
                <div className="w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden relative group bg-warm-lavender/50 border border-slate-200/50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-soft-white/95 backdrop-blur-md shadow-xs flex items-center justify-center font-mono text-[9px] sm:text-xs font-bold text-deep-violet border border-muted-lavender/60">
                    {item.step}
                  </div>
                </div>

                {/* Title & Description - Differentiable Heading & Proportioned Mobile Text */}
                <div className="space-y-0.5 sm:space-y-1 pt-0.5 text-left">
                  <h3 className="text-[13px] sm:text-base lg:text-lg font-editorial font-bold text-near-black tracking-tight group-hover:text-deep-violet transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 font-sans leading-snug sm:leading-relaxed">
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
