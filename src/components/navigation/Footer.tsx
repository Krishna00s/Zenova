import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { ROUTES } from '../../constants/routes';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-warm-lavender text-near-black border-t border-muted-lavender/50 py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Vision */}
          <div className="md:col-span-2 space-y-4">
            <Link to={ROUTES.HOME} className="text-2xl font-editorial font-bold text-deep-violet">
              ZENOVA ENTERPRISES
            </Link>
            <p className="text-sm text-neutral-slate max-w-md leading-relaxed">
              We design and engineer digital platforms, cinematic media, and strategic campaigns with calm confidence and extreme attention to detail.
            </p>
            <p className="text-xs text-neutral-slate/70 italic font-editorial">
              "Write with belief, not with persuasion."
            </p>
          </div>

          {/* Service Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-deep-violet font-semibold">
              Capabilities
            </h4>
            <ul className="space-y-2 text-sm text-neutral-slate">
              <li>
                <Link to={ROUTES.SERVICES.WEB_DEV} className="hover:text-deep-violet transition-colors">
                  Web Engineering
                </Link>
              </li>
              <li>
                <Link to={ROUTES.SERVICES.VIDEO_EDITING} className="hover:text-deep-violet transition-colors">
                  Video Editing
                </Link>
              </li>
              <li>
                <Link to={ROUTES.SERVICES.AD_CREATION} className="hover:text-deep-violet transition-colors">
                  Ad Creation
                </Link>
              </li>
              <li>
                <Link to={ROUTES.SERVICES.PAID_PROMOTIONS} className="hover:text-deep-violet transition-colors">
                  Paid Promotions
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-deep-violet font-semibold">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-neutral-slate">
              <li>
                <Link to={ROUTES.ABOUT} className="hover:text-deep-violet transition-colors">
                  About Zenova
                </Link>
              </li>
              <li>
                <Link to={ROUTES.WORK.ROOT} className="hover:text-deep-violet transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link to={ROUTES.CONTACT} className="hover:text-deep-violet transition-colors">
                  Contact & Booking
                </Link>
              </li>
              <li>
                <Link to={ROUTES.LOGIN} className="hover:text-deep-violet transition-colors">
                  Client Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-footer copyright */}
        <div className="pt-8 border-t border-muted-lavender/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-slate/70">
          <p>© {new Date().getFullYear()} Zenova Enterprises. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Version 0.1.0 Architecture</span>
            <span className="w-1.5 h-1.5 rounded-full bg-deep-violet/40" />
            <span>Built with Calm Precision</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
