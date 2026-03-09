'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/prosess', label: 'Prosess' },
    { href: '/startups', label: 'Startups' },
    { href: '/om', label: 'Om oss' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-vt-bg/90 backdrop-blur-xl border-b border-vt-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-vt-accent flex items-center justify-center text-white font-display font-bold text-sm group-hover:scale-110 transition-transform">
            VT
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            Venture<span className="text-vt-accent">Tech</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-vt-muted hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/sok"
            className="btn-glow text-sm font-medium px-5 py-2 rounded-lg bg-vt-accent text-white hover:bg-blue-500 transition-colors"
          >
            Send inn idé
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          aria-label="Meny"
        >
          <span
            className={`w-5 h-0.5 bg-white transition-all ${
              mobileOpen ? 'rotate-45 translate-y-1' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-white transition-all ${
              mobileOpen ? '-rotate-45 -translate-y-1' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-vt-surface border-b border-vt-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-vt-muted hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/sok"
              onClick={() => setMobileOpen(false)}
              className="inline-block text-center text-sm font-medium px-5 py-2.5 rounded-lg bg-vt-accent text-white"
            >
              Send inn idé
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
