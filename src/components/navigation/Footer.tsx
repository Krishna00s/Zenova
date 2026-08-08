import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '../ui/Container';
import { ROUTES } from '../../constants/routes';
import { Instagram, Linkedin, Twitter, Dribbble } from 'lucide-react';

export const Footer: React.FC = () => {
  const location = useLocation();
  const isServicePage = location.pathname.startsWith('/services');

  return (
    <footer
      className={`transition-colors duration-500 py-16 md:py-24 border-t ${
        isServicePage
          ? 'bg-near-black text-soft-white border-slate-800'
          : 'bg-warm-lavender text-near-black border-muted-lavender/50'
      }`}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand Vision Column */}
          <div className="md:col-span-2 space-y-4">
            <Link
              to={ROUTES.HOME}
              className={`flex items-center gap-2.5 text-2xl font-editorial font-bold ${
                isServicePage ? 'text-soft-white' : 'text-deep-violet'
              }`}
            >
              <img
                src="/media/zenova_logo_transparent.png"
                alt="Zenova Brand Emblem Logo Icon"
                className="w-7 h-7 object-contain"
              />
              <span className="font-sans font-bold tracking-widest text-lg">ZENOVA</span>
            </Link>
            <p className={`text-sm max-w-sm leading-relaxed ${isServicePage ? 'text-soft-white/70' : 'text-neutral-slate'}`}>
              We build digital experiences that help brands connect, grow, and make a real impact.
            </p>
            {/* Social Icons */}
            <div className={`flex items-center gap-4 pt-2 ${isServicePage ? 'text-soft-white' : 'text-deep-violet'}`}>
              <a href="https://www.instagram.com/zenova_enterprises/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:opacity-75 transition-opacity">
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
            <h4 className={`text-xs font-mono uppercase tracking-wider font-semibold ${isServicePage ? 'text-soft-white' : 'text-deep-violet'}`}>
              Company
            </h4>
            <ul className={`space-y-2 text-sm ${isServicePage ? 'text-soft-white/70' : 'text-neutral-slate'}`}>
              <li><Link to={ROUTES.ABOUT} className={isServicePage ? 'hover:text-soft-white transition-colors' : 'hover:text-deep-violet transition-colors'}>About Us</Link></li>
              <li><Link to={ROUTES.HOME} className={isServicePage ? 'hover:text-soft-white transition-colors' : 'hover:text-deep-violet transition-colors'}>What We Do</Link></li>
              <li><Link to={ROUTES.WORK.ROOT} className={isServicePage ? 'hover:text-soft-white transition-colors' : 'hover:text-deep-violet transition-colors'}>Our Work</Link></li>
              <li><a href="#careers" className={isServicePage ? 'hover:text-soft-white transition-colors' : 'hover:text-deep-violet transition-colors'}>Careers</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className={`text-xs font-mono uppercase tracking-wider font-semibold ${isServicePage ? 'text-soft-white' : 'text-deep-violet'}`}>
              Services
            </h4>
            <ul className={`space-y-2 text-sm ${isServicePage ? 'text-soft-white/70' : 'text-neutral-slate'}`}>
              <li><Link to={ROUTES.SERVICES.WEB_DEV} className={isServicePage ? 'hover:text-soft-white transition-colors' : 'hover:text-deep-violet transition-colors'}>Web Development</Link></li>
              <li><Link to={ROUTES.SERVICES.VIDEO_EDITING} className={isServicePage ? 'hover:text-soft-white transition-colors' : 'hover:text-deep-violet transition-colors'}>Video Editing</Link></li>
              <li><Link to={ROUTES.SERVICES.AD_CREATION} className={isServicePage ? 'hover:text-soft-white transition-colors' : 'hover:text-deep-violet transition-colors'}>Ad Creation & Distribution</Link></li>
              <li><Link to={ROUTES.SERVICES.PAID_PROMOTIONS} className={isServicePage ? 'hover:text-soft-white transition-colors' : 'hover:text-deep-violet transition-colors'}>Paid Promotions & Collaborations</Link></li>
            </ul>
          </div>

          {/* Let's Connect Column */}
          <div className="space-y-3">
            <h4 className={`text-xs font-mono uppercase tracking-wider font-semibold ${isServicePage ? 'text-soft-white' : 'text-deep-violet'}`}>
              Let's Connect
            </h4>
            <ul className={`space-y-2 text-sm ${isServicePage ? 'text-soft-white/70' : 'text-neutral-slate'}`}>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=krishnaoncreation@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isServicePage ? 'hover:text-soft-white transition-colors' : 'hover:text-deep-violet transition-colors'}
                >
                  krishnaoncreation@gmail.com
                </a>
              </li>
              <li><a href="tel:+919693821174" className={isServicePage ? 'hover:text-soft-white transition-colors' : 'hover:text-deep-violet transition-colors'}>+91 96938 21174</a></li>
              <li className={`text-xs ${isServicePage ? 'text-soft-white/50' : 'text-neutral-slate/70'}`}>Bangalore, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Flower Emblem */}
        <div className={`pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-xs ${
          isServicePage
            ? 'border-slate-800 text-soft-white/50'
            : 'border-muted-lavender/60 text-neutral-slate/70'
        }`}>
          <p>© 2025 Zenova. All rights reserved.</p>
          <div className={`flex items-center gap-2 ${isServicePage ? 'text-soft-white' : 'text-deep-violet'}`}>
            <span className={`w-2 h-2 rounded-full ${isServicePage ? 'bg-soft-white' : 'bg-deep-violet'}`} />
            <span className="font-editorial italic">Made with care. Built to grow with you.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
