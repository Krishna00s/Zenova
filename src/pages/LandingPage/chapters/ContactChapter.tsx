import React, { useState } from 'react';
import { Container } from '../../../components/ui/Container';
import { Badge } from '../../../components/ui/Badge';
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
    <section className="relative w-full bg-warm-lavender/40 text-near-black py-24 md:py-36 border-t border-muted-lavender/50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Narrative Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <Badge variant="violet">Let's Make It Real</Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-near-black tracking-tight leading-[1.1]">
                Tell us what you're building.{' '}
                <span className="italic font-normal text-deep-violet block">
                  We'll handle the rest.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-neutral-slate leading-relaxed">
                Whether you have a clear blueprint or just an initial idea, we'd love to hear about it and explore how we can collaborate.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-4">
              <div className="bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-neutral-slate">Email Us Direct</p>
                  <a href="mailto:hello@zenova.studio" className="text-base font-editorial font-bold text-near-black hover:text-deep-violet transition-colors">
                    hello@zenova.studio
                  </a>
                  <p className="text-xs text-neutral-slate/70">We usually reply within 1 business day</p>
                </div>
              </div>

              <div className="bg-soft-white rounded-2xl p-6 border border-muted-lavender/60 shadow-xs flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-warm-lavender text-deep-violet flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-neutral-slate">Call or WhatsApp</p>
                  <a href="tel:+919876543210" className="text-base font-editorial font-bold text-near-black hover:text-deep-violet transition-colors">
                    +91 98765 43210
                  </a>
                  <p className="text-xs text-neutral-slate/70">Mon – Fri, 10 AM – 7 PM IST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Glassmorphic Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-soft-white/90 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-muted-lavender/80 shadow-xl space-y-6">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-warm-lavender text-deep-violet mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-editorial font-bold text-near-black">Thank You!</h3>
                  <p className="text-base text-neutral-slate max-w-md mx-auto">
                    We received your message. A senior member of our team will review your project and get back to you shortly.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-near-black font-semibold">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-warm-lavender/40 border border-muted-lavender text-sm text-near-black focus:outline-none focus:ring-2 focus:ring-deep-violet/30 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-near-black font-semibold">Your Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-warm-lavender/40 border border-muted-lavender text-sm text-near-black focus:outline-none focus:ring-2 focus:ring-deep-violet/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-near-black font-semibold">What do you need help with? *</label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-warm-lavender/40 border border-muted-lavender text-sm text-near-black focus:outline-none focus:ring-2 focus:ring-deep-violet/30 transition-all"
                    >
                      <option value="web-development">Web Engineering & Digital Platform</option>
                      <option value="video-editing">Video Editing & Post-Production</option>
                      <option value="ad-creation">Ad Creation & Creative Collateral</option>
                      <option value="paid-promotions">Paid Promotions & Growth Campaigns</option>
                      <option value="all-services">Multiple / Full Ecosystem Partnership</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-near-black font-semibold">Tell us a little more about your project *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share your goals, vision, or any specific requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-warm-lavender/40 border border-muted-lavender text-sm text-near-black focus:outline-none focus:ring-2 focus:ring-deep-violet/30 transition-all resize-none"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" disabled={loading} className="w-full gap-2 py-4">
                    {loading ? 'Sending Inquiry...' : 'Send Message'} <ArrowUpRight className="w-4 h-4" />
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
