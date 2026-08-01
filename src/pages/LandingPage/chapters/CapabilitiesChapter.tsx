import React, { useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { Button } from '../../../components/ui/Button';
import { LaptopShowcaseArt } from '../../../assets/LaptopShowcaseArt';
import { CameraShowcaseArt } from '../../../assets/CameraShowcaseArt';
import { PhoneShowcaseArt } from '../../../assets/PhoneShowcaseArt';
import { MegaphoneShowcaseArt } from '../../../assets/MegaphoneShowcaseArt';
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
      art: LaptopShowcaseArt,
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Story-driven editing that captures attention and communicates your message powerfully.',
      link: ROUTES.SERVICES.VIDEO_EDITING,
      art: CameraShowcaseArt,
    },
    {
      icon: Megaphone,
      title: 'Ad Creation & Distribution',
      description: 'We create ad videos and creatives, then publish and manage them across platforms like Facebook, Instagram, and more. Paid promotion support available on request.',
      link: ROUTES.SERVICES.AD_CREATION,
      art: PhoneShowcaseArt,
    },
    {
      icon: Share2,
      title: 'Paid Promotions & Collaborations',
      description: 'We connect your brand with the right influencers and creators to promote your products, build trust, and drive results.',
      link: ROUTES.SERVICES.PAID_PROMOTIONS,
      art: MegaphoneShowcaseArt,
    },
  ];

  return (
    <section ref={containerRef} className="relative w-full bg-warm-lavender/30 text-near-black py-24 md:py-36 border-y border-muted-lavender/40">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
            CAPABILITIES THROUGH WORK
          </span>
          <h2 className="text-4xl sm:text-5xl font-editorial font-bold text-near-black tracking-tight">
            What We Do. <span className="italic font-normal text-deep-violet">How We Do It.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-slate font-sans leading-relaxed">
            From building digital experiences to driving real-world growth, we craft solutions that deliver measurable impact.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            const ArtComponent = item.art;
            return (
              <div
                key={index}
                className="capability-card group bg-soft-white rounded-3xl p-6 sm:p-8 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/30 transition-all duration-500 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Icon Badge */}
                  <div className="w-12 h-12 rounded-2xl bg-warm-lavender flex items-center justify-center text-deep-violet group-hover:bg-deep-violet group-hover:text-soft-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
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

                  {/* 3D Visual Art Preview */}
                  <div className="pt-2">
                    <ArtComponent className="w-full h-auto max-h-[160px]" />
                  </div>
                </div>

                {/* Pill Button CTA */}
                <div className="pt-8">
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
