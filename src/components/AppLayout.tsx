import { lazy, Suspense, useCallback, useState } from 'react';
import { BRAND, NAV_LINKS, SITE_COPY } from '@/data/brand';
import { useAppContext } from '@/contexts/AppContext';
import Nav from './hcb/Nav';
import Hero from './hcb/Hero';
import ServicesShowcase from './hcb/ServicesShowcase';
import About from './hcb/About';
import Footer from './hcb/Footer';
import Community from './hcb/Community';
import IntakeQuestionnaire from './hcb/IntakeQuestionnaire';

const BookingModal = lazy(() => import('./hcb/BookingModal'));

export default function AppLayout() {
  const { formAnswers } = useAppContext();
  const [serviceId, setServiceId] = useState<'strategy' | 'design' | 'build' | 'optimize' | 'support'>('design');

  const brandName = String(formAnswers.businessName ?? 'Pro Az Web').trim() || 'Pro Az Web';
  const introGoal = String(formAnswers.websiteGoal ?? 'Professional website design for a business ready to look established and convert more.').trim();

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
    <div
      className="min-h-screen bg-ivory text-espresso select-none"
      onContextMenu={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
      onCut={(e) => e.preventDefault()}
    >
      <div className="fixed inset-x-0 top-0 z-[60] border-b border-amber-500/40 bg-[#1b1a18]/90 px-4 py-2 text-center text-[10px] uppercase tracking-[0.28em] text-amber-100">
        Preview mode · Request unlock to finalize purchase · aznic@usa.com
      </div>

      <main className="pt-[46px]">
        <Hero onBook={openBooking} brandName={brandName} goal={introGoal} />
        <About brandName={brandName} />
        <ServicesShowcase selected={serviceId} onSelect={handleService} onBook={openBooking} brandName={brandName} />

        <section id="process" className="bg-cream px-6 py-20 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Our process</p>
            <h2 className="display mt-5 text-[clamp(2.4rem,4vw,4.5rem)] text-espresso">
              Premium clarity for <em className="italic text-bronze">{brandName}</em>
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
        <Community brandName={brandName} />
      </main>

      <Footer onBook={openBooking} brandName={brandName} />

      <Suspense fallback={null}>
        <div className="fixed bottom-3 right-3 z-[70]">
          <a
            href="mailto:aznic@usa.com?subject=Finalize%20purchase%20for%20Pro%20Az%20Web&body=Hello%20Aznic,%20I%20want%20to%20finalize%20the%20purchase%20for%20Pro%20Az%20Web.%20Please%20review%20the%20project%20and%20send%20the%20final%20delivery%20details."
            className="inline-flex items-center rounded-full bg-espresso px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-ivory shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
          >
            Request unlock
          </a>
        </div>
      </Suspense>
    </div>
  );
}

