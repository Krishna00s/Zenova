import React, { useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { Button } from '../../../components/ui/Button';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { Code, Video, Megaphone, Share2, ArrowRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { scrollRevealCards } from '../../../animations/reveal';

export const CapabilitiesChapter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = containerRef.current?.querySelectorAll('.capability-card');
    if (cards && cards.length > 0 && containerRef.current) {
      scrollRevealCards(cards, containerRef.current, { stagger: 0.15, duration: 1 });
    }
  }, { scope: containerRef });

  const capabilities = [
    {
      icon: Code,
      title: 'Web Engineering',
      description: 'High-performance websites and web applications built for speed, security, and scale.',
      link: ROUTES.SERVICES.WEB_DEV,
      image: '/media/cap_web_natural.jpg',
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'Cinematic brand films, commercial edits, and high-impact short-form video storytelling.',
      link: ROUTES.SERVICES.VIDEO_EDITING,
      image: '/media/cap_video_natural.jpg',
    },
    {
      icon: Megaphone,
      title: 'Ad Creatives & Distribution',
      description: 'High-converting ad video collateral published and managed across major platforms.',
      link: ROUTES.SERVICES.AD_CREATION,
      image: '/media/cap_ad_natural.jpg',
    },
    {
      icon: Share2,
      title: 'Creator Promotions',
      description: 'Targeted influencer partnerships and creator whitelisting that deliver real growth.',
      link: ROUTES.SERVICES.PAID_PROMOTIONS,
      image: '/media/cap_promo_natural.jpg',
    },
  ];

  return (
    <section ref={containerRef} className="relative w-full bg-warm-lavender/30 text-near-black py-16 sm:py-20 md:py-28 border-y border-muted-lavender/40">
      <Container size="large" className="max-w-7xl px-8 sm:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3 px-2">
          <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
            CAPABILITIES THROUGH WORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-near-black tracking-tight">
            What We Do. <span className="italic font-normal text-deep-violet">How We Do It.</span>
          </h2>
          <p className="card-body-text max-w-2xl mx-auto text-xs sm:text-sm">
            From building digital experiences to driving real-world growth, we craft solutions that deliver measurable impact.
          </p>
        </div>

        {/* Balanced Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch w-full">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="capability-card group bg-soft-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-muted-lavender/60 shadow-xs hover:shadow-2xl hover:border-deep-violet/40 hover:-translate-y-2 hover:scale-[1.015] transition-all duration-500 flex flex-col justify-between h-full w-full min-w-0"
              >
                <div className="space-y-4">
                  {/* Icon Badge */}
                  <div className="w-11 h-11 rounded-2xl bg-warm-lavender flex items-center justify-center text-deep-violet group-hover:bg-deep-violet group-hover:text-soft-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5 min-h-[84px] flex flex-col justify-start">
                    <h3 className="text-xl sm:text-2xl font-editorial font-bold text-near-black group-hover:text-deep-violet transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="card-body-text text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Widescreen Photo Frame */}
                  <div className="pt-1 rounded-xl sm:rounded-2xl overflow-hidden w-full aspect-[16/10] bg-warm-lavender/50 border border-muted-lavender/40 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Pill Button CTA */}
                <div className="pt-5">
                  <Link to={item.link}>
                    <Button
                      variant="primary"
                      size="sm"
                      className="w-full justify-between py-3 rounded-full text-xs font-semibold group-hover:bg-near-black transition-all"
                    >
                      <span>View Projects</span>
                      <div className="w-5 h-5 rounded-full bg-soft-white/20 flex items-center justify-center">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
