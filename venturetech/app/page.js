import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const capabilities = [
  {
    icon: '⟨/⟩',
    title: 'Utvikling',
    desc: 'Fullstack-utviklere som bygger produktet fra dag én.',
  },
  {
    icon: '◈',
    title: 'AI & maskinlæring',
    desc: 'AI-ingeniører som bygger intelligens inn i kjernen av produktet.',
  },
  {
    icon: '◐',
    title: 'Produktdesign',
    desc: 'UX/UI-designere som skaper intuitive, brukervennlige opplevelser.',
  },
  {
    icon: '↗',
    title: 'SEO & vekst',
    desc: 'Vekstteam som sikrer synlighet og traction fra dag én.',
  },
  {
    icon: '⬡',
    title: 'Infrastruktur',
    desc: 'DevOps, hosting, CI/CD og teknisk arkitektur som skalerer.',
  },
  {
    icon: '◎',
    title: 'Strategi',
    desc: 'Forretningsmodell, pricing, go-to-market og fundraising.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Send inn idé',
    desc: 'Beskriv problemet du vil løse. Ingen pitch deck kreves — bare en tydelig visjon.',
    time: '15 min',
  },
  {
    num: '02',
    title: 'Analyse',
    desc: 'Vi evaluerer marked, konkurrenter, teknisk gjennomførbarhet og gründerpotensial.',
    time: '2–4 uker',
  },
  {
    num: '03',
    title: 'Bygge MVP',
    desc: 'Et dedikert team bygger en fungerende prototype sammen med deg i sprint-sykluser.',
    time: '8–12 uker',
  },
  {
    num: '04',
    title: 'Starte selskapet',
    desc: 'Aksjeselskap etableres. Eierfordeling, aksjonæravtale og IP håndteres profesjonelt.',
    time: '2–3 uker',
  },
  {
    num: '05',
    title: 'Skalere',
    desc: 'Product-market fit, vekstmarkedsføring, teknisk skalering og eventuell finansiering.',
    time: '6–18 mnd',
  },
];

const startups = [
  { name: 'KlarAI', category: 'AI · SaaS', desc: 'AI-drevet kundeservice for norske bedrifter', status: 'Idéfase' },
  { name: 'TilbudLoop', category: 'SaaS · Automatisering', desc: 'Automatisert tilbudsmotor for håndverkere', status: 'Idéfase' },
  { name: 'HyreFlyt', category: 'Markedsplass', desc: 'Korttidsleie av næringslokaler', status: 'Idéfase' },
  { name: 'DokSignAI', category: 'AI · SaaS', desc: 'Intelligent dokumentanalyse og kontraktstyring', status: 'Idéfase' },
  { name: 'GrønnRapport', category: 'SaaS · Automatisering', desc: 'Automatisert ESG-rapportering for SMB', status: 'Idéfase' },
  { name: 'SøkSmart', category: 'AI · SaaS', desc: 'AI-drevet SEO-verktøy for norske nettsider', status: 'Idéfase' },
];

