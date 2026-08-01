import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { Button } from '../ui/Button';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const navLinks = [
    { label: 'Home', path: ROUTES.HOME },
    { label: 'About', path: ROUTES.ABOUT },
    { label: 'Capabilities', path: ROUTES.SERVICES.WEB_DEV },
    { label: 'Work', path: ROUTES.WORK.ROOT },
    { label: 'Process', path: '#process' },
    { label: 'Contact', path: ROUTES.CONTACT },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-5 px-6 sm:px-12 border-b ${
      isScrolled
        ? 'bg-soft-white/95 backdrop-blur-md border-muted-lavender/60 shadow-xs'
        : 'bg-soft-white/70 backdrop-blur-sm border-muted-lavender/30'
    }`}>
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
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.label}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-deep-violet font-semibold'
                    : 'text-near-black/70 hover:text-deep-violet'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
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
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-editorial text-near-black hover:text-deep-violet border-b border-muted-lavender/40"
            >
              {link.label}
            </Link>
          ))}
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
