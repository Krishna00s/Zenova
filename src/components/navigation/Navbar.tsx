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

  const isServicePage = location.pathname.startsWith('/services');

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
        isServicePage
          ? isScrolled
            ? 'bg-[#FAFAFA]/95 backdrop-blur-md border-slate-200 shadow-xs'
            : 'bg-[#FAFAFA]/80 backdrop-blur-sm border-slate-200/60'
          : isScrolled
          ? 'bg-soft-white/95 backdrop-blur-md border-muted-lavender/60 shadow-xs'
          : 'bg-soft-white/80 backdrop-blur-sm border-muted-lavender/30'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to={ROUTES.HOME}
          className={`group flex items-center gap-2.5 text-2xl font-editorial font-bold tracking-tight transition-colors ${
            isServicePage
              ? 'text-near-black hover:text-slate-700'
              : 'text-near-black hover:text-deep-violet'
          }`}
        >
          <img
            src="/media/zenova_circular_icon.jpg"
            alt="Zenova Circular Emblem Logo Icon"
            className="w-7 h-7 rounded-full object-cover shadow-xs border border-deep-violet/30 group-hover:scale-105 transition-transform"
          />
          <span className="font-sans font-bold tracking-widest text-lg">ZENOVA</span>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to={ROUTES.HOME}
            className={`text-sm font-medium transition-colors ${
              location.pathname === ROUTES.HOME
                ? isServicePage
                  ? 'text-near-black font-semibold'
                  : 'text-deep-violet font-semibold'
                : 'text-near-black/70 hover:text-deep-violet'
            }`}
          >
            Home
          </Link>

          <Link
            to={ROUTES.ABOUT}
            className={`text-sm font-medium transition-colors ${
              location.pathname === ROUTES.ABOUT
                ? isServicePage
                  ? 'text-near-black font-semibold'
                  : 'text-deep-violet font-semibold'
                : 'text-near-black/70 hover:text-deep-violet'
            }`}
          >
            About
          </Link>

          {/* Services Hover Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCapabilitiesDropdown(true)}
            onMouseLeave={() => setCapabilitiesDropdown(false)}
          >
            <Link
              to={ROUTES.SERVICES.WEB_DEV}
              className={`text-sm font-medium transition-colors flex items-center gap-1 py-1 ${
                isServicePage
                  ? 'text-near-black font-semibold'
                  : location.pathname.startsWith('/services')
                  ? 'text-deep-violet font-semibold'
                  : 'text-near-black/70 hover:text-deep-violet'
              }`}
            >
              <span>Services</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </Link>

            {capabilitiesDropdown && (
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 w-72 p-3 backdrop-blur-xl rounded-2xl shadow-2xl space-y-1 pt-2 border ${
                  isServicePage
                    ? 'bg-[#FAFAFA]/95 border-slate-200'
                    : 'bg-soft-white/95 border-muted-lavender/80'
                }`}
              >
                {serviceSubmenu.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      to={item.path}
                      className={`flex items-start gap-3 p-2.5 rounded-xl transition-colors group ${
                        isServicePage
                          ? 'hover:bg-slate-100'
                          : 'hover:bg-warm-lavender/60'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isServicePage
                            ? 'bg-slate-100 text-near-black group-hover:bg-near-black group-hover:text-soft-white'
                            : 'bg-warm-lavender text-deep-violet group-hover:bg-deep-violet group-hover:text-soft-white'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div
                          className={`text-xs font-bold transition-colors ${
                            isServicePage
                              ? 'text-near-black group-hover:text-slate-800'
                              : 'text-near-black group-hover:text-deep-violet'
                          }`}
                        >
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
              location.pathname === ROUTES.WORK.ROOT
                ? isServicePage
                  ? 'text-near-black font-semibold'
                  : 'text-deep-violet font-semibold'
                : 'text-near-black/70 hover:text-deep-violet'
            }`}
          >
            Work
          </Link>

          <Link
            to={ROUTES.CONTACT}
            className={`text-sm font-medium transition-colors ${
              location.pathname === ROUTES.CONTACT
                ? isServicePage
                  ? 'text-near-black font-semibold'
                  : 'text-deep-violet font-semibold'
                : 'text-near-black/70 hover:text-deep-violet'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link to={ROUTES.CONTACT}>
            <Button
              variant="primary"
              size="md"
              className={`gap-1.5 px-6 py-2.5 rounded-full text-xs font-semibold shadow-md ${
                isServicePage ? 'bg-near-black hover:bg-slate-800 text-soft-white' : ''
              }`}
            >
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
        <div
          className={`md:hidden mt-4 p-6 backdrop-blur-xl border rounded-2xl shadow-xl flex flex-col gap-4 ${
            isServicePage
              ? 'bg-[#FAFAFA]/95 border-slate-200'
              : 'bg-soft-white/95 border-muted-lavender'
          }`}
        >
          <Link to={ROUTES.HOME} onClick={() => setMobileMenuOpen(false)} className="py-2 text-base font-editorial text-near-black border-b border-muted-lavender/40">
            Home
          </Link>
          <Link to={ROUTES.ABOUT} onClick={() => setMobileMenuOpen(false)} className="py-2 text-base font-editorial text-near-black border-b border-muted-lavender/40">
            About
          </Link>

          {/* Services Submenu on Mobile */}
          <div className="space-y-2 py-2 border-b border-muted-lavender/40">
            <span className={`text-xs font-mono uppercase font-semibold ${isServicePage ? 'text-near-black' : 'text-deep-violet'}`}>
              Services
            </span>
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

          <Link to={ROUTES.CONTACT} onClick={() => setMobileMenuOpen(false)} className="pt-2">
            <Button variant="primary" size="md" className="w-full justify-center gap-1.5 py-3 rounded-full text-xs font-semibold">
              Let's Talk <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
