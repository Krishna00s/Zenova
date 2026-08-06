import React, { useState, useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import {
  Video,
  Film,
  Play,
  Music,
  Sliders,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Tv,
  Sparkles,
  Scissors,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { scrollRevealCards } from '../../../animations/reveal';
import { submitContactInquiry } from '../../../api/contact';

export const VideoEditingPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<'brand' | 'product' | 'reel'>('brand');
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

  const videoShowcases = {
    brand: {
      title: 'Echoes of Tomorrow — Brand Documentary Film',
      tag: 'Cinematic Documentary',
      description: 'A 4K cinematic documentary edit exploring the artisan craftsmanship behind modern architectural design. Features custom sound design, pacing, and HDR color grading.',
      specs: ['DaVinci Resolve Studio', '4K DCI Delivery', 'Spatial Audio Mixing'],
      image: '/media/cap_video_natural.jpg',
    },
    product: {
      title: 'Aura Silk — Luxury Product Commercial',
      tag: 'Commercial Advertisement',
      description: 'High-impact 30-second commercial edit designed for broadcast television and digital advertising, emphasizing fluid product motion and color vibrancy.',
      specs: ['Premiere Pro & After Effects', 'Macro Detail Pacing', 'Custom LUTs'],
      image: '/media/photo_sketch_natural.jpg',
    },
    reel: {
      title: 'PULSE Tech — Short-Form Social Reel Series',
      tag: 'Instagram Reels & TikTok',
      description: 'Dynamic 9:16 short-form video edit series crafted for mobile-first engagement with kinetic captions, sound effects, and fast hook cuts.',
      specs: ['9:16 Vertical Master', 'Kinetic Typography', 'High Retention Pacing'],
      image: '/media/cap_promo_natural.jpg',
    },
  };

  const editingSuite = [
    { name: 'DaVinci Resolve Studio', icon: Sliders, desc: 'Color Grading & Mastering' },
    { name: 'Adobe Premiere Pro', icon: Scissors, desc: 'Non-Linear Timeline Edit' },
    { name: 'Adobe After Effects', icon: Sparkles, desc: 'Motion Graphics & VFX' },
    { name: 'Logic Pro X', icon: Music, desc: 'Sound Design & Audio Mix' },
    { name: 'Cinema 4D Rendering', icon: Film, desc: '3D Titles & Visual Assets' },
    { name: 'HDR Broadcast Master', icon: Tv, desc: 'Rec.709 & DCI-P3 Output' },
  ];

  return (
    <main ref={containerRef} className="w-full bg-soft-white text-near-black pt-28 sm:pt-32 pb-20 md:pb-28">
      {/* 1. HERO CHAPTER */}
      <section className="relative w-full pb-16 sm:pb-20">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Headline */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <Badge variant="violet" className="px-3.5 py-1 text-xs">
                SERVICE VERTICAL / 02
              </Badge>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-bold text-near-black tracking-tight leading-[1.08]">
                Cinematic Storytelling & <br />
                <span className="italic font-normal text-deep-violet">High-Impact Post-Production.</span>
              </h1>
              <p className="card-body-text max-w-xl text-xs sm:text-sm md:text-base leading-relaxed">
                From brand documentaries to high-converting commercial edits and short-form video reels, we craft visuals that connect, inspire, and convert.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a href="#video-quote-form" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto justify-center gap-2.5 px-7 py-3.5 rounded-full shadow-md">
                    Start Video Project <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <Link to={ROUTES.WORK.ROOT} className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto justify-center gap-2 px-7 py-3.5 rounded-full border border-muted-lavender bg-warm-lavender/60">
                    Watch Showreel <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Widescreen Photo Frame */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-muted-lavender/60 w-full aspect-[4/3] group relative">
                <img
                  src="/media/cap_video_natural.jpg"
                  alt="Video Editing Post-Production Suite"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. CORE CAPABILITIES MATRIX */}
      <section className="py-16 sm:py-20 bg-warm-lavender/30 border-y border-muted-lavender/40">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
              POST-PRODUCTION CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
              Crafted Edits for Every Screen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="video-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <Film className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Brand Documentaries</h3>
              <p className="card-body-text text-xs">
                Cinematic story-driven brand films that build deep emotional trust with your audience.
              </p>
            </div>

            <div className="video-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Commercial Edits</h3>
              <p className="card-body-text text-xs">
                High-converting product videos, commercial ads, and broadcast promotional masters.
              </p>
            </div>

            <div className="video-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <Play className="w-5 h-5 fill-deep-violet stroke-none" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Short-Form & Reels</h3>
              <p className="card-body-text text-xs">
                Fast-paced 9:16 vertical video edits engineered for Instagram Reels, Shorts, & TikTok retention.
              </p>
            </div>

            <div className="video-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-xl hover:border-deep-violet/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Color & Sound Master</h3>
              <p className="card-body-text text-xs">
                Professional DaVinci Resolve color grading, noise reduction, and custom audio mixing.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. FEATURED VIDEO SHOWCASES WITH INTERACTIVE TABS */}
      <section className="py-16 sm:py-24">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
              FEATURED VIDEO PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-near-black">
              Selected Post-Production Work
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 pb-8 border-b border-muted-lavender/40">
            <button
              onClick={() => setActiveVideo('brand')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeVideo === 'brand'
                  ? 'bg-deep-violet text-soft-white shadow-md'
                  : 'bg-warm-lavender/60 text-near-black hover:bg-warm-lavender'
              }`}
            >
              Echoes of Tomorrow (Brand Film)
            </button>
            <button
              onClick={() => setActiveVideo('product')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeVideo === 'product'
                  ? 'bg-deep-violet text-soft-white shadow-md'
                  : 'bg-warm-lavender/60 text-near-black hover:bg-warm-lavender'
              }`}
            >
              Aura Silk (Commercial Edit)
            </button>
            <button
              onClick={() => setActiveVideo('reel')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeVideo === 'reel'
                  ? 'bg-deep-violet text-soft-white shadow-md'
                  : 'bg-warm-lavender/60 text-near-black hover:bg-warm-lavender'
              }`}
            >
              PULSE Tech (Social Reel Series)
            </button>
          </div>

          <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <Badge variant="violet" className="text-[10px]">
                {videoShowcases[activeVideo].tag}
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-near-black">
                {videoShowcases[activeVideo].title}
              </h3>
              <p className="card-body-text text-xs sm:text-sm">
                {videoShowcases[activeVideo].description}
              </p>

              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-muted-lavender/40">
                {videoShowcases[activeVideo].specs.map((s) => (
                  <div key={s} className="flex items-center gap-1.5 text-[11px] font-semibold text-near-black">
                    <CheckCircle2 className="w-3.5 h-3.5 text-deep-violet shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-muted-lavender/60 w-full aspect-[16/10] relative group">
                <img
                  src={videoShowcases[activeVideo].image}
                  alt={videoShowcases[activeVideo].title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-near-black/30 backdrop-blur-[2px] flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-soft-white/90 shadow-2xl flex items-center justify-center text-deep-violet group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-deep-violet stroke-none ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. POST-PRODUCTION SUITE MATRIX */}
      <section className="py-16 sm:py-20 bg-soft-white border-t border-muted-lavender/40">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
              STUDIO TOOLING
            </span>
            <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
              Professional Editing & Mastering Suite
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {editingSuite.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="p-4 rounded-2xl bg-warm-lavender/30 border border-muted-lavender/60 text-center space-y-2 hover:-translate-y-1 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-deep-violet text-soft-white mx-auto flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-near-black font-sans">{item.name}</h4>
                  <p className="card-body-text text-[10px]">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 5. PROJECT SCOPING FORM */}
      <section id="video-quote-form" className="py-16 sm:py-24 bg-warm-lavender/40 border-t border-muted-lavender/50">
        <Container size="large" className="max-w-4xl px-6 sm:px-10">
          <div className="bg-soft-white rounded-3xl p-6 sm:p-10 border border-muted-lavender/80 shadow-xl space-y-6">
            <div className="text-center space-y-2">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
                KICKSTART VIDEO PROJECT
              </span>
              <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
                Tell Us About Your Video Project
              </h2>
              <p className="card-body-text text-xs sm:text-sm max-w-lg mx-auto">
                Fill out this form and our post-production lead will respond within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-deep-violet mx-auto" />
                <h3 className="text-xl font-editorial font-bold">Request Received</h3>
                <p className="card-body-text text-xs">We will review your video assets and send a timeline proposal.</p>
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
                    className="w-full px-4 py-3 rounded-xl bg-warm-lavender/30 border border-muted-lavender text-xs focus:ring-2 focus:ring-deep-violet/30"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-warm-lavender/30 border border-muted-lavender text-xs focus:ring-2 focus:ring-deep-violet/30"
                  />
                </div>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your video editing or post-production needs *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-warm-lavender/30 border border-muted-lavender text-xs focus:ring-2 focus:ring-deep-violet/30 resize-none"
                />
                <Button type="submit" variant="primary" disabled={loading} className="w-full justify-center py-3.5 rounded-full">
                  {loading ? 'Submitting Proposal...' : 'Submit Video Post-Production Inquiry'}
                </Button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default VideoEditingPage;
