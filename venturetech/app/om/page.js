import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Om VentureTech — Norges venture studio',
  description: 'VentureTech er et norsk venture studio som bygger teknologiselskaper fra grunnen av, sammen med gründere.',
};

const values = [
  {
    title: 'Bygg først, prat etterpå',
    desc: 'Vi tror på handling over strategi. Den beste måten å validere en idé på er å bygge den og sette den foran ekte brukere.',
  },
  {
    title: 'Gründeren leder',
    desc: 'Vi er medgründere, men du er sjefen. Vi stiller med teknologien og ressursene — du har visjonen og retningen.',
  },
  {
    title: 'Felles oppside',
    desc: 'Ingen konsulenthonorarer. Ingen timefakturering. Vi investerer tid og kompetanse, og lykkes kun når startupen lykkes.',
  },
  {
    title: 'AI-native',
    desc: 'Alle selskaper vi bygger har AI som en kjernedel av produktet — ikke som en ettertanke.',
  },
  {
    title: 'Norsk fokus',
    desc: 'Vi forstår norsk regulering, norske brukere og norsk forretningskultur. Det er vårt hjemmemarked.',
  },
  {
    title: 'Langsiktig partnerskap',
    desc: 'Vi forsvinner ikke etter MVP-en er levert. Vi er med hele veien fra idé til skalering.',
  },
];

const model = [
  {
    label: 'Venture studio',
    desc: 'Bygger selskapet fra grunnen av. Bidrar med team, teknologi og kapital. Tar eierskap.',
    us: true,
  },
  {
    label: 'Akselerator',
    desc: 'Kort program (3–6 mnd). Mentoring og nettverk. Liten eierandel.',
    us: false,
  },
  {
    label: 'VC-fond',
    desc: 'Investerer penger. Tar styreplass. Gründeren bygger selv.',
    us: false,
  },
  {
    label: 'Konsulentselskap',
    desc: 'Bygger på timebasis. Leverer og går videre. Ingen eierskap.',
    us: false,
  },
];

export default function OmPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="hero-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="font-mono text-xs text-vt-accent tracking-widest uppercase mb-3 block animate-fade-up">
            Om oss
          </span>
          <h1
            className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Vi bygger fremtidens norske teknologiselskaper
          </h1>
          <p
            className="text-vt-muted text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            VentureTech er et venture studio — en ny modell for å starte, bygge og skalere teknologiselskaper i Norge.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display font-bold text-2xl md:text-3xl mb-6">Hvorfor VentureTech?</h2>
              <p className="text-vt-muted leading-relaxed mb-4">
                Norge har et enormt potensial innen teknologi. Vi har høy digital kompetanse, et stabilt økonomisk klima og en sterk tradisjon for innovasjon. Men for mange gode ideer dør fordi gründere mangler tilgang til teknisk kapasitet i den kritiske oppstartsfasen.
              </p>
              <p className="text-vt-muted leading-relaxed mb-4">
                VentureTech finnes for å lukke dette gapet. Vi tror at den beste måten å bygge suksessfulle teknologiselskaper på er å gjøre det sammen — med et dedikert team fra dag én.
              </p>
              <p className="text-vt-muted leading-relaxed">
                Modellen vår er inspirert av ledende venture studios globalt: Atomic i USA, Founders Factory i Storbritannia, Betaworks i New York, Hexa i Frankrike og Rocket Internet i Tyskland. Disse har til sammen bygget hundrevis av selskaper. Vi bringer denne modellen til Norge.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Model comparison */}
      <section className="py-16 md:py-24 bg-vt-surface/40">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-10">Hva skiller et venture studio?</h2>
          </ScrollReveal>
          <div className="space-y-3">
            {model.map((m, i) => (
              <ScrollReveal key={m.label} delay={i * 0.05}>
                <div
                  className={`flex items-start gap-5 p-6 rounded-xl border transition-colors ${
                    m.us
                      ? 'bg-vt-accent/5 border-vt-accent/30'
                      : 'bg-vt-bg/60 border-vt-border'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 font-mono text-xs font-bold ${
                      m.us
                        ? 'bg-vt-accent/20 text-vt-accent border border-vt-accent/30'
                        : 'bg-vt-card text-vt-dim border border-vt-border'
                    }`}
                  >
                    {m.us ? 'VT' : '—'}
                  </div>
                  <div>
                    <h3 className={`font-display font-semibold text-base mb-1 ${m.us ? 'text-white' : 'text-vt-muted'}`}>
                      {m.label}
                      {m.us && (
                        <span className="ml-2 px-2 py-0.5 rounded-full bg-vt-accent/20 text-vt-accent text-xs font-mono">
                          VentureTech
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-vt-muted leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-10">Våre prinsipper</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.06}>
                <div className="bg-vt-surface border border-vt-border rounded-xl p-7 h-full">
                  <h3 className="font-display font-semibold text-base mb-2">{v.title}</h3>
                  <p className="text-sm text-vt-muted leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="py-16 md:py-24 bg-vt-surface/40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">Teamet</h2>
            <p className="text-vt-muted mb-10 max-w-xl mx-auto">
              VentureTechs kjerneteam har bakgrunn fra teknologiutvikling, produktledelse, AI og startup-skalering i det norske markedet.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {['CEO & Grunnlegger', 'CTO', 'Head of Product', 'Head of Growth'].map((role) => (
                <div key={role} className="bg-vt-bg border border-vt-border rounded-xl p-6">
                  <div className="w-16 h-16 rounded-full bg-vt-card border border-vt-border mx-auto mb-4 flex items-center justify-center text-vt-dim text-xl">
                    ?
                  </div>
                  <p className="text-xs text-vt-dim font-mono">{role}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <ScrollReveal>
          <div className="max-w-xl mx-auto px-6">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">Vil du bygge med oss?</h2>
            <p className="text-vt-muted mb-8">
              Enten du er gründer med en idé eller en investor som ser muligheter i venture studio-modellen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/sok"
                className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-vt-accent text-white font-semibold hover:bg-blue-500 transition-colors text-sm"
              >
                Send inn din idé →
              </Link>
              <a
                href="mailto:hei@venturetech.no"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-vt-border text-vt-muted font-medium text-sm hover:text-white hover:border-vt-dim transition-colors"
              >
                Kontakt oss
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
