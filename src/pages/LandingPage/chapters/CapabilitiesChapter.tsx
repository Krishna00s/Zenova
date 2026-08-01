import React, { useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { Badge } from '../../../components/ui/Badge';
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
      accent: 'from-purple-500/10 to-transparent',
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Story-driven editing that captures attention and communicates your message powerfully.',
      link: ROUTES.SERVICES.VIDEO_EDITING,
      accent: 'from-violet-500/10 to-transparent',
    },
    {
      icon: Megaphone,
      title: 'Ad Creation & Distribution',
      description: 'We create ad videos and creatives, then publish and manage them across platforms like Facebook, Instagram and more.',
      link: ROUTES.SERVICES.AD_CREATION,
      accent: 'from-indigo-500/10 to-transparent',
    },
    {
      icon: Share2,
      title: 'Paid Promotions & Collaborations',
      description: 'We connect your brand with the right influencers and creators to promote your products, build trust, and drive results.',
      link: ROUTES.SERVICES.PAID_PROMOTIONS,
      accent: 'from-purple-600/10 to-transparent',
    },
  ];

  return (
    <section ref={containerRef} className="relative w-full bg-warm-lavender/40 text-near-black py-24 md:py-36 border-y border-muted-lavender/40">
      <Container>
        {/* Header Narrative */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="violet">Capabilities Through Work</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-near-black tracking-tight">
            What We Do. <span className="italic font-normal text-deep-violet">How We Do It.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-slate font-sans leading-relaxed">
            From building digital experiences to driving real-world growth, we craft solutions that deliver measurable impact.
          </p>
        </div>

        {/* 4 Invitation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="capability-card group relative bg-soft-white rounded-3xl p-8 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/30 transition-all duration-500 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Icon Badge */}
                  <div className="w-12 h-12 rounded-2xl bg-warm-lavender flex items-center justify-center text-deep-violet group-hover:scale-110 group-hover:bg-deep-violet group-hover:text-soft-white transition-all duration-300">
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
                </div>

                {/* Doorway Link CTA */}
                <div className="pt-8">
                  <Link to={item.link}>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full justify-between group-hover:bg-deep-violet group-hover:text-soft-white transition-all duration-300"
                    >
                      <span>View Projects</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
