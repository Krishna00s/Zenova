import React, { useState, useRef } from 'react';
import { Container } from '../../../components/ui/Container';
import { Button } from '../../../components/ui/Button';
import { Mail, Phone, ArrowUpRight, CheckCircle2, ChevronDown, Check } from 'lucide-react';
import { submitContactInquiry } from '../../../api/contact';
import { useGSAP } from '@gsap/react';
import { scrollRevealCards } from '../../../animations/reveal';

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
    { value: 'video-editing', label: 'Video Editing' },
    { value: 'ad-creation', label: 'Ad Creation & Distribution' },
    { value: 'paid-promotions', label: 'Paid Promotions & Collaborations' },
    { value: 'all-services', label: 'Multiple / Full Ecosystem Partnership' },
  ];

  const currentOptionLabel =
    serviceOptions.find((opt) => opt.value === formData.serviceInterest)?.label || 'Web Development';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await submitContactInquiry(formData);
    setLoading(false);
    if (res.success) {
      setSubmitted(true);
    }
  };

  return (
    <section ref={containerRef} className="relative w-full bg-warm-lavender/40 text-near-black py-16 sm:py-20 md:py-28 border-t border-muted-lavender/50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-5 space-y-5 contact-reveal">
            <div className="space-y-2.5">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
                LET'S MAKE IT REAL
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-near-black tracking-tight leading-[1.08]">
                Tell us what you're building.{' '}
                <span className="italic font-normal text-deep-violet block">
                  We'll handle the rest.
                </span>
              </h2>
              <p className="card-body-text text-xs sm:text-sm">
                Whether you have a clear plan or just an idea, we'd love to hear about it.
              </p>
            </div>

            {/* Natural Agency Studio Architecture & Friendly Email/Phone Cards */}
            <div className="space-y-4 pt-1 w-full">
              <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-muted-lavender/60 w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] max-w-full lg:max-w-xs group hover:scale-[1.01] transition-transform duration-500 relative">
                <img src="/media/contact_studio_natural.jpg" alt="Zenova Agency Studio Architecture" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {/* Email Card with Aesthetic Friendly Typography */}
                <div className="bg-soft-white/90 rounded-2xl p-4 border border-muted-lavender/70 shadow-xs flex items-center gap-3.5 hover:-translate-y-0.5 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-full bg-warm-lavender text-deep-violet flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=krishnaoncreation@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-sans font-semibold text-near-black hover:text-deep-violet transition-colors inline-block tracking-tight bg-warm-lavender/60 px-2.5 py-0.5 rounded-full border border-muted-lavender/50"
                    >
                      krishnaoncreation@gmail.com
                    </a>
                    <p className="text-[10px] font-sans text-neutral-slate/80 pl-1">We usually reply within 1 business day</p>
                  </div>
                </div>

                {/* Phone Card with Aesthetic Friendly Typography */}
                <div className="bg-soft-white/90 rounded-2xl p-4 border border-muted-lavender/70 shadow-xs flex items-center gap-3.5 hover:-translate-y-0.5 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-full bg-warm-lavender text-deep-violet flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <a
                      href="tel:+919693821174"
                      className="text-xs sm:text-sm font-sans font-semibold text-near-black hover:text-deep-violet transition-colors inline-block tracking-tight bg-warm-lavender/60 px-2.5 py-0.5 rounded-full border border-muted-lavender/50"
                    >
                      +91 96938 21174
                    </a>
                    <p className="text-[10px] font-sans text-neutral-slate/80 pl-1">Mon – Fri, 10 AM – 7 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Glassmorphic Contact Form Column */}
          <div className="lg:col-span-7 w-full contact-reveal">
            <div className="bg-soft-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-muted-lavender/80 shadow-xl space-y-5">
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
      </Container>
    </section>
  );
};

export default ContactChapter;
