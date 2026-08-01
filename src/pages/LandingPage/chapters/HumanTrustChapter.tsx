import React from 'react';
import { Container } from '../../../components/ui/Container';
import { Badge } from '../../../components/ui/Badge';
import { MessageSquare, ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react';

export const HumanTrustChapter: React.FC = () => {
  const trustPoints = [
    {
      icon: MessageSquare,
      title: 'Real conversations. No middle layers.',
      description: 'You talk directly to the engineers, designers, and strategists who actually build your project.',
    },
    {
      icon: ShieldCheck,
      title: 'We think long-term. Not just launch day.',
      description: 'We build digital products that are simple to manage, robust to scale, and designed to endure.',
    },
    {
      icon: Sparkles,
      title: 'We sweat the small stuff.',
      description: 'Because micro-details, typography rhythm, and smooth motion are what separate good from unforgettable.',
    },
    {
      icon: HeartHandshake,
      title: 'Clear process. Peace of mind.',
      description: "You will always know what is happening, what comes next, and who is accountable for every deliverable.",
    },
  ];

  return (
    <section className="relative w-full bg-soft-white text-near-black py-24 md:py-36">
      <Container>
        {/* Header Narrative */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <Badge variant="lavender">Why People Work With Us</Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-near-black tracking-tight">
              We care about <span className="italic font-normal text-deep-violet">the right things.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-base text-neutral-slate leading-relaxed">
              We're not here to impress you with big buzzwords. We're here to understand your business, build with you, and grow with you over time.
            </p>
          </div>
        </div>

        {/* Asymmetric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trustPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-warm-lavender/30 rounded-3xl p-8 sm:p-10 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:bg-soft-white hover:border-deep-violet/30 transition-all duration-500 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-deep-violet text-soft-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-editorial font-bold text-near-black group-hover:text-deep-violet transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-slate leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="pt-8">
                  <div className="w-8 h-0.5 bg-deep-violet/20 group-hover:w-16 group-hover:bg-deep-violet transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
