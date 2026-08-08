import React, { useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { ArrowUpRight, Play, Code, Video, Megaphone, Share2 } from 'lucide-react';
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
      id: 'web',
      domainLabel: 'WEB ENGINEERING',
      category: 'React 18 & Next.js Architecture',
      title: 'Web Engineering & Development',
      description: 'Custom digital platforms, web apps, and CMS systems engineered for sub-50ms dashboard response speed, SEO authority, and scale.',
      link: ROUTES.SERVICES.WEB_DEV,
      image: '/media/cap_web_natural.jpg',
      badgeStyle: 'bg-[#09152A] text-[#00F0FF] border-[#00F0FF]/40',
      categoryTagStyle: 'text-indigo-600 font-bold',
      taglineOverlay: 'Sub-50ms Speed • Full Stack',
      hoverBorder: 'hover:border-cyan-500/50 hover:shadow-cyan-950/10 hover:shadow-2xl',
      accentGlow: 'from-indigo-500/10 to-cyan-500/5',
      icon: Code,
      iconColor: 'text-cyan-400',
    },
    {
      id: 'video',
      domainLabel: 'VIDEO PRODUCTION',
      category: '4K Cinema Cut & Reels',
      title: 'Video Editing & Production',
      description: 'Cinematic brand documentaries, commercial ads, and high-retention 9:16 mobile short-form reels cut with custom sound design.',
      link: ROUTES.SERVICES.VIDEO_EDITING,
      image: '/media/cap_video_natural.jpg',
      badgeStyle: 'bg-[#18082A] text-[#FF66CC] border-[#FF66CC]/40',
      categoryTagStyle: 'text-purple-700 font-bold',
      taglineOverlay: '4K Cinema Cut • 60fps Reels',
      hoverBorder: 'hover:border-pink-500/50 hover:shadow-pink-950/10 hover:shadow-2xl',
      accentGlow: 'from-purple-500/10 to-pink-500/5',
      icon: Video,
      iconColor: 'text-pink-400',
      hasPlayOverlay: true,
    },
    {
      id: 'ads',
      domainLabel: 'AD CREATION',
      category: 'Meta, Google & TikTok Direct Response',
      title: 'Ad Creatives & Distribution',
      description: 'High-converting video ad collateral published, A/B tested, and managed to drive direct revenue and customer acquisition.',
      link: ROUTES.SERVICES.AD_CREATION,
      image: '/media/cap_ad_natural.jpg',
      badgeStyle: 'bg-[#041A12] text-[#00FFA3] border-[#00FFA3]/40',
      categoryTagStyle: 'text-emerald-700 font-bold',
      taglineOverlay: '+420% ROAS • Multi-Channel',
      hoverBorder: 'hover:border-emerald-500/50 hover:shadow-emerald-950/10 hover:shadow-2xl',
      accentGlow: 'from-emerald-500/10 to-teal-500/5',
      icon: Megaphone,
      iconColor: 'text-emerald-400',
    },
    {
      id: 'promotions',
      domainLabel: 'CREATOR PROMOTIONS',
      category: 'Influencer Whitelisting & Networks',
      title: 'Creator Promotions & Campaigns',
      description: 'Handpicked lifestyle and tech creators producing authentic unboxing, tutorial integrations, and whitelisted ad campaigns.',
      link: ROUTES.SERVICES.PAID_PROMOTIONS,
      image: '/media/cap_promo_natural.jpg',
      badgeStyle: 'bg-[#1E0814] text-[#FF85A2] border-[#FF85A2]/40',
      categoryTagStyle: 'text-rose-700 font-bold',
      taglineOverlay: 'Vetted Creators • Whitelisted Ads',
      hoverBorder: 'hover:border-rose-500/50 hover:shadow-rose-950/10 hover:shadow-2xl',
      accentGlow: 'from-rose-500/10 to-orange-500/5',
      icon: Share2,
      iconColor: 'text-rose-400',
    },
  ];

  return (
    <section ref={containerRef} className="relative w-full bg-warm-lavender/30 text-near-black py-14 sm:py-20 md:py-24 border-y border-muted-lavender/40">
      <Container size="large" className="max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2.5 px-2">
          <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-extrabold">
            SERVICES THROUGH WORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-editorial font-black text-near-black tracking-tight leading-tight">
            What We Do. <span className="italic font-normal text-deep-violet">How We Do It.</span>
          </h2>
          <p className="card-body-text max-w-xl mx-auto text-xs sm:text-sm">
            From building digital experiences to driving real-world growth, we craft solutions that deliver measurable impact.
          </p>
        </div>

        {/* Compact 2 Rows x 2 Columns Grid with Responsive Mobile Scaling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6 items-stretch w-full">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                to={item.link}
                className={`capability-card group bg-soft-white rounded-xl sm:rounded-3xl p-3 sm:p-5 border border-muted-lavender/60 shadow-xs hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between relative overflow-hidden ${item.hoverBorder}`}
              >
                {/* Subtle Ambient Hover Glow Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.accentGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                <div className="space-y-2.5 sm:space-y-3 relative z-10">
                  {/* Photo Container with Top-Left Domain Badge & Bottom-Right Tagline Overlay */}
                  <div className="w-full aspect-[16/10] rounded-lg sm:rounded-2xl overflow-hidden relative bg-warm-lavender/40 border border-slate-200/50">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    
                    {/* Top-Left Distinct Domain Badge */}
                    <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-near-black/95 text-white text-[8px] sm:text-[10.5px] font-mono font-extrabold tracking-wider uppercase border border-white/25 shadow-xl flex items-center gap-1 sm:gap-1.5 z-20">
                      <Icon className={`w-2.5 h-2.5 sm:w-3 sm:h-3 animate-pulse ${item.iconColor}`} />
                      <span className="text-white font-bold">{item.domainLabel}</span>
                    </div>

                    {/* Video Center Play Button Overlay */}
                    {item.hasPlayOverlay && (
                      <div className="absolute inset-0 bg-near-black/30 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-soft-white text-near-black shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-near-black stroke-none ml-0.5" />
                        </div>
                      </div>
                    )}

                    {/* Bottom-Right Performance Tagline Badge - Compact & Subtle */}
                    <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full bg-near-black/90 text-white/90 text-[7.5px] sm:text-[8.5px] font-mono font-semibold tracking-wide border border-white/15 shadow-sm z-20">
                      {item.taglineOverlay}
                    </div>
                  </div>

                  {/* Sub-Category, High-Impact Bold Title + Arrow & Description */}
                  <div className="space-y-1 sm:space-y-2 px-0.5 pt-0.5 text-left">
                    <span className={`text-[10px] sm:text-[12px] font-mono uppercase tracking-widest block font-black ${item.categoryTagStyle}`}>
                      {item.category}
                    </span>
                    <h3 className="text-lg sm:text-3xl font-editorial font-black text-near-black group-hover:text-deep-violet transition-colors leading-tight flex items-center justify-between tracking-tight">
                      <span>{item.title}</span>
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500 stroke-[2.5] group-hover:text-deep-violet group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0 ml-2 sm:ml-3" />
                    </h3>
                    <p className="card-body-text text-[11px] sm:text-sm text-slate-600 line-clamp-2 leading-snug sm:leading-relaxed pt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
