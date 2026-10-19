import { useAppContext } from '@/contexts/AppContext';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useMemo, useState } from 'react';

type Question = {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'multiselect';
  options?: string[];
  required?: boolean;
  placeholder?: string;
};

const questionSchema: Question[][] = [
  [
    { id: 'businessName', label: 'Business or brand name', type: 'text', required: true, placeholder: 'Your brand name' },
    { id: 'websiteGoal', label: 'What is the main goal of this website?', type: 'textarea', required: true, placeholder: 'Lead generation, new launch, brand refresh, etc.' },
    { id: 'budget', label: 'Estimated project budget', type: 'select', options: ['Under $5k', '$5k–$10k', '$10k–$25k', '$25k+'], required: true },
  ],
  [
    { id: 'audience', label: 'Who are you trying to attract?', type: 'textarea', required: true, placeholder: 'Describe your ideal client or customer.' },
    { id: 'positioning', label: 'What makes the brand different?', type: 'textarea', required: true, placeholder: 'Your differentiators, story, or positioning.' },
    { id: 'references', label: 'Any reference brands or examples you love?', type: 'textarea', placeholder: 'Links or names' },
  ],
  [
    { id: 'designDirection', label: 'What design style feels right?', type: 'multiselect', options: ['Minimal luxury', 'Editorial', 'Modern premium', 'Warm and calm', 'Bold and confident'], required: true },
    { id: 'features', label: 'What pages or features are required?', type: 'textarea', placeholder: 'Homepage, services, portfolio, inquiry form, booking, CMS, e-commerce, etc.' },
    { id: 'timeline', label: 'Desired launch timeline', type: 'select', options: ['ASAP', 'Within 1 month', '2–3 months', 'Flexible'], required: true },
  ],
  [
    { id: 'brandAssets', label: 'Do you have existing brand assets or content?', type: 'textarea', placeholder: 'Logo, fonts, copy, imagery, previous site links, social accounts' },
    { id: 'contactName', label: 'Primary contact name', type: 'text', required: true },
    { id: 'contactEmail', label: 'Email address', type: 'text', required: true, placeholder: 'name@email.com' },
  ],
];

export default function IntakeQuestionnaire() {
  const { formAnswers, updateAnswer } = useAppContext();
  const [step, setStep] = useState(0);
  const activeQuestions = questionSchema[step];
  const totalSteps = questionSchema.length;
  const progress = useMemo(() => ((step + 1) / totalSteps) * 100, [step, totalSteps]);

  const isStepComplete = () =>
    activeQuestions.every((q) => {
      const value = formAnswers[q.id];
      if (!q.required) return true;
      if (Array.isArray(value)) return value.length > 0;
      return String(value ?? '').trim().length > 0;
    });

  const nextStep = () => {
    if (isStepComplete() && step < totalSteps - 1) setStep((prev) => prev + 1);
  };

  const previousStep = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const submitForm = () => {
    if (!isStepComplete()) return;

    const entries = questionSchema.flat().map((q) => {
      const value = formAnswers[q.id];
      const finalValue = Array.isArray(value) ? value.join(', ') : value ?? 'Not provided';
      return `${q.label}: ${finalValue}`;
    });

    const mailBody = [
      'Hello Pro Az Web,',
      '',
      'I’d like to finalize my project. Here are my answers:',
      '',
      ...entries,
      '',
      'Please review and send the next steps.',
      '',
      'Thank you.',
    ].join('\n');

    window.location.href = `mailto:aznic@usa.com?subject=${encodeURIComponent('Finalize Pro Az Web project')}&body=${encodeURIComponent(mailBody)}`;
  };

  return (
    <section id="questionnaire" className="bg-ivory px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-5xl rounded-none border border-espresso/10 bg-white p-6 shadow-[0_25px_60px_-35px_rgba(0,0,0,0.35)] md:p-10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="eyebrow">Project intake</p>
            <h2 className="display mt-4 text-[clamp(2.4rem,4vw,4rem)] text-espresso">Tell us about your next website.</h2>
          </div>
          <div className="text-right text-[11px] uppercase tracking-[0.25em] text-espresso/55">
            Step {step + 1} / {totalSteps}
          </div>
        </div>

        <div className="mt-6 h-2 w-full overflow-hidden bg-espresso/5">
          <div className="h-full bg-gold transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {activeQuestions.map((question) => (
            <div key={question.id} className={question.type === 'textarea' || question.type === 'multiselect' ? 'md:col-span-2' : ''}>
              <label className="field-label">{question.label}{question.required ? ' *' : ''}</label>

              {question.type === 'text' && (
                <input
                  value={String(formAnswers[question.id] ?? '')}
                  onChange={(e) => updateAnswer(question.id, e.target.value)}
                  className="field"
                  placeholder={question.placeholder}
                />
              )}

              {question.type === 'textarea' && (
                <textarea
                  value={String(formAnswers[question.id] ?? '')}
                  onChange={(e) => updateAnswer(question.id, e.target.value)}
                  className="field min-h-28"
                  placeholder={question.placeholder}
                />
              )}

              {question.type === 'select' && (
                <select
                  value={String(formAnswers[question.id] ?? '')}
                  onChange={(e) => updateAnswer(question.id, e.target.value)}
                  className="field cursor-pointer"
                >
                  <option value="">Select</option>
                  {question.options?.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              )}

              {question.type === 'multiselect' && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {question.options?.map((option) => {
                    const current = Array.isArray(formAnswers[question.id]) ? formAnswers[question.id] : [];
                    const selected = current.includes(option);
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          const next = selected ? current.filter((item) => item !== option) : [...current, option];
                          updateAnswer(question.id, next);
                        }}
                        className={`rounded-full border px-4 py-2 text-[12px] uppercase tracking-[0.18em] ${selected ? 'border-espresso bg-espresso text-ivory' : 'border-espresso/20 bg-ivory text-espresso'}`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
          <button type="button" onClick={previousStep} disabled={step === 0} className="btn-ghost disabled:cursor-not-allowed disabled:opacity-50">
            Back
          </button>
          {step < totalSteps - 1 ? (
            <button type="button" onClick={nextStep} disabled={!isStepComplete()} className="btn-primary group disabled:cursor-not-allowed disabled:opacity-50">
              Continue
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.5} />
            </button>
          ) : (
            <button type="button" onClick={submitForm} disabled={!isStepComplete()} className="btn-primary group disabled:cursor-not-allowed disabled:opacity-50">
              Request finalization
              <CheckCircle2 className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

