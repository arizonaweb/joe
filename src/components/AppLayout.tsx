import { lazy, Suspense, useCallback, useState } from 'react';
import { BRAND, NAV_LINKS, SITE_COPY } from '@/data/brand';
import Nav from './hcb/Nav';
import Hero from './hcb/Hero';
import ServicesShowcase from './hcb/ServicesShowcase';
import About from './hcb/About';
import Footer from './hcb/Footer';
import Community from './hcb/Community';
import IntakeQuestionnaire from './hcb/IntakeQuestionnaire';

export default function AppLayout() {
  const [serviceId, setServiceId] = useState<'strategy' | 'design' | 'build' | 'optimize' | 'support'>('design');

  const openBooking = useCallback(() => {
    const target = document.getElementById('questionnaire');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleService = useCallback((id: 'strategy' | 'design' | 'build' | 'optimize' | 'support') => {
    setServiceId(id);
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-espresso">
      <Nav onBook={openBooking} />

      <main>
        <Hero onBook={openBooking} />
        <About />
        <ServicesShowcase selected={serviceId} onSelect={handleService} onBook={openBooking} />
        <section id="process" className="bg-cream px-6 py-20 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Our process</p>
            <h2 className="display mt-5 text-[clamp(2.4rem,4vw,4.5rem)] text-espresso">
              Elegance meets <em className="italic text-bronze">clarity.</em>
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-4">
              {[
                ['01', 'Discovery', 'We learn what your business is really selling and who it is for.'],
                ['02', 'Strategy', 'We sharpen your positioning, structure, and offer so the site feels clear and premium.'],
                ['03', 'Design & build', 'We create the visual system and build a polished experience that earns attention.'],
                ['04', 'Launch & refine', 'We launch with intention and optimize the flow around real customer behavior.'],
              ].map(([index, title, body]) => (
                <div key={index} className="rounded-none border border-espresso/10 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.3)]">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-gold">{index}</p>
                  <h3 className="mt-4 font-serif text-3xl text-espresso">{title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-espresso/70">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="bg-espresso px-6 py-16 text-cream sm:px-10">
          <div className="mx-auto max-w-6xl">
            <p className="text-[11px] uppercase tracking-[0.32em] text-gold">Trusted by premium brands</p>
            <div className="mt-8 grid gap-4 md:grid-cols-5">
              {['Luxury Hospitality', 'Consulting', 'Private Practice', 'Boutique Services', 'High-end Retail'].map((name) => (
                <div key={name} className="border border-cream/15 px-4 py-5 text-center text-[12px] uppercase tracking-[0.2em] text-cream/80">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <IntakeQuestionnaire />
        <Community />
      </main>

      <Footer onBook={openBooking} />
    </div>
  );
}