export default function Home() {
  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="hero-gradient" />
        <div className="grid-pattern" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vt-border bg-vt-surface/50 backdrop-blur mb-8 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-vt-green pulse-dot" />
            <span className="text-xs font-mono text-vt-muted">Venture Studio · Oslo, Norge</span>
          </div>

          <h1
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-6 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Vi bygger teknologi&shy;selskaper sammen med{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vt-accent to-vt-cyan">
              Norges beste gründere
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-vt-muted max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            VentureTech kombinerer kapital, utviklere og AI-kompetanse for å ta ideer fra null til skalerbart selskap. Vi er ikke bare investorer — vi er din medgründer.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <Link
              href="/sok"
              className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-vt-accent text-white font-semibold text-sm hover:bg-blue-500 transition-colors"
            >
              Send inn din idé
              <span className="text-blue-200">→</span>
            </Link>
            <Link
              href="/prosess"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-vt-border text-vt-muted font-medium text-sm hover:text-white hover:border-vt-dim transition-colors"
            >
              Se hvordan det fungerer
            </Link>
          </div>

          {/* Stats strip */}
          <div
            className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            {[
              { value: '10+', label: 'Startup-ideer' },
              { value: '8–12', label: 'Uker til MVP' },
              { value: '100%', label: 'Teknisk team' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display font-bold text-2xl md:text-3xl text-white">{s.value}</div>
                <div className="text-xs text-vt-dim mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-vt-bg to-transparent" />
      </section>

      {/* ═══════════════════ WHAT WE DO ═══════════════════ */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl mb-16">
              <span className="font-mono text-xs text-vt-accent tracking-widest uppercase mb-3 block">
                Hva vi gjør
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-5 leading-tight">
                Et nytt konsept for å bygge selskaper
              </h2>
              <p className="text-vt-muted text-lg leading-relaxed">
                Vi bygger ikke bare — vi investerer tid, kompetanse og ressurser i stedet for å sende en faktura. Vi lykkes kun når startupen lykkes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 0.08}>
                <div className="card-glow group bg-vt-surface border border-vt-border rounded-2xl p-7 hover:border-vt-accent/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-vt-card flex items-center justify-center text-vt-accent font-mono text-lg mb-4 group-hover:bg-vt-accent/10 transition-colors">
                    {cap.icon}
                  </div>
                  <h3 className="font-display font-semibold text-base mb-2">{cap.title}</h3>
                  <p className="text-sm text-vt-muted leading-relaxed">{cap.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ PROCESS ═══════════════════ */}
      <section className="py-24 md:py-32 relative bg-vt-surface/40">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl mb-16">
              <span className="font-mono text-xs text-vt-accent tracking-widest uppercase mb-3 block">
                Prosessen
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-5 leading-tight">
                Fra idé til skalerbart selskap
              </h2>
              <p className="text-vt-muted text-lg leading-relaxed">
                Fem tydelige steg. Ingen byråkrati. Ingen uendelige møterekker. Bare bygging.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.06}>
                <div className="group flex items-start gap-6 bg-vt-bg/60 border border-vt-border rounded-2xl p-6 md:p-8 hover:border-vt-accent/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-vt-card border border-vt-border flex items-center justify-center font-mono text-vt-accent text-sm font-bold group-hover:bg-vt-accent/10 group-hover:border-vt-accent/30 transition-colors">
                    {step.num}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display font-semibold text-lg">{step.title}</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-vt-card border border-vt-border text-xs font-mono text-vt-dim">
                        {step.time}
                      </span>
                    </div>
                    <p className="text-sm text-vt-muted leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-10 text-center">
              <Link
                href="/prosess"
                className="inline-flex items-center gap-2 text-sm text-vt-accent hover:text-blue-400 transition-colors font-medium"
              >
                Les mer om prosessen <span>→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ STARTUPS ═══════════════════ */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl mb-16">
              <span className="font-mono text-xs text-vt-accent tracking-widest uppercase mb-3 block">
                Portefølje
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-5 leading-tight">
                Selskapene vi bygger
              </h2>
              <p className="text-vt-muted text-lg leading-relaxed">
                AI-produkter, SaaS-plattformer, markedsplasser og automatiseringsverktøy — bygget for det norske markedet.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {startups.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.07}>
                <div className="card-glow bg-vt-surface border border-vt-border rounded-2xl p-7 hover:border-vt-accent/30 transition-all duration-300 h-full flex flex-col">
                  {/* Logo placeholder */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-vt-accent/20 to-vt-cyan/10 border border-vt-border flex items-center justify-center font-display font-bold text-vt-accent text-sm mb-5">
                    {s.name.slice(0, 2)}
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-1">{s.name}</h3>
                  <p className="text-sm text-vt-muted leading-relaxed mb-4 flex-1">{s.desc}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-1 rounded-md bg-vt-card text-xs font-mono text-vt-dim border border-vt-border">
                      {s.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-vt-green/10 text-xs font-mono text-vt-green border border-vt-green/20">
                      <span className="w-1 h-1 rounded-full bg-vt-green pulse-dot" />
                      {s.status}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-10 text-center">
              <Link
                href="/startups"
                className="inline-flex items-center gap-2 text-sm text-vt-accent hover:text-blue-400 transition-colors font-medium"
              >
                Se alle startups <span>→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* BG gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-vt-accent/10 via-vt-bg to-vt-cyan/5" />
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="font-mono text-xs text-vt-accent tracking-widest uppercase mb-3 block">
              For gründere
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Har du en idé som kan bli et selskap?
            </h2>
            <p className="text-vt-muted text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Du trenger ikke et team, en prototype eller finansiering. Du trenger en sterk visjon og vilje til å bygge. Vi tar oss av resten.
            </p>
            <Link
              href="/sok"
              className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-vt-accent text-white font-semibold hover:bg-blue-500 transition-colors text-base"
            >
              Send inn din idé
              <span className="text-blue-200">→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
