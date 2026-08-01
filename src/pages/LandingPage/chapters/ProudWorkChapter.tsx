import React from 'react';
import { Container } from '../../../components/ui/Container';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { ArrowUpRight, Check, Play, ChevronLeft, ChevronRight, Instagram, Facebook } from 'lucide-react';

export const ProudWorkChapter: React.FC = () => {
  return (
    <section className="relative w-full bg-soft-white text-near-black py-20 md:py-28 space-y-24">
      {/* 01 WEB DEVELOPMENT SHOWCASE */}
      <Container>
        <div className="bg-warm-lavender/30 rounded-3xl p-6 sm:p-10 border border-muted-lavender/60 space-y-10 shadow-xs hover:shadow-xl hover:border-deep-violet/30 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-1.5">
                <span className="text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
                  01 / WEB DEVELOPMENT
                </span>
                <h3 className="text-3xl sm:text-4xl font-editorial font-bold text-near-black leading-tight">
                  Websites That Work.{' '}
                  <span className="italic font-normal text-deep-violet block">
                    Experiences That Convert.
                  </span>
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-neutral-slate leading-relaxed">
                We design and develop modern, responsive websites that load fast, rank better, and turn visitors into customers.
              </p>

              {/* Checklist */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-near-black pt-1">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Custom Websites
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Web Applications
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> E-commerce Solutions
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Performance Optimized
                </li>
              </ul>

              <div className="pt-2">
                <Link to={ROUTES.SERVICES.WEB_DEV}>
                  <Button variant="primary" size="md" className="gap-2 px-6 py-2.5 rounded-full hover:-translate-y-0.5 transition-transform">
                    View All Projects <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right 3D Laptop Artwork & Showcase Cards */}
            <div className="lg:col-span-6 space-y-5">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-muted-lavender/60 aspect-[16/10] group hover:scale-[1.01] transition-transform duration-500">
                <img src="/media/cap_web_laptop.jpg" alt="3D Laptop Web Application" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-mono uppercase text-neutral-slate">PREVIOUS PROJECTS</span>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 rounded-full border border-muted-lavender flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full border border-muted-lavender flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-near-black text-soft-white rounded-2xl p-4 space-y-2 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[16/10] rounded-xl bg-deep-violet/40 p-3 flex flex-col justify-between">
                    <Badge variant="violet" className="self-start text-[10px]">Web Application</Badge>
                    <p className="text-xs font-editorial font-bold">Lumina Financial</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-editorial font-bold">Fintech Platform</h4>
                    <p className="text-[10px] text-neutral-slate/70">Real-time analytics dashboard</p>
                  </div>
                </div>

                <div className="bg-soft-white text-near-black rounded-2xl p-4 space-y-2 border border-muted-lavender hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[16/10] rounded-xl bg-warm-lavender p-3 flex flex-col justify-between">
                    <Badge variant="lavender" className="self-start text-[10px]">Website Design</Badge>
                    <p className="text-xs font-editorial font-bold text-near-black">Aura Atelier</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-editorial font-bold">E-Commerce Storefront</h4>
                    <p className="text-[10px] text-neutral-slate">Modern online shopping</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* 03 VIDEO EDITING SHOWCASE */}
      <Container>
        <div className="bg-soft-white rounded-3xl p-6 sm:p-10 border border-muted-lavender/60 space-y-10 shadow-xs hover:shadow-xl hover:border-deep-violet/30 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column 3D Camera */}
            <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-muted-lavender/60 aspect-[16/10] group hover:scale-[1.01] transition-transform duration-500">
                <img src="/media/camera_studio_3d.jpg" alt="3D Studio Video Camera" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-mono uppercase text-neutral-slate">PREVIOUS PROJECTS</span>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 rounded-full border border-muted-lavender flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full border border-muted-lavender flex items-center justify-center text-near-black hover:bg-deep-violet hover:text-soft-white transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-near-black text-soft-white rounded-2xl p-4 space-y-2 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[16/10] rounded-xl bg-deep-violet/30 p-3 flex flex-col justify-between relative overflow-hidden">
                    <div className="w-7 h-7 rounded-full bg-soft-white/20 backdrop-blur-md flex items-center justify-center self-end">
                      <Play className="w-3 h-3 fill-soft-white stroke-none" />
                    </div>
                    <p className="text-[10px] font-mono text-muted-lavender">Cinematic Edit</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-editorial font-bold">Brand Film</h4>
                    <p className="text-[10px] text-neutral-slate/70">Documentary storytelling</p>
                  </div>
                </div>

                <div className="bg-warm-lavender text-near-black rounded-2xl p-4 space-y-2 border border-muted-lavender hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[16/10] rounded-xl bg-muted-lavender/50 p-3 flex flex-col justify-between relative overflow-hidden">
                    <div className="w-7 h-7 rounded-full bg-deep-violet text-soft-white flex items-center justify-center self-end">
                      <Play className="w-3 h-3 fill-soft-white stroke-none" />
                    </div>
                    <p className="text-[10px] font-mono text-deep-violet">Commercial Edit</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-editorial font-bold">Product Video</h4>
                    <p className="text-[10px] text-neutral-slate">High-impact short-form video</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Narrative Column */}
            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
              <div className="space-y-1.5">
                <span className="text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
                  03 / VIDEO EDITING
                </span>
                <h3 className="text-3xl sm:text-4xl font-editorial font-bold text-near-black leading-tight">
                  Stories That Engage.{' '}
                  <span className="italic font-normal text-deep-violet block">
                    Edits That Inspire.
                  </span>
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-neutral-slate leading-relaxed">
                From brand films to short-form content, we craft visuals that connect, inspire, and convert.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-near-black pt-1">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Cinematic Storytelling
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Short-form & Reels
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Color Grading
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Sound Design
                </li>
              </ul>

              <div className="pt-2">
                <Link to={ROUTES.SERVICES.VIDEO_EDITING}>
                  <Button variant="primary" size="md" className="gap-2 px-6 py-2.5 rounded-full hover:-translate-y-0.5 transition-transform">
                    View All Projects <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* 04 AD CREATION & DISTRIBUTION SHOWCASE */}
      <Container>
        <div className="bg-warm-lavender/30 rounded-3xl p-6 sm:p-10 border border-muted-lavender/60 space-y-10 shadow-xs hover:shadow-xl hover:border-deep-violet/30 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-1.5">
                <span className="text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
                  04 / AD CREATION & DISTRIBUTION
                </span>
                <h3 className="text-3xl sm:text-4xl font-editorial font-bold text-near-black leading-tight">
                  Create. Publish. Promote.{' '}
                  <span className="italic font-normal text-deep-violet block">
                    All in One Place.
                  </span>
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-neutral-slate leading-relaxed">
                We create high-performing ad videos and creatives, then publish and manage them across major platforms to maximize reach and ROI.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-near-black pt-1">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Ad Video Creation
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Meta (FB & IG) Ads
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Campaign Management
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Performance Tracking
                </li>
              </ul>

              <div className="pt-2 flex items-center gap-4">
                <Link to={ROUTES.SERVICES.AD_CREATION}>
                  <Button variant="primary" size="md" className="gap-2 px-6 py-2.5 rounded-full hover:-translate-y-0.5 transition-transform">
                    View All Projects <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
                <div className="flex items-center gap-2 text-deep-violet">
                  <Facebook className="w-5 h-5 fill-deep-violet stroke-none" />
                  <Instagram className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Right Artwork & Analytics Cards */}
            <div className="lg:col-span-6 space-y-5">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-muted-lavender/60 aspect-[16/10] group hover:scale-[1.01] transition-transform duration-500">
                <img src="/media/cap_ads_phone.jpg" alt="3D Smartphone Ad Creation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-soft-white rounded-2xl p-4 border border-muted-lavender space-y-2 hover:-translate-y-1 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-slate">
                    <span>Instagram Campaign</span>
                    <Instagram className="w-4 h-4 text-deep-violet" />
                  </div>
                  <div className="flex justify-between pt-1">
                    <div>
                      <span className="text-[10px] text-neutral-slate uppercase">Reach</span>
                      <p className="text-lg font-editorial font-bold text-near-black">128K</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-slate uppercase">Conversions</span>
                      <p className="text-lg font-editorial font-bold text-deep-violet">3.2K</p>
                    </div>
                  </div>
                </div>

                <div className="bg-soft-white rounded-2xl p-4 border border-muted-lavender space-y-2 hover:-translate-y-1 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-slate">
                    <span>Facebook Campaign</span>
                    <Facebook className="w-4 h-4 text-deep-violet fill-deep-violet stroke-none" />
                  </div>
                  <div className="flex justify-between pt-1">
                    <div>
                      <span className="text-[10px] text-neutral-slate uppercase">Reach</span>
                      <p className="text-lg font-editorial font-bold text-near-black">215K</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-slate uppercase">Conversions</span>
                      <p className="text-lg font-editorial font-bold text-deep-violet">5.7K</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* 05 PAID PROMOTIONS & COLLABORATIONS SHOWCASE */}
      <Container>
        <div className="bg-soft-white rounded-3xl p-6 sm:p-10 border border-muted-lavender/60 space-y-10 shadow-xs hover:shadow-xl hover:border-deep-violet/30 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Collab Cards */}
            <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-muted-lavender/60 aspect-[16/10] group hover:scale-[1.01] transition-transform duration-500">
                <img src="/media/cap_promo_megaphone.jpg" alt="3D Megaphone Paid Promotions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-warm-lavender rounded-2xl p-4 border border-muted-lavender space-y-1.5 hover:-translate-y-1 hover:shadow-lg transition-all">
                  <Badge variant="lavender" className="text-[10px]">Instagram Collaboration</Badge>
                  <h4 className="text-sm font-editorial font-bold text-near-black pt-1">Fashion Brand x Creator</h4>
                  <p className="text-[10px] text-neutral-slate">Targeted creator outreach & growth</p>
                </div>

                <div className="bg-warm-lavender rounded-2xl p-4 border border-muted-lavender space-y-1.5 hover:-translate-y-1 hover:shadow-lg transition-all">
                  <Badge variant="lavender" className="text-[10px]">YouTube Collaboration</Badge>
                  <h4 className="text-sm font-editorial font-bold text-near-black pt-1">Skincare Brand x Influencer</h4>
                  <p className="text-[10px] text-neutral-slate">Authentic product integration</p>
                </div>
              </div>
            </div>

            {/* Right Narrative Column */}
            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
              <div className="space-y-1.5">
                <span className="text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
                  05 / PAID PROMOTIONS & COLLABORATIONS
                </span>
                <h3 className="text-3xl sm:text-4xl font-editorial font-bold text-near-black leading-tight">
                  Right Creators.{' '}
                  <span className="italic font-normal text-deep-violet block">
                    Real Impact.
                  </span>
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-neutral-slate leading-relaxed">
                We connect your brand with the right influencers and creators to promote your products and deliver meaningful results.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-near-black pt-1">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Influencer Research
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Campaign Management
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Content Approval
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-deep-violet stroke-[2.5]" /> Performance Tracking
                </li>
              </ul>

              <div className="pt-2">
                <Link to={ROUTES.SERVICES.PAID_PROMOTIONS}>
                  <Button variant="primary" size="md" className="gap-2 px-6 py-2.5 rounded-full hover:-translate-y-0.5 transition-transform">
                    View All Campaigns <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
