import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { ROUTES } from '../../constants/routes';
import { Instagram, Linkedin, Twitter, Dribbble } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-warm-lavender text-near-black border-t border-muted-lavender/50 py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand Vision Column */}
          <div className="md:col-span-2 space-y-4">
            <Link to={ROUTES.HOME} className="flex items-center gap-2 text-2xl font-editorial font-bold text-deep-violet">
              <span className="w-3 h-3 rounded-full bg-deep-violet" />
              ZENOVA
            </Link>
            <p className="text-sm text-neutral-slate max-w-sm leading-relaxed">
              We build digital experiences that help brands connect, grow, and make a real impact.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2 text-deep-violet">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:opacity-75 transition-opacity">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:opacity-75 transition-opacity">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:opacity-75 transition-opacity">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noreferrer" aria-label="Dribbble" className="hover:opacity-75 transition-opacity">
                <Dribbble className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-deep-violet font-semibold">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-neutral-slate">
              <li><Link to={ROUTES.ABOUT} className="hover:text-deep-violet transition-colors">About Us</Link></li>
              <li><Link to={ROUTES.HOME} className="hover:text-deep-violet transition-colors">What We Do</Link></li>
              <li><Link to={ROUTES.WORK.ROOT} className="hover:text-deep-violet transition-colors">Our Work</Link></li>
              <li><a href="#careers" className="hover:text-deep-violet transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-deep-violet font-semibold">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-neutral-slate">
              <li><Link to={ROUTES.SERVICES.WEB_DEV} className="hover:text-deep-violet transition-colors">Web Development</Link></li>
              <li><Link to={ROUTES.SERVICES.VIDEO_EDITING} className="hover:text-deep-violet transition-colors">Video Editing</Link></li>
              <li><Link to={ROUTES.SERVICES.AD_CREATION} className="hover:text-deep-violet transition-colors">Ad Creation & Distribution</Link></li>
              <li><Link to={ROUTES.SERVICES.PAID_PROMOTIONS} className="hover:text-deep-violet transition-colors">Paid Promotions & Collaborations</Link></li>
            </ul>
          </div>

          {/* Let's Connect Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-deep-violet font-semibold">
              Let's Connect
            </h4>
            <ul className="space-y-2 text-sm text-neutral-slate">
              <li><a href="mailto:hello@zenova.studio" className="hover:text-deep-violet transition-colors">hello@zenova.studio</a></li>
              <li><a href="tel:+919876543210" className="hover:text-deep-violet transition-colors">+91 98765 43210</a></li>
              <li className="text-xs text-neutral-slate/70">Bangalore, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Flower Emblem */}
        <div className="pt-8 border-t border-muted-lavender/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-slate/70">
          <p>© 2025 Zenova. All rights reserved.</p>
          <div className="flex items-center gap-2 text-deep-violet">
            <span className="w-2 h-2 rounded-full bg-deep-violet" />
            <span className="font-editorial italic">Made with care. Built to grow with you.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
