const quotes = [
  {
    name: 'Maya R.',
    role: 'COO, DTC brand',
    text: 'Their voice agent now qualifies 1,200+ leads monthly and books 200+ calls. Our CAC dropped 28% in 60 days.',
  },
  {
    name: 'Anthony P.',
    role: 'Head of Ops, B2B SaaS',
    text: 'Automation pipelines replaced 17 Zapier zaps and 4 contractors. Zero downtime and full observability.',
  },
  {
    name: 'Lara K.',
    role: 'Founder, Media',
    text: 'Custom GPTs transformed our content ops. Draft time went from hours to minutes with approvals built-in.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Client results</h2>
          <p className="mt-3 text-gray-600">End-to-end partnership with measurable outcomes.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q) => (
            <div key={q.name} className="rounded-xl border border-black/[0.08] bg-white p-6 shadow-sm">
              <p className="text-gray-800">“{q.text}”</p>
              <div className="mt-4 text-sm text-gray-600">{q.name} · {q.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
