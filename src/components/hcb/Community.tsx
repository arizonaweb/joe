import { Link } from 'react-router-dom';

export default function Community() {
  return (
    <section id="pros" className="bg-cream px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow">Who we work with</p>
        <h2 className="display mt-4 text-4xl sm:text-5xl">Beautiful brand systems for <em className="text-bronze">ambitious businesses.</em></h2>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-espresso/75">
          We partner with founder-led brands, premium service businesses, lifestyle companies, and teams ready to present themselves at a higher level.
        </p>
        <Link to="#questionnaire" className="mt-6 inline-block text-sm underline underline-offset-4">
          Start your intake questionnaire
        </Link>
      </div>
    </section>
  );
}

