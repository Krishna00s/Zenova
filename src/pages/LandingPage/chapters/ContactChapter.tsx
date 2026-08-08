import React, { useState, useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { Button } from '../../../components/ui/Button';
import { Mail, Phone, ArrowUpRight, CheckCircle2, ChevronDown, Check } from 'lucide-react';
import { submitContactInquiry } from '../../../api/contact';
import { useGSAP } from '@gsap/react';
import { scrollRevealCards } from '../../../animations/reveal';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export const ContactChapter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    serviceInterest: 'web-development',
    message: '',
  });

  const [selectOpen, setSelectOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useGSAP(() => {
    const elements = containerRef.current?.querySelectorAll('.contact-reveal');
    if (elements && elements.length > 0 && containerRef.current) {
      scrollRevealCards(elements, containerRef.current, { stagger: 0.08, duration: 0.5 });
    }
  }, { scope: containerRef });

  const serviceOptions = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'video-editing', label: 'Video Editing & Production' },
    { value: 'ad-creation', label: 'Ad Creation & Distribution' },
    { value: 'paid-promotions', label: 'Paid Promotions & Influencers' },
    { value: 'other', label: 'Other / Full Digital Retainer' },
  ];

  const currentOptionLabel = serviceOptions.find(opt => opt.value === formData.serviceInterest)?.label || 'Select Service';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitContactInquiry(formData);
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        serviceInterest: 'web-development',
        message: '',
      });
    } catch (err) {
      console.error('Contact form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={containerRef} id="contact" className="relative w-full bg-soft-white text-near-black py-16 sm:py-20 md:py-28 overflow-hidden">
      <Container>
        {/* Top Split Layout: Narrative & Studio Photo (Left) + Contact Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Narrative Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left contact-reveal">
            <div className="space-y-3">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-near-black tracking-tight leading-[1.08]">
                Tell us what you're building.{' '}
                <span className="italic font-normal text-deep-violet block">
                  We'll handle the rest.
                </span>
              </h2>
              <p className="card-body-text text-xs sm:text-sm leading-relaxed">
                Whether you have a clear plan or just an idea, we'd love to hear about it. Fill out the form or reach out directly below.
              </p>
            </div>

            {/* Studio Architecture Image (Stretches so bottom edge aligns perfectly with bottom of form) */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-muted-lavender/60 w-full flex-1 min-h-[220px] sm:min-h-[260px] group hover:scale-[1.01] transition-transform duration-500 relative">
              <img src="/media/contact_studio_natural.jpg" alt="Zenova Agency Studio Architecture" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
          </div>

          {/* Right Glassmorphic Contact Form Column (Shifted further right) */}
          <div className="lg:col-span-6 lg:col-start-7 w-full contact-reveal flex flex-col">
            <div className="bg-soft-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-muted-lavender/80 shadow-xl space-y-5 h-full flex flex-col justify-between">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-warm-lavender text-deep-violet mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-near-black">Thank You!</h3>
                  <p className="card-body-text max-w-md mx-auto text-xs sm:text-sm">
                    We received your message. A member of our team will review your project and get back to you shortly.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase text-near-black font-semibold">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-warm-lavender/40 border border-muted-lavender text-xs text-near-black focus:outline-none focus:ring-2 focus:ring-deep-violet/30 hover:border-deep-violet/40 transition-all font-sans"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase text-near-black font-semibold">Your Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-warm-lavender/40 border border-muted-lavender text-xs text-near-black focus:outline-none focus:ring-2 focus:ring-deep-violet/30 hover:border-deep-violet/40 transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* CUSTOM PROFESSIONAL SELECT DROPDOWN */}
                  <div className="space-y-1.5 relative">
                    <label className="text-[10px] font-mono uppercase text-near-black font-semibold">What do you need help with? *</label>
                    <button
                      type="button"
                      onClick={() => setSelectOpen(!selectOpen)}
                      className="w-full px-4 py-3 rounded-xl bg-warm-lavender/40 border border-muted-lavender text-xs text-near-black flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-deep-violet/30 hover:border-deep-violet/40 transition-all font-sans cursor-pointer text-left shadow-xs"
                    >
                      <span className="font-medium text-near-black">{currentOptionLabel}</span>
                      <ChevronDown className={`w-4 h-4 text-deep-violet transition-transform duration-300 ${selectOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {selectOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-soft-white rounded-2xl border border-muted-lavender shadow-2xl p-2 z-40 space-y-1 animate-fade-in">
                        {serviceOptions.map((opt) => {
                          const isSelected = opt.value === formData.serviceInterest;
                          return (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, serviceInterest: opt.value });
                                setSelectOpen(false);
                              }}
                              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs text-left transition-colors font-sans cursor-pointer ${
                                isSelected
                                  ? 'bg-deep-violet text-soft-white font-semibold'
                                  : 'text-near-black hover:bg-warm-lavender/70 font-medium'
                              }`}
                            >
                              <span>{opt.label}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-soft-white" />}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase text-near-black font-semibold">Tell us a little more about your project *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us a little more about your project"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-warm-lavender/40 border border-muted-lavender text-xs text-near-black focus:outline-none focus:ring-2 focus:ring-deep-violet/30 hover:border-deep-violet/40 transition-all resize-none font-sans"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" disabled={loading} className="w-full justify-center gap-2 py-3.5 rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all">
                    {loading ? 'Sending Message...' : 'Send Message'} <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Unified Horizontal Row: All 3 Contact Cards (Gmail, WhatsApp, Phone) */}
        <div className="mt-10 sm:mt-12 pt-8 border-t border-muted-lavender/60 contact-reveal">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {/* 1. Email Card (Sleek Tech Blue Theme) */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=krishnaoncreation@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-50/80 hover:bg-blue-100/90 border border-blue-200/80 rounded-2xl p-4 flex items-center justify-between transition-all group shadow-xs hover:shadow-md hover:-translate-y-0.5 cursor-pointer text-left"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-soft-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4 text-soft-white" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <span className="text-xs sm:text-sm font-sans font-bold text-blue-950 block truncate">
                    krishnaoncreation@gmail.com
                  </span>
                  <p className="text-[10px] font-sans text-blue-700/80">We reply within 1 business day</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2" />
            </a>

            {/* 2. WhatsApp Themed Card */}
            <a
              href="https://wa.me/919693821174?text=Hi%20Zenova%20Team,%20I'd%20like%20to%20discuss%20a%20project!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-50/80 hover:bg-emerald-100/90 border border-emerald-200/80 rounded-2xl p-4 flex items-center justify-between transition-all group shadow-xs hover:shadow-md hover:-translate-y-0.5 cursor-pointer text-left"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-soft-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <WhatsAppIcon className="w-4.5 h-4.5 text-soft-white" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <span className="text-xs sm:text-sm font-sans font-bold text-emerald-950 block truncate">
                    WhatsApp: +91 96938 21174
                  </span>
                  <p className="text-[10px] font-sans text-emerald-700/80">Instant chat & fast project estimates</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2" />
            </a>

            {/* 3. Direct Phone/Call Themed Card */}
            <a
              href="tel:+919693821174"
              className="bg-violet-50/80 hover:bg-violet-100/90 border border-violet-200/80 rounded-2xl p-4 flex items-center justify-between transition-all group shadow-xs hover:shadow-md hover:-translate-y-0.5 cursor-pointer text-left"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-full bg-deep-violet text-soft-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4 text-soft-white" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <span className="text-xs sm:text-sm font-sans font-bold text-purple-950 block truncate">
                    +91 96938 21174
                  </span>
                  <p className="text-[10px] font-sans text-deep-violet/80">Mon – Fri, 10 AM – 7 PM IST</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-deep-violet group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactChapter;
