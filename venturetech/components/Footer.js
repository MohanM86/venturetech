import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-vt-border bg-vt-bg">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-vt-accent flex items-center justify-center text-white font-display font-bold text-xs">
                VT
              </div>
              <span className="font-display font-bold text-base">
                Venture<span className="text-vt-accent">Tech</span>
              </span>
            </Link>
            <p className="text-sm text-vt-muted leading-relaxed">
              Et norsk venture studio som bygger teknologiselskaper sammen med gründere.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-vt-dim uppercase tracking-wider">
              Sider
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { href: '/', label: 'Forside' },
                { href: '/prosess', label: 'Prosess' },
                { href: '/startups', label: 'Startups' },
                { href: '/om', label: 'Om oss' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-vt-muted hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* For gründere */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-vt-dim uppercase tracking-wider">
              For gründere
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/sok" className="text-sm text-vt-muted hover:text-white transition-colors">
                Send inn idé
              </Link>
              <Link href="/prosess" className="text-sm text-vt-muted hover:text-white transition-colors">
                Slik fungerer det
              </Link>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-vt-dim uppercase tracking-wider">
              Kontakt
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-vt-muted">
              <a href="mailto:hei@venturetech.no" className="hover:text-white transition-colors">
                hei@venturetech.no
              </a>
              <span>Oslo, Norge</span>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-vt-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-vt-dim">
            &copy; {new Date().getFullYear()} VentureTech. Alle rettigheter reservert.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-vt-dim hover:text-vt-muted transition-colors">
              Personvern
            </a>
            <a href="#" className="text-xs text-vt-dim hover:text-vt-muted transition-colors">
              Vilkår
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
