import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Prosessen — VentureTech',
  description: 'Slik bygger VentureTech teknologiselskaper sammen med gründere. Fra idé til skalerbart selskap i fem tydelige steg.',
};

const steps = [
  {
    num: '01',
    title: 'Send inn idé',
    time: '15 minutter',
    details: [
      'Beskriv problemet du vil løse gjennom vårt søknadsskjema.',
      'Vi trenger ingen pitch deck og ingen forretningsplan.',
      'Bare en tydelig beskrivelse av problemet, hvem som har det, og din hypotese om løsningen.',
      'Vi vurderer alle innsendte ideer og svarer innen 5 virkedager.',
    ],
    vtBidrar: 'Innledende vurdering og tilbakemelding.',
  },
  {
    num: '02',
    title: 'Analyse og validering',
    time: '2–4 uker',
    details: [
      'Markedsanalyse: Hvor stort er det adresserbare markedet? Finnes det betalingsvilje?',
      'Konkurrentanalyse: Hvem er eksisterende aktører? Hva er differensieringen?',
      'Teknisk vurdering: Kan dette bygges? Hva er den tekniske kjernen?',
      'Gründervurdering: Har du domeneekspertise, nettverk og driv til å lede selskapet?',
    ],
    vtBidrar: 'Fullstendig analyse, markedsresearch og teknisk evaluering.',
  },
  {
    num: '03',
    title: 'Bygge MVP',
    time: '8–12 uker',
    details: [
      'VentureTech setter sammen et dedikert produktteam: utviklere, designer og AI-ingeniør.',
      'Teamet jobber tett med deg i sprint-baserte sykluser.',
      'Fokus: et produkt som kan testes med ekte brukere — vi optimaliserer for læring, ikke perfeksjon.',
      'Leveranser: fungerende produkt, landingsside, analytics og bruker-onboarding.',
    ],
    vtBidrar: 'Fullstack-utviklere, designere, AI-ingeniører og prosjektledelse.',
  },
  {
    num: '04',
    title: 'Starte selskapet',
    time: '2–3 uker',
    details: [
      'Selskapet etableres som et norsk aksjeselskap (AS).',
      'Aksjonæravtale mellom gründer og VentureTech.',
      'Selskapsregistrering i Brønnøysundregistrene.',
      'Eierfordeling: typisk 20–40 % til VentureTech, avhengig av bidrag.',
      'IP-overdragelse og styresammensetning.',
    ],
    vtBidrar: 'Juridisk rammeverk, selskapsetablering og strukturering.',
  },
  {
    num: '05',
    title: 'Skalere startupen',
    time: '6–18 måneder',
    details: [
      'Iterere på produktet basert på brukerfeedback for å finne product-market fit.',
      'Vekstmarkedsføring: SEO, betalt annonsering, content, PR.',
      'Teknisk skalering: arkitektur som tåler vekst.',
      'Fundraising: forberede pitch og koble deg med relevante investorer.',
      'Rekruttering: hjelpe med å bygge ditt eget team.',
    ],
    vtBidrar: 'Fortsatt utvikling, markedsføring, vekststrategi og investornettverk.',
  },
];

const faqs = [
  {
    q: 'Hvor mye eierskap tar VentureTech?',
    a: 'Typisk 20–40 %, avhengig av omfanget av vårt bidrag. Dette avtales før vi starter, og er transparent og forutsigbart.',
  },
  {
    q: 'Koster det noe å sende inn en idé?',
    a: 'Nei. Det er helt gratis å sende inn en idé, og du forplikter deg ikke til noe ved innsending.',
  },
  {
    q: 'Må jeg jobbe fulltid med ideen?',
    a: 'Vi foretrekker gründere som kan dedikere seg fulltid, men det er mulig å starte deltid i analysefasen. Ved MVP-bygging forventer vi fullt engasjement.',
  },
  {
    q: 'Hva skjer hvis ideen ikke blir valgt?',
    a: 'Vi gir alltid tilbakemelding. Selv om vi ikke går videre, vil du få en grundig vurdering du kan bruke videre.',
  },
  {
    q: 'Hvilke type ideer passer best?',
    a: 'Vi fokuserer på teknologidrevne løsninger: SaaS, AI-produkter, markedsplasser og automatiseringsverktøy. Markedet bør være stort nok til å rettferdiggjøre en startup.',
  },
];

export default function ProsessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="hero-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="font-mono text-xs text-vt-accent tracking-widest uppercase mb-3 block animate-fade-up">
            Prosessen
          </span>
          <h1
            className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Fra idé til skalerbart selskap
          </h1>
          <p
            className="text-vt-muted text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Fem tydelige steg. Ingen byråkrati. Vi bygger sammen med deg, fra den første ideen til et selskap som vokser.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.05}>
              <div className="bg-vt-surface border border-vt-border rounded-2xl p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-vt-accent/10 border border-vt-accent/20 flex items-center justify-center font-mono text-vt-accent text-sm font-bold">
                    {step.num}
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-xl md:text-2xl">{step.title}</h2>
                    <span className="text-xs font-mono text-vt-dim">{step.time}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {step.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-vt-muted leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-vt-accent mt-2 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="pt-5 border-t border-vt-border">
                  <span className="text-xs font-mono text-vt-dim uppercase tracking-wider">VentureTech bidrar med</span>
                  <p className="text-sm text-vt-muted mt-1">{step.vtBidrar}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-vt-surface/40">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-10">Ofte stilte spørsmål</h2>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-vt-bg border border-vt-border rounded-xl p-6">
                  <h3 className="font-display font-semibold text-base mb-2">{faq.q}</h3>
                  <p className="text-sm text-vt-muted leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <ScrollReveal>
          <div className="max-w-xl mx-auto px-6">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">Klar for å starte?</h2>
            <p className="text-vt-muted mb-8">Det tar 15 minutter å sende inn din idé. Vi svarer innen 5 virkedager.</p>
            <Link
              href="/sok"
              className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-vt-accent text-white font-semibold hover:bg-blue-500 transition-colors"
            >
              Send inn din idé <span className="text-blue-200">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
