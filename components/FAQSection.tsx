type FAQSectionProps = {
  faqs: {
    question: string;
    answer: string;
  }[];
};

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="text-xl font-semibold text-slate-950">Frequently asked questions</h2>
      <div className="mt-4 divide-y divide-slate-200">
        {faqs.map((faq) => (
          <details className="group py-4" key={faq.question}>
            <summary className="cursor-pointer list-none font-semibold text-slate-900">
              {faq.question}
            </summary>
            <p className="mt-2 leading-7 text-slate-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
