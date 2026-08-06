import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { Button } from '../ui/Button';
import { ArrowUpRight, Menu, X, ChevronDown, Code, Video, Megaphone, Share2 } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [capabilitiesDropdown, setCapabilitiesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceSubmenu = [
    { label: 'Web Engineering', path: ROUTES.SERVICES.WEB_DEV, icon: Code, desc: 'Bespoke web platforms & web apps' },
    { label: 'Video Production', path: ROUTES.SERVICES.VIDEO_EDITING, icon: Video, desc: 'Cinematic brand films & reels' },
    { label: 'Ad Creatives & Ads', path: ROUTES.SERVICES.AD_CREATION, icon: Megaphone, desc: 'Meta, Google & TikTok campaigns' },
    { label: 'Creator Promotions', path: ROUTES.SERVICES.PAID_PROMOTIONS, icon: Share2, desc: 'Influencer whitelisting & networks' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 sm:py-5 px-6 sm:px-12 border-b ${
        isScrolled
          ? 'bg-soft-white/95 backdrop-blur-md border-muted-lavender/60 shadow-xs'
          : 'bg-soft-white/80 backdrop-blur-sm border-muted-lavender/30'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo with 4-Petal Flower Mark */}
        <Link
          to={ROUTES.HOME}
          className="group flex items-center gap-2 text-2xl font-editorial font-bold tracking-tight text-near-black hover:text-deep-violet transition-colors"
        >
          <svg className="w-6 h-6 text-deep-violet fill-current" viewBox="0 0 24 24">
            <path d="M12 2C13.5 6 18 10.5 22 12C18 13.5 13.5 18 12 22C10.5 18 6 13.5 2 12C6 10.5 10.5 6 12 2Z" />
          </svg>
          <span className="font-sans font-bold tracking-widest text-lg">ZENOVA</span>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to={ROUTES.HOME}
            className={`text-sm font-medium transition-colors ${
              location.pathname === ROUTES.HOME ? 'text-deep-violet font-semibold' : 'text-near-black/70 hover:text-deep-violet'
            }`}
          >
            Home
          </Link>

          <Link
            to={ROUTES.ABOUT}
            className={`text-sm font-medium transition-colors ${
              location.pathname === ROUTES.ABOUT ? 'text-deep-violet font-semibold' : 'text-near-black/70 hover:text-deep-violet'
            }`}
          >
            About
          </Link>

          {/* Capabilities Hover Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCapabilitiesDropdown(true)}
            onMouseLeave={() => setCapabilitiesDropdown(false)}
          >
            <Link
              to={ROUTES.SERVICES.WEB_DEV}
              className={`text-sm font-medium transition-colors flex items-center gap-1 py-1 ${
                location.pathname.startsWith('/services') ? 'text-deep-violet font-semibold' : 'text-near-black/70 hover:text-deep-violet'
              }`}
            >
              <span>Capabilities</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </Link>

            {capabilitiesDropdown && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 p-3 bg-soft-white/95 backdrop-blur-xl rounded-2xl border border-muted-lavender/80 shadow-2xl space-y-1 pt-2">
                {serviceSubmenu.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      to={item.path}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-warm-lavender/60 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-warm-lavender text-deep-violet flex items-center justify-center shrink-0 group-hover:bg-deep-violet group-hover:text-soft-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-near-black group-hover:text-deep-violet transition-colors">
                          {item.label}
                        </div>
                        <p className="card-body-text text-[10px] text-neutral-slate">{item.desc}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link
            to={ROUTES.WORK.ROOT}
            className={`text-sm font-medium transition-colors ${
              location.pathname === ROUTES.WORK.ROOT ? 'text-deep-violet font-semibold' : 'text-near-black/70 hover:text-deep-violet'
            }`}
          >
            Work
          </Link>

          <Link
            to={ROUTES.CONTACT}
            className={`text-sm font-medium transition-colors ${
              location.pathname === ROUTES.CONTACT ? 'text-deep-violet font-semibold' : 'text-near-black/70 hover:text-deep-violet'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link to={ROUTES.CONTACT}>
            <Button variant="primary" size="md" className="gap-1.5 px-6 py-2.5 rounded-full text-xs font-semibold shadow-md">
              Let's Talk <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-near-black rounded-full hover:bg-warm-lavender transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 p-6 bg-soft-white/95 backdrop-blur-xl border border-muted-lavender rounded-2xl shadow-xl flex flex-col gap-4">
          <Link to={ROUTES.HOME} onClick={() => setMobileMenuOpen(false)} className="py-2 text-base font-editorial text-near-black border-b border-muted-lavender/40">
            Home
          </Link>
          <Link to={ROUTES.ABOUT} onClick={() => setMobileMenuOpen(false)} className="py-2 text-base font-editorial text-near-black border-b border-muted-lavender/40">
            About
          </Link>

          {/* Capabilities Submenu on Mobile */}
          <div className="space-y-2 py-2 border-b border-muted-lavender/40">
            <span className="text-xs font-mono uppercase text-deep-violet font-semibold">Capabilities</span>
            <div className="pl-3 space-y-2 pt-1">
              {serviceSubmenu.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-sans text-near-black hover:text-deep-violet"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link to={ROUTES.WORK.ROOT} onClick={() => setMobileMenuOpen(false)} className="py-2 text-base font-editorial text-near-black border-b border-muted-lavender/40">
            Work
          </Link>
          <Link to={ROUTES.CONTACT} onClick={() => setMobileMenuOpen(false)} className="py-2 text-base font-editorial text-near-black border-b border-muted-lavender/40">
            Contact
          </Link>
          <div className="pt-2">
            <Link to={ROUTES.CONTACT} onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full justify-center gap-1.5 py-3">
                Let's Talk <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
