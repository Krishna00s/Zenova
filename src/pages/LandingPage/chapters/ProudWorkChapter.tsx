import React from 'react';
import { Container } from '../../../components/ui/Container';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { ArrowRight, Play, TrendingUp } from 'lucide-react';

export const ProudWorkChapter: React.FC = () => {
  return (
    <section className="relative w-full bg-soft-white text-near-black py-24 md:py-36 space-y-28">
      {/* Chapter Title */}
      <Container>
        <div className="max-w-3xl space-y-4">
          <Badge variant="lavender">Featured Showcase</Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-near-black tracking-tight">
            The work <span className="italic font-normal text-deep-violet">speaks first.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-slate leading-relaxed">
            A selection of digital platforms, cinematic edits, and growth campaigns built for ambitious brands.
          </p>
        </div>
      </Container>

      {/* 01 WEB DEVELOPMENT SHOWCASE */}
      <Container>
        <div className="bg-warm-lavender/30 rounded-3xl p-8 sm:p-12 border border-muted-lavender/60 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-mono uppercase text-deep-violet tracking-widest">01 / WEB DEVELOPMENT</span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-editorial font-bold text-near-black">
                Websites That Work. <span className="italic font-normal text-deep-violet">Experiences That Convert.</span>
              </h3>
              <p className="text-sm text-neutral-slate leading-relaxed">
                We design and develop modern, responsive websites that load fast, rank better, and turn visitors into customers.
              </p>
            </div>
            <div>
              <Link to={ROUTES.SERVICES.WEB_DEV}>
                <Button variant="primary" size="md" className="gap-2">
                  View All Web Projects <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-near-black text-soft-white rounded-2xl p-6 space-y-4 shadow-md group">
              <div className="aspect-[4/3] rounded-xl bg-deep-violet/40 overflow-hidden flex items-center justify-center relative">
                <div className="p-4 text-center">
                  <span className="text-xs font-mono text-muted-lavender uppercase">Fintech App</span>
                  <p className="text-lg font-editorial font-bold text-soft-white">Lumina Financial</p>
                </div>
              </div>
              <div>
                <h4 className="text-base font-editorial font-bold">Fintech Platform</h4>
                <p className="text-xs text-neutral-slate/80">Secure analytics dashboard & real-time insights.</p>
              </div>
            </div>

            <div className="bg-soft-white text-near-black rounded-2xl p-6 space-y-4 border border-muted-lavender shadow-xs group">
              <div className="aspect-[4/3] rounded-xl bg-warm-lavender overflow-hidden flex items-center justify-center relative">
                <div className="p-4 text-center">
                  <span className="text-xs font-mono text-deep-violet uppercase">E-Commerce</span>
                  <p className="text-lg font-editorial font-bold text-near-black">Aura Atelier</p>
                </div>
              </div>
              <div>
                <h4 className="text-base font-editorial font-bold">E-Commerce Store</h4>
                <p className="text-xs text-neutral-slate">Seamless shopping, instant payments & high conversion.</p>
              </div>
            </div>

            <div className="bg-soft-white text-near-black rounded-2xl p-6 space-y-4 border border-muted-lavender shadow-xs group">
              <div className="aspect-[4/3] rounded-xl bg-deep-violet/10 overflow-hidden flex items-center justify-center relative">
                <div className="p-4 text-center">
                  <span className="text-xs font-mono text-deep-violet uppercase">Interactive Web</span>
                  <p className="text-lg font-editorial font-bold text-near-black">Verve Studio</p>
                </div>
              </div>
              <div>
                <h4 className="text-base font-editorial font-bold">Creative Studio Web App</h4>
                <p className="text-xs text-neutral-slate">Interactive GSAP animations & editorial layout.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* 02 VIDEO EDITING SHOWCASE */}
      <Container>
        <div className="bg-soft-white rounded-3xl p-8 sm:p-12 border border-muted-lavender/60 space-y-12 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-mono uppercase text-deep-violet tracking-widest">02 / VIDEO EDITING</span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-editorial font-bold text-near-black">
                Stories That Engage. <span className="italic font-normal text-deep-violet">Edits That Inspire.</span>
              </h3>
              <p className="text-sm text-neutral-slate leading-relaxed">
                From brand films to short-form content, we craft visuals that connect, inspire, and convert.
              </p>
            </div>
            <div>
              <Link to={ROUTES.SERVICES.VIDEO_EDITING}>
                <Button variant="secondary" size="md" className="gap-2">
                  Explore Video Work <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden bg-near-black text-soft-white p-8 aspect-[16/9] flex flex-col justify-between group">
              <div className="flex items-center justify-between">
                <Badge variant="violet">Brand Film</Badge>
                <div className="w-10 h-10 rounded-full bg-soft-white/20 backdrop-blur-md flex items-center justify-center">
                  <Play className="w-4 h-4 fill-soft-white stroke-none" />
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-editorial font-bold">Cinematic Brand Documentary</h4>
                <p className="text-xs text-neutral-slate/70">Pacing, Color Grading & Custom Scoring</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-warm-lavender text-near-black p-8 aspect-[16/9] flex flex-col justify-between group border border-muted-lavender">
              <div className="flex items-center justify-between">
                <Badge variant="lavender">Commercial Edit</Badge>
                <div className="w-10 h-10 rounded-full bg-deep-violet text-soft-white flex items-center justify-center">
                  <Play className="w-4 h-4 fill-soft-white stroke-none" />
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-editorial font-bold">Product Experience Video</h4>
                <p className="text-xs text-neutral-slate">High-impact short-form storytelling</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* 03 AD CREATION & GROWTH SHOWCASE */}
      <Container>
        <div className="bg-warm-lavender/40 rounded-3xl p-8 sm:p-12 border border-muted-lavender/60 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-mono uppercase text-deep-violet tracking-widest">03 / AD CREATION & GROWTH</span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-editorial font-bold text-near-black">
                Create. Publish. Promote. <span className="italic font-normal text-deep-violet">All in One Place.</span>
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs font-mono bg-soft-white px-4 py-2 rounded-full border border-muted-lavender">
                <TrendingUp className="w-4 h-4 text-deep-violet" />
                <span>128K Total Reach</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
