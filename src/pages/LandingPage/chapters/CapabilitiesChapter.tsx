import React, { useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { Button } from '../../../components/ui/Button';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { Code, Video, Megaphone, Share2, ArrowRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { cardReveal } from '../../../animations/reveal';

export const CapabilitiesChapter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = containerRef.current?.querySelectorAll('.capability-card');
    if (cards && cards.length > 0) {
      cardReveal(cards, { stagger: 0.12 });
    }
  }, { scope: containerRef });

  const capabilities = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'High-performance websites and web applications that are fast, secure and built for scale.',
      link: ROUTES.SERVICES.WEB_DEV,
      image: '/media/cap_web_engineering.jpg',
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Story-driven editing that captures attention and communicates your message powerfully.',
      link: ROUTES.SERVICES.VIDEO_EDITING,
      image: '/media/cap_video_editing.jpg',
    },
    {
      icon: Megaphone,
      title: 'Ad Creation & Distribution',
      description: 'We create ad videos and creatives, then publish and manage them across Meta, Google, & TikTok.',
      link: ROUTES.SERVICES.AD_CREATION,
      image: '/media/cap_ad_creation.jpg',
    },
    {
      icon: Share2,
      title: 'Paid Promotions & Collaborations',
      description: 'We connect your brand with the right influencers and creators to promote your products and drive results.',
      link: ROUTES.SERVICES.PAID_PROMOTIONS,
      image: '/media/cap_paid_promotions.jpg',
    },
  ];

  return (
    <section ref={containerRef} className="relative w-full bg-warm-lavender/30 text-near-black py-16 sm:py-20 md:py-28 border-y border-muted-lavender/40">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2 sm:space-y-3 px-2">
          <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
            CAPABILITIES THROUGH WORK
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-editorial font-bold text-near-black tracking-tight">
            What We Do. <span className="italic font-normal text-deep-violet">How We Do It.</span>
          </h2>
          <p className="card-body-text max-w-2xl mx-auto text-xs sm:text-sm">
            From building digital experiences to driving real-world growth, we craft solutions that deliver measurable impact.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="capability-card group bg-soft-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-muted-lavender/60 shadow-xs hover:shadow-2xl hover:border-deep-violet/40 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  {/* Icon Badge */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-warm-lavender flex items-center justify-center text-deep-violet group-hover:bg-deep-violet group-hover:text-soft-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-editorial font-bold text-near-black group-hover:text-deep-violet transition-colors">
                      {item.title}
                    </h3>
                    <p className="card-body-text text-xs sm:text-sm">
                      {item.description}
                    </p>
                  </div>

                  {/* Distortion-Free Image Frame */}
                  <div className="pt-1 rounded-xl sm:rounded-2xl overflow-hidden w-full aspect-[16/10] sm:aspect-[4/3] bg-warm-lavender/50 border border-muted-lavender/40 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
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
                      className="w-full justify-between py-2.5 rounded-full text-xs font-semibold group-hover:bg-near-black transition-all"
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
