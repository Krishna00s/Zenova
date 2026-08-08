import React from 'react';
import { Container } from '../../../components/ui/Container';

export const HumanTrustChapter: React.FC = () => {
  return (
    <section className="relative w-full bg-warm-lavender/30 text-near-black py-16 sm:py-20 md:py-28 border-t border-muted-lavender/40">
      <Container>
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-10 sm:mb-12">
          <div className="lg:col-span-7 space-y-2 sm:space-y-3">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
              WHY PEOPLE WORK WITH US
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-editorial font-bold text-near-black tracking-tight leading-[1.05]">
              We care about <br />
              <span className="italic font-normal text-deep-violet">
                the right things.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="card-body-text text-xs sm:text-sm">
              We're not here to impress you with big words. We're here to understand you, build with you, and grow with you.
            </p>
          </div>
        </div>

        {/* Asymmetric Editorial Grid matching V2 Reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Card 1 (Left Column Top - Personalized User Photo in Left Profile Workspace Pose) */}
          <div className="lg:col-span-4 bg-soft-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/40 hover:-translate-y-1 transition-all duration-300 space-y-4 flex flex-col justify-between">
            <div className="w-full aspect-[16/10] sm:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-warm-lavender/80 border border-muted-lavender/40 relative group">
              <img
                src="/media/photo_user_real_conversations.jpg"
                alt="Real Conversations with Founder"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-editorial font-bold text-near-black">
                Real conversations. <br />
                <span className="italic font-normal text-deep-violet">No middle layers.</span>
              </h3>
              <p className="card-body-text text-xs">
                You talk to the people who actually build your project.
              </p>
            </div>
          </div>

          {/* Card 2 (Left Column Bottom) */}
          <div className="lg:col-span-4 bg-soft-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/40 hover:-translate-y-1 transition-all duration-300 space-y-4 flex flex-col justify-between">
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-editorial font-bold text-near-black">
                We think long-term. <br />
                <span className="italic font-normal text-deep-violet">Not just launch day.</span>
              </h3>
              <p className="card-body-text text-xs">
                We build things that are easy to grow, easy to manage, and built to last.
              </p>
            </div>
            <div className="w-full aspect-[16/10] sm:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-muted-lavender/40 border border-muted-lavender/40 relative group">
              <img
                src="/media/photo_create_natural.jpg"
                alt="Scalable Digital Systems"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>

          {/* Card 3 (Middle Deep Purple Luxury Gradient Craftsmanship Column) */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#230F3B] via-[#140826] to-[#0B0416] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-purple-950/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[380px] sm:min-h-[440px] border border-purple-900/60 hover:border-purple-500/50 relative overflow-hidden group">
            <div className="space-y-3 sm:space-y-4">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-purple-300 font-semibold">Craftsmanship</span>
              <h3 className="text-2xl sm:text-3xl font-editorial font-bold leading-tight text-[#F3F1F6]">
                We sweat <br />
                <span className="italic font-normal text-purple-200">the small stuff.</span>
              </h3>
              <p className="text-xs sm:text-[13px] text-[#D6CFE2]/90 font-sans leading-relaxed">
                Because details are what separate good from unforgettable.
              </p>
            </div>

            <div className="pt-6 border-t border-purple-900/50 space-y-2">
              <h4 className="text-xl sm:text-2xl font-editorial font-bold text-[#F3F1F6]">Honest Scope. <br /><span className="italic font-normal text-purple-200">No Fake Promises.</span></h4>
              <p className="text-xs sm:text-[13px] text-[#D6CFE2]/90 font-sans leading-relaxed">
                We only take on work we know we can execute well. If a project requires something outside our current skillset, we're transparent—we never accept jobs we can't deliver.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HumanTrustChapter;
