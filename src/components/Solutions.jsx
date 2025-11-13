import { CheckCircle2 } from 'lucide-react'

const solutions = [
  {
    title: 'AI Voice Agents',
    desc: '24/7 inbound/outbound agents that qualify leads, schedule, and handle support with human-like speech.',
    bullets: ['Natural language', 'CRM + calendar integrated', 'Analytics & QA'],
  },
  {
    title: 'Automation Pipelines',
    desc: 'Zapier-free, resilient workflows that move data across your stack with retries, queues, and observability.',
    bullets: ['Browser automation', 'Data enrichment', 'Webhook handlers'],
  },
  {
    title: 'Custom GPTs & Tools',
    desc: 'Proprietary agents trained on your SOPs that draft content, process docs, and assist internal teams.',
    bullets: ['RAG + vector search', 'Guardrails & approvals', 'Role-based access'],
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">What we build</h2>
          <p className="mt-3 text-gray-600">Deployment-ready systems tailored to your revenue goals.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <div key={s.title} className="rounded-xl border border-black/[0.08] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              <ul className="mt-4 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="text-purple-500" size={18} /> {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
