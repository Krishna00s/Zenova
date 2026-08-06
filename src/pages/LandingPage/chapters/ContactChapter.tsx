import React, { useState } from 'react';
import { Container } from '../../../components/ui/Container';
import { Button } from '../../../components/ui/Button';
import { Mail, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { submitContactInquiry } from '../../../api/contact';

export const ContactChapter: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    serviceInterest: 'web-development',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
    <section className="relative w-full bg-warm-lavender/40 text-near-black py-20 md:py-28 border-t border-muted-lavender/50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-deep-violet tracking-widest font-semibold">
                LET'S MAKE IT REAL
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-near-black tracking-tight leading-[1.08]">
                Tell us what you're building.{' '}
                <span className="italic font-normal text-deep-violet block">
                  We'll handle the rest.
                </span>
              </h2>
              <p className="card-body-text">
                Whether you have a clear plan or just an idea, we'd love to hear about it.
              </p>
            </div>

            {/* 3D Tech Agency Studio Reception Asset & Contact Cards */}
            <div className="space-y-4 pt-2">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-muted-lavender/60 max-w-xs group hover:scale-[1.01] transition-transform duration-500">
                <img src="/media/contact_agency_studio.jpg" alt="3D Agency Studio Architecture" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                <div className="bg-soft-white rounded-2xl p-5 border border-muted-lavender/60 shadow-xs flex items-center gap-4 hover:-translate-y-1 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <a href="mailto:hello@zenova.studio" className="text-sm font-editorial font-bold text-near-black hover:text-deep-violet transition-colors">
                      hello@zenova.studio
                    </a>
                    <p className="card-body-text text-[10px]">We usually reply within 1 business day</p>
                  </div>
                </div>

                <div className="bg-soft-white rounded-2xl p-5 border border-muted-lavender/60 shadow-xs flex items-center gap-4 hover:-translate-y-1 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <a href="tel:+919876543210" className="text-sm font-editorial font-bold text-near-black hover:text-deep-violet transition-colors">
                      +91 98765 43210
                    </a>
                    <p className="card-body-text text-[10px]">Mon – Fri, 10 AM – 7 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Glassmorphic Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-soft-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-muted-lavender/80 shadow-xl space-y-6">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-warm-lavender text-deep-violet mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-editorial font-bold text-near-black">Thank You!</h3>
                  <p className="card-body-text max-w-md mx-auto">
                    We received your message. A senior member of our team will review your project and get back to you shortly.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase text-near-black font-semibold">What do you need help with? *</label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-warm-lavender/40 border border-muted-lavender text-xs text-near-black focus:outline-none focus:ring-2 focus:ring-deep-violet/30 hover:border-deep-violet/40 transition-all font-sans"
                    >
                      <option value="web-development">Web Development</option>
                      <option value="video-editing">Video Editing</option>
                      <option value="ad-creation">Ad Creation & Distribution</option>
                      <option value="paid-promotions">Paid Promotions & Collaborations</option>
                      <option value="all-services">Multiple / Full Ecosystem Partnership</option>
                    </select>
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
