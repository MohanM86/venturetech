'use client';
import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const categories = [
  'SaaS',
  'AI / maskinlæring',
  'Markedsplass',
  'Automatisering',
  'Fintech',
  'Helse-tech',
  'Annet',
];

export default function SokPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 rounded-2xl bg-vt-green/10 border border-vt-green/20 flex items-center justify-center text-vt-green text-2xl mx-auto mb-6">
            ✓
          </div>
          <h1 className="font-display font-bold text-3xl mb-4">Takk for din idé!</h1>
          <p className="text-vt-muted leading-relaxed mb-8">
            Vi har mottatt søknaden din og vil gjennomgå den grundig. Du hører fra oss innen 5 virkedager.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-vt-accent hover:text-blue-400 transition-colors"
          >
            ← Tilbake til forsiden
          </a>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="hero-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="font-mono text-xs text-vt-accent tracking-widest uppercase mb-3 block animate-fade-up">
            For gründere
          </span>
          <h1
            className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Send inn din idé
          </h1>
          <p
            className="text-vt-muted text-lg max-w-2xl leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Har du en idé til et teknologiselskap? Vi vil høre fra deg. Det tar ca. 15 minutter å fylle ut skjemaet.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* What we look for */}
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
              {[
                { icon: '◎', title: 'Reelt problem', desc: 'Noen har dette problemet i dag og er villige til å betale for en løsning.' },
                { icon: '⟨/⟩', title: 'Teknologidrevet', desc: 'Løsningen kan bygges som en digital tjeneste — SaaS, AI, markedsplass eller plattform.' },
                { icon: '↗', title: 'Stort nok marked', desc: 'Det finnes et adresserbart marked som rettferdiggjør å bygge et selskap.' },
                { icon: '◈', title: 'Unik gründer-edge', desc: 'Du forstår markedet, bransjen eller brukerne bedre enn de fleste.' },
              ].map((item) => (
                <div key={item.title} className="bg-vt-surface border border-vt-border rounded-xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-vt-card flex items-center justify-center text-vt-accent font-mono text-sm mb-3">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-vt-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="bg-vt-surface border border-vt-border rounded-2xl p-8 md:p-10">
              {/* Section: Personal */}
              <div className="mb-10">
                <h2 className="font-display font-semibold text-lg mb-6 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-vt-accent/10 border border-vt-accent/20 flex items-center justify-center text-vt-accent text-xs font-mono">1</span>
                  Om deg
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="Fullt navn" name="name" required />
                  <Field label="E-postadresse" name="email" type="email" required />
                  <Field label="Telefonnummer" name="phone" type="tel" />
                  <Field label="LinkedIn-profil" name="linkedin" placeholder="https://linkedin.com/in/..." />
                  <Field label="Bosted (by/region)" name="location" />
                </div>
              </div>

              {/* Section: Idea */}
              <div className="mb-10">
                <h2 className="font-display font-semibold text-lg mb-6 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-vt-accent/10 border border-vt-accent/20 flex items-center justify-center text-vt-accent text-xs font-mono">2</span>
                  Om ideen
                </h2>
                <div className="space-y-4">
                  <Field label="Hva heter konseptet/ideen?" name="concept" placeholder="Arbeidstittel" required />
                  <TextArea
                    label="Beskriv problemet du vil løse"
                    name="problem"
                    placeholder="Hvem har problemet? Hvor stort er det? Hvordan løses det i dag?"
                    required
                  />
                  <TextArea
                    label="Beskriv løsningen din"
                    name="solution"
                    placeholder="Hva er produktet? Hvordan fungerer det for brukeren?"
                    required
                  />
                  <Field label="Hvem er målgruppen?" name="target" placeholder="Hvem er de første brukerne/kundene?" required />
                  <div>
                    <label className="block text-sm text-vt-muted mb-2">Kategori</label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <label
                          key={cat}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-vt-bg border border-vt-border cursor-pointer hover:border-vt-accent/40 transition-colors has-[:checked]:border-vt-accent has-[:checked]:bg-vt-accent/10"
                        >
                          <input type="radio" name="category" value={cat} className="sr-only" />
                          <span className="text-sm text-vt-muted">{cat}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section: Background */}
              <div className="mb-10">
                <h2 className="font-display font-semibold text-lg mb-6 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-vt-accent/10 border border-vt-accent/20 flex items-center justify-center text-vt-accent text-xs font-mono">3</span>
                  Din bakgrunn
                </h2>
                <div className="space-y-4">
                  <TextArea
                    label="Hva er din bakgrunn?"
                    name="background"
                    placeholder="Utdanning, arbeidserfaring, relevant kompetanse"
                    required
                  />
                  <TextArea
                    label="Hvorfor er du riktig person til å bygge dette?"
                    name="why_you"
                    placeholder="Domeneekspertise, nettverk, motivasjon"
                  />
                  <div>
                    <label className="block text-sm text-vt-muted mb-2">Jobber du fulltid med dette?</label>
                    <div className="flex gap-3">
                      {['Ja, fulltid', 'Nei, deltid/annen jobb'].map((opt) => (
                        <label
                          key={opt}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-vt-bg border border-vt-border cursor-pointer hover:border-vt-accent/40 transition-colors has-[:checked]:border-vt-accent has-[:checked]:bg-vt-accent/10"
                        >
                          <input type="radio" name="fulltime" value={opt} className="sr-only" />
                          <span className="text-sm text-vt-muted">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section: Additional */}
              <div className="mb-10">
                <h2 className="font-display font-semibold text-lg mb-6 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-vt-accent/10 border border-vt-accent/20 flex items-center justify-center text-vt-accent text-xs font-mono">4</span>
                  Tillegg
                </h2>
                <div className="space-y-4">
                  <TextArea
                    label="Er det noe annet du vil fortelle oss?"
                    name="additional"
                    placeholder="Lenke til prototype, nettside, artikler, videoer osv."
                  />
                  <Field label="Hvordan hørte du om VentureTech?" name="source" />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-glow w-full py-4 rounded-xl bg-vt-accent text-white font-semibold hover:bg-blue-500 transition-colors text-base"
              >
                Send inn søknad →
              </button>
              <p className="text-xs text-vt-dim text-center mt-4">
                Vi behandler alle opplysninger konfidensielt. Du hører fra oss innen 5 virkedager.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = 'text', required = false, placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm text-vt-muted mb-2">
        {label} {required && <span className="text-vt-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg bg-vt-bg border border-vt-border text-sm text-white placeholder:text-vt-dim focus:outline-none focus:border-vt-accent/50 focus:ring-1 focus:ring-vt-accent/20 transition-colors"
      />
    </div>
  );
}

function TextArea({ label, name, required = false, placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm text-vt-muted mb-2">
        {label} {required && <span className="text-vt-accent">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        rows={4}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg bg-vt-bg border border-vt-border text-sm text-white placeholder:text-vt-dim focus:outline-none focus:border-vt-accent/50 focus:ring-1 focus:ring-vt-accent/20 transition-colors resize-y"
      />
    </div>
  );
}
