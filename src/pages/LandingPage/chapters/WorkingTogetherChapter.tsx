import React, { useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { useGSAP } from '@gsap/react';
import { scrollRevealCards } from '../../../animations/reveal';

export const WorkingTogetherChapter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = containerRef.current?.querySelectorAll('.approach-card');
    if (cards && cards.length > 0 && containerRef.current) {
      scrollRevealCards(cards, containerRef.current, { stagger: 0.08, duration: 0.75 });
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
  ];

  return (
    <section ref={containerRef} id="process" className="relative w-full bg-soft-white text-near-black py-16 sm:py-20 md:py-28">
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

        {/* 5 Column Cards - 0.75s Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="approach-card group bg-soft-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-muted-lavender/60 shadow-xs hover:shadow-2xl hover:border-deep-violet/40 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 flex flex-col justify-between"
            >
              <div className="space-y-3 sm:space-y-4">
                {/* Photo Container */}
                <div className="w-full aspect-[4/3] sm:aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden relative group bg-warm-lavender/50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-soft-white/90 backdrop-blur-md shadow-sm flex items-center justify-center font-mono text-xs font-bold text-deep-violet border border-muted-lavender/50">
                    {item.step}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-1 pt-1 text-center sm:text-left">
                  <h3 className="text-base sm:text-lg font-editorial font-bold text-near-black group-hover:text-deep-violet transition-colors">
                    {item.title}
                  </h3>
                  <p className="card-body-text text-xs">
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
