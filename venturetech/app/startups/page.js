import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Startups — VentureTech',
  description: 'Porteføljen av teknologiselskaper VentureTech bygger sammen med gründere. AI, SaaS, markedsplasser og automatisering.',
};

const startups = [
  {
    name: 'KlarAI',
    category: 'AI · SaaS',
    desc: 'AI-drevet kundeservice for norske bedrifter. En chatbot-plattform som forstår norsk naturlig språk og håndterer kundehenvendelser for SMB-er.',
    status: 'Idéfase',
    color: 'from-blue-500/20 to-cyan-500/10',
  },
  {
    name: 'TilbudLoop',
    category: 'SaaS · Automatisering',
    desc: 'Automatisert tilbudsmotor for håndverkere. Genererer profesjonelle tilbud på minutter med AI og smarte maler.',
    status: 'Idéfase',
    color: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    name: 'HyreFlyt',
    category: 'Markedsplass',
    desc: 'Markedsplass for korttidsleie av næringslokaler. Airbnb-modell for kontor, lager og butikklokaler.',
    status: 'Idéfase',
    color: 'from-violet-500/20 to-purple-500/10',
  },
  {
    name: 'DokSignAI',
    category: 'AI · SaaS',
    desc: 'Intelligent dokumentanalyse og kontraktstyring. Leser, analyserer og oppsummerer kontrakter og juridiske dokumenter på norsk.',
    status: 'Idéfase',
    color: 'from-amber-500/20 to-orange-500/10',
  },
  {
    name: 'GrønnRapport',
    category: 'SaaS · Automatisering',
    desc: 'Automatisert ESG-rapportering for SMB. Samler data og genererer rapporter som tilfredsstiller norske og EU-krav.',
    status: 'Idéfase',
    color: 'from-green-500/20 to-lime-500/10',
  },
  {
    name: 'MatchDev',
    category: 'Markedsplass · SaaS',
    desc: 'Plattform for å matche nordiske startups med verifiserte frilans-utviklere. Inkluderer prosjektstyring og escrow-betaling.',
    status: 'Idéfase',
    color: 'from-pink-500/20 to-rose-500/10',
  },
  {
    name: 'SøkSmart',
    category: 'AI · SaaS',
    desc: 'AI-drevet SEO-verktøy bygget spesifikt for norskspråklige nettsider. Analyserer søkevolum og genererer optimalisert innhold.',
    status: 'Idéfase',
    color: 'from-cyan-500/20 to-sky-500/10',
  },
  {
    name: 'LønnOpp',
    category: 'SaaS · Automatisering',
    desc: 'Moderne lønns- og HR-plattform for små bedrifter. Skreddersydd for norsk lovgivning med A-melding og NAV-integrasjoner.',
    status: 'Idéfase',
    color: 'from-indigo-500/20 to-blue-500/10',
  },
  {
    name: 'ByggBot',
    category: 'AI · SaaS',
    desc: 'AI-assistent for byggesøknader og reguleringsplaner. Leser reguleringsplaner, sjekker krav og genererer søknadsutkast.',
    status: 'Idéfase',
    color: 'from-yellow-500/20 to-amber-500/10',
  },
  {
    name: 'FakturaFlyt',
    category: 'Fintech · AI',
    desc: 'Automatisert fakturering og purring med AI. Optimaliserer purretidspunkt og tone for å maksimere innbetalingsraten.',
    status: 'Idéfase',
    color: 'from-teal-500/20 to-emerald-500/10',
  },
];

export default function StartupsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="hero-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="font-mono text-xs text-vt-accent tracking-widest uppercase mb-3 block animate-fade-up">
            Portefølje
          </span>
          <h1
            className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Selskapene vi bygger
          </h1>
          <p
            className="text-vt-muted text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            AI-produkter, SaaS-plattformer, markedsplasser og automatiseringsverktøy — bygget for det norske markedet.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {startups.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.05}>
                <div className="card-glow bg-vt-surface border border-vt-border rounded-2xl p-8 hover:border-vt-accent/30 transition-all duration-300 h-full flex flex-col">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.color} border border-vt-border flex items-center justify-center font-display font-bold text-white text-base mb-5`}>
                    {s.name.slice(0, 2)}
                  </div>
                  <h2 className="font-display font-bold text-xl mb-2">{s.name}</h2>
                  <p className="text-sm text-vt-muted leading-relaxed mb-5 flex-1">{s.desc}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-3 py-1 rounded-md bg-vt-card text-xs font-mono text-vt-dim border border-vt-border">
                      {s.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-vt-green/10 text-xs font-mono text-vt-green border border-vt-green/20">
                      <span className="w-1 h-1 rounded-full bg-vt-green pulse-dot" />
                      {s.status}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
