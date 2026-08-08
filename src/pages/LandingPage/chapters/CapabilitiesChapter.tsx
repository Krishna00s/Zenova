import React, { useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { ArrowUpRight } from 'lucide-react';
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
      domainLabel: 'WEB ENGINEERING',
      category: 'High-Performance Websites & Apps',
      title: 'Web Engineering & Development',
      description: 'Custom React and Next.js digital platforms built for speed, conversion, sub-second loads, and scalability.',
      link: ROUTES.SERVICES.WEB_DEV,
      image: '/media/cap_web_natural.jpg',
    },
    {
      domainLabel: 'VIDEO PRODUCTION',
      category: 'Cinematic Brand Films & Short-Form',
      title: 'Video Editing & Production',
      description: 'High-impact commercial edits, 4K brand documentaries, and high-retention mobile short-form reels.',
      link: ROUTES.SERVICES.VIDEO_EDITING,
      image: '/media/cap_video_natural.jpg',
    },
    {
      domainLabel: 'AD CREATION',
      category: 'Meta & TikTok Performance Ads',
      title: 'Ad Creatives & Distribution',
      description: 'Direct-response visual ad collateral designed, published, and managed across Meta, Google, and TikTok.',
      link: ROUTES.SERVICES.AD_CREATION,
      image: '/media/cap_ad_natural.jpg',
    },
    {
      domainLabel: 'CREATOR PROMOTIONS',
      category: 'Creator Networks & Whitelisting',
      title: 'Creator Promotions & Campaigns',
      description: 'Authentic influencer product integrations, handle whitelisting, and targeted creator network campaigns.',
      link: ROUTES.SERVICES.PAID_PROMOTIONS,
      image: '/media/cap_promo_natural.jpg',
    },
  ];

  return (
    <section ref={containerRef} className="relative w-full bg-warm-lavender/30 text-near-black py-16 sm:py-20 md:py-28 border-y border-muted-lavender/40">
      <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3 px-2">
          <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
            SERVICES THROUGH WORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-near-black tracking-tight">
            What We Do. <span className="italic font-normal text-deep-violet">How We Do It.</span>
          </h2>
          <p className="card-body-text max-w-2xl mx-auto text-xs sm:text-sm">
            From building digital experiences to driving real-world growth, we craft solutions that deliver measurable impact.
          </p>
        </div>

        {/* 2 Rows x 2 Columns Grid (4 Cards Total) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch w-full">
          {capabilities.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="capability-card group bg-soft-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-muted-lavender/60 shadow-xs hover:shadow-2xl hover:border-deep-violet/40 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Photo Container with Top-Left Domain Badge */}
                <div className="w-full aspect-[16/10] sm:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden relative bg-warm-lavender/40 border border-slate-200/50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-near-black/90 backdrop-blur-md text-soft-white text-[9px] font-mono font-bold tracking-wider uppercase border border-white/10">
                    {item.domainLabel}
                  </div>
                </div>

                {/* Sub-Category, Editorial Title + Arrow & Description */}
                <div className="space-y-2 px-1 pt-1 text-left">
                  <span className="text-[11px] font-mono text-deep-violet font-semibold uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-editorial font-bold text-near-black group-hover:text-deep-violet transition-colors leading-snug flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-deep-violet group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-2" />
                  </h3>
                  <p className="card-body-text text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
