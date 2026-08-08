import React, { useState, useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { Badge } from '../../../components/ui/Badge';
import { Link as RouterLink } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import {
  Film,
  Play,
  Music,
  Sliders,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Scissors,
  Tv,
  ChevronLeft,
  ChevronRight,
  Volume2,
  Layers,
  UploadCloud,
  FileCheck,
  Activity,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { scrollRevealCards } from '../../../animations/reveal';
import { submitContactInquiry } from '../../../api/contact';

export const VideoEditingPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    serviceInterest: 'video-editing',
    message: '',
  });

  useGSAP(() => {
    const revealEls = containerRef.current?.querySelectorAll('.video-reveal');
    if (revealEls && revealEls.length > 0 && containerRef.current) {
      scrollRevealCards(revealEls, containerRef.current, { stagger: 0.08, duration: 0.5 });
    }
  }, { scope: containerRef });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await submitContactInquiry(formData);
    setLoading(false);
    if (res.success) {
      setSubmitted(true);
    }
  };

  const videoProjects = [
    {
      id: 1,
      category: 'Brand Documentary Film',
      title: 'Echoes of Tomorrow — Brand Documentary',
      subtitle: 'Cinematic Brand Storytelling & Documentary Master',
      story: 'Crafted for an international architectural studio. Our video editors wove raw behind-the-scenes footage into an emotional 4K documentary film with spatial audio scoring and rich color grading.',
      highlights: ['4K DCI Mastering', 'Custom Spatial Audio Scoring', 'HDR DaVinci Color Grading'],
      image: '/media/cap_video_editing.jpg',
      badge: '4K BRAND FILM',
    },
    {
      id: 2,
      category: 'Commercial Ad Video',
      title: 'Aura Silk — Commercial Product Video',
      subtitle: 'Commercial Broadcast & High-Impact Ad Video',
      story: 'Created for a luxury consumer launch. Fast-paced visual cuts and color-graded detail macro shots filmed by our studio directors to capture high attention across TV, Web, and Social.',
      highlights: ['Attention-Grabbing Visual Hook', 'Commercial Color Master Export', 'Multi-Ratio Asset Delivery'],
      image: '/media/camera_studio_3d.jpg',
      badge: 'COMMERCIAL AD',
    },
    {
      id: 3,
      category: '9:16 Social Reels & Shorts',
      title: 'PULSE Tech — Short-Form Social Reels',
      subtitle: '9:16 Vertical Reels, Shorts & TikTok Series',
      story: 'Built for high mobile audience retention on Instagram Reels and TikTok. Edited by our short-form specialists with dynamic kinetic captions and sound effects.',
      highlights: ['9:16 Vertical Mobile Master', 'Kinetic Text Caption Design', 'High Viewer Retention Rate'],
      image: '/media/cap_ads_phone.jpg',
      badge: '9:16 SOCIAL REELS',
    },
    {
      id: 4,
      category: 'Artisan Craftsman Film',
      title: 'Horizon Studio — Artisan Craftsman Film',
      subtitle: 'Editorial Brand Portrait & Artisan Showcase',
      story: 'Documenting the handmade process of custom furniture artisans. Filmed on location with acoustic ambient audio, slow cinematic motion, and tactile color depth.',
      highlights: ['Tactile Color Palette', 'Acoustic Sound Mixing', 'Editorial Narrative Arc'],
      image: '/media/contact_agency_studio.jpg',
      badge: 'ARTISAN DOCUMENTARY',
    },
    {
      id: 5,
      category: 'Motion Graphics Title Suite',
      title: 'Krona VFX Motion Titles',
      subtitle: 'Kinetic Motion Graphics & Visual Effects',
      story: 'Designed high-end 3D motion titles and kinetic broadcast graphics by our VFX artists for a tech launch keynote presentation.',
      highlights: ['3D Kinetic Title Rendering', 'Broadcast VFX Compositing', 'Dynamic Lower Thirds'],
      image: '/media/hero_digital_agency_3d.jpg',
      badge: 'VFX MOTION SUITE',
    },
  ];

  const totalProjects = videoProjects.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalProjects);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  const activeProject = videoProjects[activeIndex];

  return (
    <main ref={containerRef} className="w-full bg-soft-white text-near-black pt-28 sm:pt-32 pb-20 md:pb-28 overflow-hidden">
      {/* 1. HERO STORY CHAPTER WITH LAYERED 4K TIMELINE STUDIO MOCKUP */}
      <section className="relative w-full pb-16 sm:pb-24">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-slate-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-5 sm:space-y-6 video-reveal w-full">
              <Badge variant="violet" className="px-3.5 py-1 text-xs shadow-xs bg-near-black text-soft-white border-transparent">
                VIDEO EDITING & POST PRODUCTION
              </Badge>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-bold text-near-black tracking-tight leading-[1.08]">
                Every frame should tell a story. <br />
                <span className="italic font-normal text-slate-700">And keep viewers watching.</span>
              </h1>

              <p className="card-body-text max-w-xl text-xs sm:text-sm md:text-base leading-relaxed">
                Great video editing is not just cutting clips—it is about rhythm, emotion, and clarity. We take raw footage and transform it into captivating brand films, commercial ads, and high-retention short-form reels.
              </p>

              {/* Desktop Only Buttons */}
              <div className="hidden lg:flex flex-wrap items-center gap-3 pt-2">
                <a href="#video-start-form" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-near-black text-soft-white font-medium text-sm shadow-md hover:bg-slate-800 hover:-translate-y-0.5 transition-all cursor-pointer">
                    Start Your Video Project <ArrowRight className="w-4 h-4" />
                  </button>
                </a>
                <RouterLink to={ROUTES.WORK.ROOT} className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-slate-200 bg-slate-100 text-near-black font-medium text-sm hover:bg-slate-200 hover:-translate-y-0.5 transition-all cursor-pointer">
                    Watch Featured Edits <ArrowUpRight className="w-4 h-4" />
                  </button>
                </RouterLink>
              </div>
            </div>

            {/* 3D MULTI-LAYERED VIDEO EDITING SUITE MOCKUP (IMAGE) */}
            <div className="lg:col-span-6 w-full relative">
              <div className="bg-near-black/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-2xl border border-slate-800 space-y-3 relative">
                <div className="flex items-center justify-between px-2 pb-2 border-b border-soft-white/10">
                  <div className="flex items-center gap-2 text-soft-white/80 font-mono text-[10px]">
                    <Film className="w-3.5 h-3.5 text-soft-white" />
                    <span>TIMELINE 01 / 4K MASTER</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-soft-white font-bold bg-soft-white/10 px-2 py-0.5 rounded">DaVinci HDR</span>
                    <span className="text-[10px] font-mono text-soft-white/60">00:01:24:12</span>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden aspect-[16/10] relative group border border-soft-white/10">
                  <img
                    src="/media/cap_video_editing.jpg"
                    alt="Pro Video Post Production Editor at Workstation"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-near-black/30 backdrop-blur-[1px] flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-soft-white/95 shadow-2xl flex items-center justify-center text-near-black group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-near-black stroke-none ml-1" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 pt-1 font-mono text-[9px]">
                  <div className="flex items-center justify-between text-soft-white/60">
                    <span className="flex items-center gap-1"><Layers className="w-3 h-3 text-soft-white" /> V1: 4K DCI COLOR CUT</span>
                    <span className="text-soft-white font-bold">24 FPS</span>
                  </div>
                  <div className="h-2.5 w-full bg-soft-white/10 rounded-full overflow-hidden flex gap-1 p-0.5">
                    <div className="h-full bg-slate-300 w-2/5 rounded-full" />
                    <div className="h-full bg-slate-400 w-2/5 rounded-full" />
                    <div className="h-full bg-slate-500 w-1/5 rounded-full" />
                  </div>
                  <div className="flex items-center justify-between text-soft-white/60 pt-0.5">
                    <span className="flex items-center gap-1"><Volume2 className="w-3 h-3 text-green-400" /> A1: SPATIAL AUDIO MIX</span>
                    <span className="text-green-400 font-bold">-12 dB</span>
                  </div>
                </div>

                <div className="absolute -left-3 sm:-left-6 bottom-6 w-32 sm:w-40 bg-near-black p-2 rounded-2xl shadow-2xl border-2 border-soft-white/80 z-20 animate-bounce-slow">
                  <div className="rounded-xl overflow-hidden aspect-[9/16] relative border border-soft-white/10">
                    <img
                      src="/media/cap_ads_phone.jpg"
                      alt="9:16 Vertical Reel"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-near-black text-[8px] text-soft-white font-mono font-bold border border-soft-white/20">
                      9:16 REEL
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-2 sm:-right-4 bg-near-black text-soft-white px-4 py-2.5 rounded-2xl shadow-xl border border-soft-white/40 flex items-center gap-2 z-20 animate-pulse-slow">
                  <div className="w-7 h-7 rounded-xl bg-soft-white/20 flex items-center justify-center font-bold font-mono text-xs">
                    4K
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] font-mono text-soft-white/70 block uppercase">Rec.709 Master</span>
                    <span className="text-xs font-bold font-editorial">Cinema DCI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Only Buttons (Placed BELOW the Image on Mobile Screens) */}
            <div className="block lg:hidden w-full space-y-3 pt-8 mt-4 z-30 relative">
              <a href="#video-start-form" className="w-full block">
                <button className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-near-black text-soft-white font-medium text-sm shadow-md hover:bg-slate-800 transition-all cursor-pointer">
                  Start Your Video Project <ArrowRight className="w-4 h-4" />
                </button>
              </a>
              <RouterLink to={ROUTES.WORK.ROOT} className="w-full block">
                <button className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-slate-200 bg-slate-100 text-near-black font-medium text-sm hover:bg-slate-200 transition-all cursor-pointer">
                  Watch Featured Edits <ArrowUpRight className="w-4 h-4" />
                </button>
              </RouterLink>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. OUR EDITING PHILOSOPHY CARDS WITH DEDICATED VISUAL GRAPHICS */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-100/60 via-slate-50 to-soft-white border-y border-slate-200">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-near-black tracking-widest font-semibold">
                POST-PRODUCTION SPECS
              </span>
              <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black leading-tight">
                Crafting Videos That Keep <br />
                <span className="italic font-normal text-slate-700">Viewers Watching.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <p className="card-body-text text-xs sm:text-sm md:text-base leading-relaxed">
                Whether you need a 30-second commercial ad or a full documentary, we structure every video with strong visual hooks, clean transitions, immersive sound design, and vibrant color grading.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
            <div className="video-reveal bg-soft-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-2xl hover:border-near-black/40 hover:-translate-y-1 transition-all space-y-4">
              <div className="h-24 w-full rounded-xl bg-near-black/95 p-3 flex flex-col justify-between border border-soft-white/10 text-soft-white">
                <div className="flex items-center justify-between text-[9px] font-mono text-soft-white/80">
                  <span>RETENTION GRAPH</span>
                  <Activity className="w-3.5 h-3.5 text-green-400" />
                </div>
                <div className="flex items-end justify-between gap-1 h-10 pt-2">
                  <div className="w-full h-full bg-slate-300 rounded-t" />
                  <div className="w-full h-[90%] bg-slate-400 rounded-t" />
                  <div className="w-full h-[85%] bg-slate-500 rounded-t" />
                  <div className="w-full h-[82%] bg-slate-600 rounded-t" />
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-editorial font-bold text-near-black">First 3-Second Hook</h3>
                <p className="card-body-text text-xs">
                  We craft immediate visual hooks so viewers stop scrolling and watch until the end.
                </p>
              </div>
            </div>

            <div className="video-reveal bg-soft-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-2xl hover:border-near-black/40 hover:-translate-y-1 transition-all space-y-4">
              <div className="h-24 w-full rounded-xl bg-slate-100 p-3 flex flex-col justify-between border border-slate-200 relative">
                <div className="flex items-center justify-between text-[9px] font-mono text-near-black font-bold">
                  <span>RHYTHMIC CUT TIMELINE</span>
                  <Scissors className="w-3.5 h-3.5 text-near-black" />
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-6 w-1/3 bg-near-black rounded text-[8px] font-mono text-soft-white flex items-center justify-center">Cut A</div>
                  <div className="h-6 w-1/3 bg-slate-700 rounded text-[8px] font-mono text-soft-white flex items-center justify-center">Cut B</div>
                  <div className="h-6 w-1/3 bg-slate-400 rounded text-[8px] font-mono text-near-black flex items-center justify-center">Cut C</div>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-editorial font-bold text-near-black">Seamless Pacing</h3>
                <p className="card-body-text text-xs">
                  Rhythmic cutting that keeps the narrative moving forward without feeling rushed.
                </p>
              </div>
            </div>

            <div className="video-reveal bg-soft-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-2xl hover:border-near-black/40 hover:-translate-y-1 transition-all space-y-4">
              <div className="h-24 w-full rounded-xl bg-near-black/95 p-3 flex flex-col justify-between border border-soft-white/10">
                <div className="flex items-center justify-between text-[9px] font-mono text-soft-white/80">
                  <span>DAVINCI COLOR WHEEL</span>
                  <Sliders className="w-3.5 h-3.5 text-soft-white" />
                </div>
                <div className="flex items-center justify-around">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-red-500 via-yellow-400 to-green-500 shadow-xs" />
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-xs" />
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-teal-400 via-emerald-500 to-cyan-500 shadow-xs" />
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-editorial font-bold text-near-black">Color Grading</h3>
                <p className="card-body-text text-xs">
                  Professional color correction that gives your footage a cinematic, high-budget look.
                </p>
              </div>
            </div>

            <div className="video-reveal bg-soft-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-2xl hover:border-near-black/40 hover:-translate-y-1 transition-all space-y-4">
              <div className="h-24 w-full rounded-xl bg-soft-white border border-slate-200 p-3 flex flex-col justify-between shadow-xs">
                <div className="flex items-center justify-between text-[9px] font-mono text-near-black font-bold">
                  <span>STEREO AUDIO EQUALIZER</span>
                  <Volume2 className="w-3.5 h-3.5 text-near-black" />
                </div>
                <div className="flex items-end justify-between gap-1 h-10">
                  <div className="w-2 h-full bg-near-black rounded-full" />
                  <div className="w-2 h-1/2 bg-slate-600 rounded-full" />
                  <div className="w-2 h-3/4 bg-near-black rounded-full" />
                  <div className="w-2 h-2/3 bg-slate-400 rounded-full" />
                  <div className="w-2 h-full bg-green-500 rounded-full" />
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-editorial font-bold text-near-black">Custom Sound Design</h3>
                <p className="card-body-text text-xs">
                  Immersive audio mixing, crisp voiceovers, and licensed background music.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. MONUMENTAL SHOWCASE CARDBOX */}
      <section className="py-16 sm:py-24">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="w-full bg-soft-white rounded-3xl p-6 sm:p-12 lg:p-16 border border-slate-200 shadow-2xl space-y-8 relative overflow-hidden text-center">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-near-black tracking-widest font-semibold block">
                THE WORK SPEAKS
              </span>
              <h2 className="text-3xl sm:text-5xl font-editorial font-bold text-near-black tracking-tight">
                Featured Video Formats
              </h2>
            </div>

            <div className="relative w-full max-w-5xl mx-auto py-2">
              <button
                onClick={handlePrev}
                className="absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-soft-white/95 border border-slate-200 shadow-xl flex items-center justify-center text-near-black hover:bg-near-black hover:text-soft-white transition-all z-30 active:scale-95"
                aria-label="Previous Video Project Left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="w-full overflow-hidden px-8 sm:px-12 [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]">
                <div className="flex items-center justify-center gap-2.5 sm:gap-4 py-2 w-full">
                  {[-2, -1, 0, 1, 2].map((offset) => {
                    const projectIdx = (activeIndex + offset + totalProjects * 100) % totalProjects;
                    const proj = videoProjects[projectIdx];

                    const isCenter = offset === 0;
                    const isAdjacent = Math.abs(offset) === 1;

                    return (
                      <button
                        key={`${proj.id}-${offset}`}
                        onClick={() => setActiveIndex(projectIdx)}
                        className={`transition-all duration-500 rounded-full font-semibold text-xs whitespace-nowrap px-4 sm:px-6 py-2.5 shadow-sm border ${
                          isCenter
                            ? 'bg-near-black text-soft-white border-near-black scale-105 z-20 shadow-xl opacity-100'
                            : isAdjacent
                            ? 'bg-slate-100 text-near-black border-slate-200 scale-95 z-10 opacity-80 hover:opacity-100 hover:scale-100'
                            : 'bg-slate-50 text-near-black/70 border-slate-200/60 scale-90 z-0 opacity-45 blur-[0.5px] hover:opacity-75'
                        }`}
                      >
                        {proj.category}
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                onClick={handleNext}
                className="absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-soft-white/95 border border-slate-200 shadow-xl flex items-center justify-center text-near-black hover:bg-near-black hover:text-soft-white transition-all z-30 active:scale-95"
                aria-label="Next Video Project Right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div key={activeProject.id} className="pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left animate-fade-in transition-all duration-500">
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center justify-between">
                  <Badge variant="violet" className="text-[10px] bg-near-black text-soft-white border-transparent">
                    {activeProject.badge}
                  </Badge>
                  <span className="font-mono text-xs text-neutral-slate font-bold">
                    Project 0{activeIndex + 1} / 0{totalProjects}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
                    {activeProject.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-700 font-semibold uppercase tracking-wider">
                    {activeProject.subtitle}
                  </p>
                </div>

                <p className="card-body-text text-xs sm:text-sm leading-relaxed">
                  {activeProject.story}
                </p>

                <div className="pt-2 space-y-2.5 border-t border-slate-200">
                  {activeProject.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2.5 text-xs font-semibold text-near-black">
                      <CheckCircle2 className="w-4 h-4 text-near-black shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 w-full aspect-[16/10] relative group">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-near-black/30 backdrop-blur-[2px] flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-soft-white/90 shadow-2xl flex items-center justify-center text-near-black group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-near-black stroke-none ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-near-black/90 backdrop-blur-md text-[10px] font-mono font-bold text-soft-white border border-soft-white/20">
                    {activeProject.badge}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-slate-200 w-full text-center">
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-near-black hover:bg-near-black hover:text-soft-white transition-all shadow-md active:scale-95"
                  aria-label="Previous Video Project Bottom"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <span className="font-mono text-xs font-bold text-near-black px-4 py-2 rounded-full bg-slate-100 border border-slate-200">
                  Project 0{activeIndex + 1} / 0{totalProjects}
                </span>

                <button
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-near-black hover:bg-near-black hover:text-soft-white transition-all shadow-md active:scale-95"
                  aria-label="Next Video Project Bottom"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. POST-PRODUCTION TOOLING MATRIX */}
      <section className="py-16 sm:py-20 bg-slate-100/50 border-t border-slate-200">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-near-black tracking-widest font-semibold">
              POST-PRODUCTION SUITE
            </span>
            <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
              Pro Studio Editing Software
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-4 rounded-2xl bg-soft-white border border-slate-200 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-near-black text-soft-white mx-auto flex items-center justify-center">
                <Sliders className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">DaVinci Resolve</h4>
              <p className="card-body-text text-[10px]">Color & Mastering</p>
            </div>

            <div className="p-4 rounded-2xl bg-soft-white border border-slate-200 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-near-black text-soft-white mx-auto flex items-center justify-center">
                <Scissors className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">Premiere Pro</h4>
              <p className="card-body-text text-[10px]">Timeline Cuts</p>
            </div>

            <div className="p-4 rounded-2xl bg-soft-white border border-slate-200 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-near-black text-soft-white mx-auto flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">After Effects</h4>
              <p className="card-body-text text-[10px]">Motion VFX</p>
            </div>

            <div className="p-4 rounded-2xl bg-soft-white border border-slate-200 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-near-black text-soft-white mx-auto flex items-center justify-center">
                <Music className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">Logic Pro X</h4>
              <p className="card-body-text text-[10px]">Sound Design</p>
            </div>

            <div className="p-4 rounded-2xl bg-soft-white border border-slate-200 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-near-black text-soft-white mx-auto flex items-center justify-center">
                <Film className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">Cinema 4D</h4>
              <p className="card-body-text text-[10px]">3D Motion Titles</p>
            </div>

            <div className="p-4 rounded-2xl bg-soft-white border border-slate-200 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-near-black text-soft-white mx-auto flex items-center justify-center">
                <Tv className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">4K Broadcast</h4>
              <p className="card-body-text text-[10px]">Rec.709 Master</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. 3-STEP PROCESS WITH DEDICATED VISUAL GRAPHICS */}
      <section className="py-16 sm:py-20 bg-soft-white border-t border-slate-200">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-near-black tracking-widest font-semibold">
              SIMPLE 3-STEP PROCESS
            </span>
            <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
              How Video Editing Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4 hover:-translate-y-1 transition-all">
              <div className="h-32 w-full rounded-xl bg-soft-white border border-slate-200 p-3 space-y-2 relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-center justify-between text-[9px] font-mono text-near-black font-bold">
                  <span>CLOUD FOOTAGE DROP</span>
                  <UploadCloud className="w-3.5 h-3.5 text-near-black" />
                </div>
                <div className="p-2 rounded border border-dashed border-slate-300 bg-slate-100 text-center font-mono text-[9px] text-neutral-slate">
                  Drop RAW 4K ProRes Files
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-near-black font-bold">STEP 01</span>
                <h3 className="text-xl font-editorial font-bold">Share Raw Footage</h3>
                <p className="card-body-text text-xs">
                  Upload your raw video files or shoot scripts. We review your footage and outline the story rhythm.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4 hover:-translate-y-1 transition-all">
              <div className="h-32 w-full rounded-xl bg-near-black/95 p-3 space-y-2 text-soft-white relative overflow-hidden border border-soft-white/10 flex flex-col justify-between">
                <div className="flex items-center justify-between text-[9px] font-mono text-soft-white">
                  <span>TIMELINE COLOR CUT</span>
                  <Scissors className="w-3.5 h-3.5 text-soft-white" />
                </div>
                <div className="h-2 w-full bg-soft-white/10 rounded-full overflow-hidden flex gap-1 p-0.5">
                  <div className="h-full bg-slate-300 w-3/4 rounded-full" />
                  <div className="h-full bg-green-400 w-1/4 rounded-full" />
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-near-black font-bold">STEP 02</span>
                <h3 className="text-xl font-editorial font-bold">Craft & Polish Cut</h3>
                <p className="card-body-text text-xs">
                  We perform precise cuts, add kinetic captions, grade the color, and layer custom background music.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4 hover:-translate-y-1 transition-all">
              <div className="h-32 w-full rounded-xl bg-soft-white border border-slate-200 p-3 space-y-2 relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-center justify-between text-[9px] font-mono text-near-black font-bold">
                  <span>4K MASTER EXPORT</span>
                  <FileCheck className="w-3.5 h-3.5 text-green-600" />
                </div>
                <div className="p-2 rounded bg-slate-100 border border-slate-200 text-center font-mono text-[9px] font-bold text-near-black">
                  Rec.709 Cinema Ready
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-near-black font-bold">STEP 03</span>
                <h3 className="text-xl font-editorial font-bold">Review & Master Export</h3>
                <p className="card-body-text text-xs">
                  You review the draft online, we incorporate your feedback, and deliver 4K master files ready for posting.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. INQUIRY FORM */}
      <section id="video-start-form" className="py-16 sm:py-24 bg-slate-100/60 border-t border-slate-200">
        <Container size="large" className="max-w-4xl px-6 sm:px-10">
          <div className="bg-soft-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
            <div className="text-center space-y-2">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-near-black tracking-widest font-semibold">
                KICKSTART VIDEO PROJECT
              </span>
              <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
                Have Raw Footage or a Video Concept?
              </h2>
              <p className="card-body-text text-xs sm:text-sm max-w-lg mx-auto">
                Tell us about your video project. We reply within 24 hours with editing estimates and timeline proposals.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <Sparkles className="w-12 h-12 text-near-black mx-auto" />
                <h3 className="text-xl font-editorial font-bold">Inquiry Received</h3>
                <p className="card-body-text text-xs">We will review your video project details and contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-slate-900/20"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-slate-900/20"
                  />
                </div>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your video editing needs (brand film, reels, commercial, etc.) *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-slate-900/20 resize-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full justify-center py-3.5 rounded-full bg-near-black text-soft-white font-medium text-sm shadow-md hover:bg-slate-800 transition-all cursor-pointer"
                >
                  {loading ? 'Sending Inquiry...' : 'Send Video Editing Message'}
                </button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default VideoEditingPage;
