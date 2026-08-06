import React, { useState, useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { Link } from 'react-router-dom';
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
  Eye,
  Tv,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { scrollRevealCards } from '../../../animations/reveal';
import { submitContactInquiry } from '../../../api/contact';

export const VideoEditingPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFormat, setActiveFormat] = useState<'brand' | 'ad' | 'reel'>('brand');
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

  const formatShowcases = {
    brand: {
      title: 'Echoes of Tomorrow — Brand Documentary Film',
      subtitle: 'Cinematic Documentary & Brand Film',
      story: 'Crafted for a luxury architectural studio. We wove raw behind-the-scenes footage into an emotional, high-end documentary film with custom audio scoring.',
      highlights: ['Cinematic Pacing', 'Custom Sound Design', 'Rich Color Grading'],
      image: '/media/cap_video_natural.jpg',
      badge: '4K DOCUMENTARY',
    },
    ad: {
      title: 'Aura Silk — Commercial Product Video',
      subtitle: 'Commercial & High-Impact Ad Video',
      story: 'Created for a premium consumer product launch. Fast-paced visual cuts and color-graded detail shots engineered to capture attention on TV and web.',
      highlights: ['Attention-Grabbing Hook', 'Vibrant Color Grading', 'Commercial Master Export'],
      image: '/media/photo_sketch_natural.jpg',
      badge: 'COMMERCIAL AD',
    },
    reel: {
      title: 'PULSE Tech — Short-Form Social Reels',
      subtitle: '9:16 Vertical Video Reels & Shorts',
      story: 'Built for high mobile audience retention on Instagram Reels and TikTok. Features dynamic kinetic captions, sound effects, and seamless loop cuts.',
      highlights: ['9:16 Mobile Format', 'Kinetic Text Captions', 'High Viewer Retention'],
      image: '/media/cap_promo_natural.jpg',
      badge: '9:16 REELS',
    },
  };

  return (
    <main ref={containerRef} className="w-full bg-soft-white text-near-black pt-28 sm:pt-32 pb-20 md:pb-28 overflow-hidden">
      {/* 1. HERO STORY CHAPTER WITH CINEMATIC LIGHTING GLOW */}
      <section className="relative w-full pb-16 sm:pb-24">
        {/* Ambient Lighting Gradient Backdrop */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-deep-violet/15 via-purple-400/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <Badge variant="violet" className="px-3.5 py-1 text-xs shadow-xs">
                VIDEO EDITING & POST-PRODUCTION
              </Badge>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-bold text-near-black tracking-tight leading-[1.08]">
                In a world full of noise, <br />
                <span className="italic font-normal text-deep-violet">stories move people.</span>
              </h1>

              <p className="card-body-text max-w-xl text-xs sm:text-sm md:text-base leading-relaxed">
                Great video editing is not just cutting clips—it is about rhythm, emotion, and clarity. We take raw footage and transform it into captivating brand films, commercial ads, and high-retention short-form reels.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a href="#video-start-form" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto justify-center gap-2.5 px-7 py-3.5 rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all">
                    Start Your Video Project <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <Link to={ROUTES.WORK.ROOT} className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto justify-center gap-2 px-7 py-3.5 rounded-full border border-muted-lavender bg-warm-lavender/60 hover:bg-warm-lavender hover:-translate-y-0.5 transition-all">
                    Watch Featured Edits <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Graphic Video Studio Timeline Frame */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-near-black/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 shadow-2xl border border-muted-lavender/40 space-y-3 hover:border-deep-violet/40 transition-colors">
                {/* Timeline Header */}
                <div className="flex items-center justify-between px-2 pb-2 border-b border-soft-white/10">
                  <div className="flex items-center gap-2 text-soft-white/80 font-mono text-[10px]">
                    <Film className="w-3.5 h-3.5 text-deep-violet" />
                    <span>TIMELINE 01 / 4K MASTER</span>
                  </div>
                  <span className="text-[10px] font-mono text-muted-lavender font-bold">00:01:24:12</span>
                </div>

                {/* Video Play Container */}
                <div className="rounded-xl overflow-hidden aspect-[4/3] relative group border border-soft-white/10">
                  <img
                    src="/media/cap_video_natural.jpg"
                    alt="Video Post Production Studio"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-near-black/40 backdrop-blur-[2px] flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-soft-white/90 shadow-2xl flex items-center justify-center text-deep-violet group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-deep-violet stroke-none ml-1" />
                    </div>
                  </div>
                </div>

                {/* Simulated Audio Track Meters */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-[9px] font-mono text-soft-white/60">
                    <span>AUDIO TRACK 01 / STEREO MIX</span>
                    <span className="text-deep-violet font-bold">-12 dB</span>
                  </div>
                  <div className="h-2 w-full bg-soft-white/10 rounded-full overflow-hidden flex gap-1 p-0.5">
                    <div className="h-full bg-deep-violet w-3/4 rounded-full" />
                    <div className="h-full bg-purple-400 w-1/4 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. OUR EDITING PHILOSOPHY */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-warm-lavender/40 via-warm-lavender/20 to-soft-white border-y border-muted-lavender/40">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
                POST-PRODUCTION SPECS
              </span>
              <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black leading-tight">
                Crafting Videos That Keep <br />
                <span className="italic font-normal text-deep-violet">Viewers Watching.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <p className="card-body-text text-xs sm:text-sm md:text-base leading-relaxed">
                Whether you need a 30-second commercial ad or a full documentary, we structure every video with strong visual hooks, clean transitions, immersive sound design, and vibrant color grading.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
            <div className="video-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-2xl hover:border-deep-violet/40 hover:-translate-y-1 transition-all space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-warm-lavender text-deep-violet flex items-center justify-center shadow-inner">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">First 3-Second Hook</h3>
              <p className="card-body-text text-xs">
                We craft immediate visual hooks so viewers stop scrolling and watch until the end.
              </p>
            </div>

            <div className="video-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-2xl hover:border-deep-violet/40 hover:-translate-y-1 transition-all space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-warm-lavender text-deep-violet flex items-center justify-center shadow-inner">
                <Scissors className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Seamless Pacing</h3>
              <p className="card-body-text text-xs">
                Rhythmic cutting that keeps the narrative moving forward without feeling rushed.
              </p>
            </div>

            <div className="video-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-2xl hover:border-deep-violet/40 hover:-translate-y-1 transition-all space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-warm-lavender text-deep-violet flex items-center justify-center shadow-inner">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Color Grading</h3>
              <p className="card-body-text text-xs">
                Professional color correction that gives your footage a cinematic, high-budget look.
              </p>
            </div>

            <div className="video-reveal bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-2xl hover:border-deep-violet/40 hover:-translate-y-1 transition-all space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-warm-lavender text-deep-violet flex items-center justify-center shadow-inner">
                <Music className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-near-black">Custom Sound Design</h3>
              <p className="card-body-text text-xs">
                Immersive audio mixing, crisp voiceovers, and licensed background music.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. VISUAL SHOWCASE */}
      <section className="py-16 sm:py-24">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
              THE WORK SPEAKS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-near-black">
              Featured Video Formats
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 pb-8 border-b border-muted-lavender/40">
            <button
              onClick={() => setActiveFormat('brand')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeFormat === 'brand'
                  ? 'bg-deep-violet text-soft-white shadow-md'
                  : 'bg-warm-lavender/60 text-near-black hover:bg-warm-lavender'
              }`}
            >
              Brand Documentary Film
            </button>
            <button
              onClick={() => setActiveFormat('ad')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeFormat === 'ad'
                  ? 'bg-deep-violet text-soft-white shadow-md'
                  : 'bg-warm-lavender/60 text-near-black hover:bg-warm-lavender'
              }`}
            >
              Commercial Ad Video
            </button>
            <button
              onClick={() => setActiveFormat('reel')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeFormat === 'reel'
                  ? 'bg-deep-violet text-soft-white shadow-md'
                  : 'bg-warm-lavender/60 text-near-black hover:bg-warm-lavender'
              }`}
            >
              9:16 Social Reels & Shorts
            </button>
          </div>

          <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <Badge variant="violet" className="text-[10px]">
                {formatShowcases[activeFormat].subtitle}
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-near-black">
                {formatShowcases[activeFormat].title}
              </h3>
              <p className="card-body-text text-xs sm:text-sm leading-relaxed">
                {formatShowcases[activeFormat].story}
              </p>

              <div className="pt-4 space-y-2 border-t border-muted-lavender/40">
                {formatShowcases[activeFormat].highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-xs font-semibold text-near-black">
                    <CheckCircle2 className="w-4 h-4 text-deep-violet shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-muted-lavender/60 w-full aspect-[16/10] relative group">
                <img
                  src={formatShowcases[activeFormat].image}
                  alt={formatShowcases[activeFormat].title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-near-black/30 backdrop-blur-[2px] flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-soft-white/90 shadow-2xl flex items-center justify-center text-deep-violet group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-deep-violet stroke-none ml-1" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-deep-violet/90 backdrop-blur-md text-[10px] font-mono font-bold text-soft-white">
                  {formatShowcases[activeFormat].badge}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. POST-PRODUCTION TOOLING MATRIX */}
      <section className="py-16 sm:py-20 bg-warm-lavender/30 border-t border-muted-lavender/40">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
              POST-PRODUCTION SUITE
            </span>
            <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
              Pro Studio Editing Software
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-4 rounded-2xl bg-soft-white border border-muted-lavender/60 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-deep-violet text-soft-white mx-auto flex items-center justify-center">
                <Sliders className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">DaVinci Resolve</h4>
              <p className="card-body-text text-[10px]">Color & Mastering</p>
            </div>

            <div className="p-4 rounded-2xl bg-soft-white border border-muted-lavender/60 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-deep-violet text-soft-white mx-auto flex items-center justify-center">
                <Scissors className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">Premiere Pro</h4>
              <p className="card-body-text text-[10px]">Timeline Cuts</p>
            </div>

            <div className="p-4 rounded-2xl bg-soft-white border border-muted-lavender/60 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-deep-violet text-soft-white mx-auto flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">After Effects</h4>
              <p className="card-body-text text-[10px]">Motion VFX</p>
            </div>

            <div className="p-4 rounded-2xl bg-soft-white border border-muted-lavender/60 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-deep-violet text-soft-white mx-auto flex items-center justify-center">
                <Music className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">Logic Pro X</h4>
              <p className="card-body-text text-[10px]">Sound Design</p>
            </div>

            <div className="p-4 rounded-2xl bg-soft-white border border-muted-lavender/60 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-deep-violet text-soft-white mx-auto flex items-center justify-center">
                <Film className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">Cinema 4D</h4>
              <p className="card-body-text text-[10px]">3D Motion Titles</p>
            </div>

            <div className="p-4 rounded-2xl bg-soft-white border border-muted-lavender/60 text-center space-y-2 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-lg bg-deep-violet text-soft-white mx-auto flex items-center justify-center">
                <Tv className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-near-black font-sans">4K Broadcast</h4>
              <p className="card-body-text text-[10px]">Rec.709 Master</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. SIMPLE 3-STEP PROCESS */}
      <section className="py-16 sm:py-20 bg-soft-white border-t border-muted-lavender/40">
        <Container size="large" className="max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
              SIMPLE 3-STEP PROCESS
            </span>
            <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-near-black">
              How Video Editing Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-warm-lavender/30 rounded-2xl p-6 border border-muted-lavender/60 space-y-3 hover:-translate-y-1 transition-all">
              <span className="text-xs font-mono text-deep-violet font-bold">STEP 01</span>
              <h3 className="text-xl font-editorial font-bold">Share Raw Footage</h3>
              <p className="card-body-text text-xs">
                Upload your raw video files or shoot scripts. We review your footage and outline the story rhythm.
              </p>
            </div>

            <div className="bg-warm-lavender/30 rounded-2xl p-6 border border-muted-lavender/60 space-y-3 hover:-translate-y-1 transition-all">
              <span className="text-xs font-mono text-deep-violet font-bold">STEP 02</span>
              <h3 className="text-xl font-editorial font-bold">Craft & Polish Cut</h3>
              <p className="card-body-text text-xs">
                We perform precise cuts, add kinetic captions, grade the color, and layer custom background music.
              </p>
            </div>

            <div className="bg-warm-lavender/30 rounded-2xl p-6 border border-muted-lavender/60 space-y-3 hover:-translate-y-1 transition-all">
              <span className="text-xs font-mono text-deep-violet font-bold">STEP 03</span>
              <h3 className="text-xl font-editorial font-bold">Review & Master Export</h3>
              <p className="card-body-text text-xs">
                You review the draft online, we incorporate your feedback, and deliver 4K master files ready for posting.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. INQUIRY FORM */}
      <section id="video-start-form" className="py-16 sm:py-24 bg-warm-lavender/40 border-t border-muted-lavender/50">
        <Container size="large" className="max-w-4xl px-6 sm:px-10">
          <div className="bg-soft-white rounded-3xl p-6 sm:p-10 border border-muted-lavender/80 shadow-xl space-y-6">
            <div className="text-center space-y-2">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
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
                <Sparkles className="w-12 h-12 text-deep-violet mx-auto" />
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
                  placeholder="Describe your video editing needs (brand film, reels, commercial, etc.) *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-warm-lavender/30 border border-muted-lavender text-xs focus:ring-2 focus:ring-deep-violet/30 resize-none"
                />
                <Button type="submit" variant="primary" disabled={loading} className="w-full justify-center py-3.5 rounded-full shadow-md">
                  {loading ? 'Sending Inquiry...' : 'Send Video Editing Message'}
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
