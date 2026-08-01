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
    { label: 'Story', path: ROUTES.HOME },
    { label: 'About', path: ROUTES.ABOUT },
    { label: 'Web Engineering', path: ROUTES.SERVICES.WEB_DEV },
    { label: 'Video Editing', path: ROUTES.SERVICES.VIDEO_EDITING },
    { label: 'Work', path: ROUTES.WORK.ROOT },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Mark */}
        <Link
          to={ROUTES.HOME}
          className="group flex items-center gap-2 text-xl font-editorial font-bold tracking-tight text-near-black hover:text-deep-violet transition-colors"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-deep-violet group-hover:scale-125 transition-transform" />
          ZENOVA
        </Link>

        {/* Floating Pill Desktop Nav */}
        <nav
          className={`hidden md:flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-500 ${
            isScrolled
              ? 'bg-soft-white/80 backdrop-blur-md border border-near-black/10 shadow-sm'
              : 'bg-warm-lavender/50 backdrop-blur-sm'
          }`}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-deep-violet text-soft-white shadow-xs'
                    : 'text-near-black/80 hover:text-near-black hover:bg-soft-white/60'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link to={ROUTES.LOGIN}>
            <Button variant="ghost" size="sm">
              Client Portal
            </Button>
          </Link>
          <Link to={ROUTES.CONTACT}>
            <Button variant="primary" size="sm" className="gap-1">
              Start a Project <ArrowUpRight className="w-3.5 h-3.5" />
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 p-6 bg-soft-white/95 backdrop-blur-xl border border-near-black/10 rounded-2xl shadow-xl flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-editorial text-near-black hover:text-deep-violet border-b border-near-black/5"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <Link to={ROUTES.LOGIN} onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full">
                Client Portal
              </Button>
            </Link>
            <Link to={ROUTES.CONTACT} onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full gap-1">
                Start a Project <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
