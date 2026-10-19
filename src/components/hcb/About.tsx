import { useState } from 'react';
import { ABOUT, BRAND, IMAGES } from '@/data/brand';
import BrandImage from './BrandImage';
import Reveal from './Reveal';

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <section id="about" className="section-shell">
      <div className="grid gap-8 md:grid-cols-12 md:gap-12 lg:gap-16">
        <div className="md:col-span-4 lg:col-span-3">
          <Reveal from="left" className="md:sticky md:top-28">
            <div className="flex items-end gap-5 md:block">
              <BrandImage
                src={IMAGES.headshot}
                fallback={IMAGES.fallbackSilk}
                alt="Studio founder portrait"
                width={640}
                height={800}
                sizes="(min-width: 768px) 260px, (min-width: 640px) 160px, 128px"
                loading="lazy"
                className="aspect-[4/5] w-32 shrink-0 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.45)] ring-1 ring-gold/25 sm:w-40 md:w-full md:max-w-[260px]"
                imgClassName="object-[50%_30%]"
              />

              <div className="md:mt-6">
                <p className="font-serif text-2xl italic text-espresso">Studio founder</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-gold">
                  Strategy · Design · Development
                </p>
                <span className="mt-4 hidden h-px w-12 bg-gold md:block" />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-8 lg:col-span-8 lg:col-start-5">
          <Reveal>
            <p className="eyebrow">About the studio</p>
            <h2 id="about-title" className="display mt-6 text-[clamp(2.6rem,5vw,4.6rem)] text-espresso">
              We build refined digital <em className="italic text-bronze">brand experiences.</em>
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.9] text-espresso/75">
              Thoughtful design and strategic execution for brands that want to be taken seriously.
            </p>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-haspopup="dialog"
              aria-controls="about-dialog"
              className="btn-primary mt-8 inline-flex items-center justify-center"
            >
              Meet the studio
            </button>
          </Reveal>

          <div className="mt-10 max-w-xl space-y-6">
            {ABOUT.story.map((p, i) => (
              <Reveal key={i} delay={60}>
                {p.pull ? (
                  <p className="border-l border-gold pl-5 font-serif text-[1.45rem] italic leading-snug text-espresso md:text-[1.7rem]">
                    {p.text}
                  </p>
                ) : (
                  <p className="text-[15px] leading-[1.9] text-espresso/75">{p.text}</p>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.26em] text-espresso"
            >
              <span className="link-underline">Follow {BRAND.instagramHandle}</span>
            </a>
          </Reveal>
        </div>
      </div>

      {open && (
        <div id="about-dialog" role="dialog" aria-modal="true" aria-labelledby="studio-title" className="fixed inset-0 z-[100] overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center bg-black/50 p-6">
            <div className="max-w-2xl bg-ivory p-8 text-espresso shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)]">
              <p className="eyebrow">Our philosophy</p>
              <h3 id="studio-title" className="display mt-4 text-4xl">The details make the difference.</h3>
              <p className="mt-5 text-[15px] leading-[1.9] text-espresso/75">
                We care about clarity, atmosphere, conversion, and trust. The strongest brands feel effortless and clear — because every detail has been considered.
              </p>
              <button type="button" onClick={() => setOpen(false)} className="btn-primary mt-8">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

