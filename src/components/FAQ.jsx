const faqs = [
  {
    q: 'How fast can we launch?',
    a: 'Most engagements go live within 2–4 weeks depending on scope. We prioritize quick wins and iterate weekly.',
  },
  {
    q: 'What stack do you use?',
    a: 'Best tool for the job. We build with modern LLMs, vector DBs, serverless functions, queues, and robust monitoring.',
  },
  {
    q: 'How do you measure ROI?',
    a: 'We align to a single KPI per project, set baselines, and report impact weekly with dashboards and recordings.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">FAQ</h2>
          <p className="mt-3 text-gray-600">Answers to the most common questions.</p>
        </div>

        <div className="mt-12 grid gap-4">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-black/[0.08] bg-white p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-medium text-gray-900 flex items-center justify-between">
                {f.q}
                <span className="ml-4 text-gray-400 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
