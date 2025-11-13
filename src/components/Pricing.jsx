export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Simple pricing that scales with you</h2>
          <p className="mt-3 text-gray-600">Transparent monthly retainers with performance incentives.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-black/[0.08] bg-white p-8 shadow-sm">
            <div className="text-xs font-medium text-gray-700">Starter</div>
            <div className="mt-2 text-4xl font-semibold text-gray-900">$3,000<span className="text-base font-normal text-gray-500">/mo</span></div>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li>1 automation or agent</li>
              <li>Implementation in 2 weeks</li>
              <li>Email support</li>
            </ul>
            <a href="#book-demo" className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-3 text-white text-sm font-medium hover:bg-black">Book a demo</a>
          </div>

          <div className="rounded-2xl border-2 border-purple-500 bg-gradient-to-b from-purple-50 to-white p-8 shadow-md">
            <div className="text-xs font-medium text-purple-700">Growth</div>
            <div className="mt-2 text-4xl font-semibold text-gray-900">$6,000<span className="text-base font-normal text-gray-500">/mo</span></div>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li>Up to 3 automations/agents</li>
              <li>Dedicated PM + weekly sprints</li>
              <li>Priority support</li>
              <li>Performance bonus option</li>
            </ul>
            <a href="#book-demo" className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-purple-600 px-4 py-3 text-white text-sm font-medium hover:bg-purple-700">Start with Growth</a>
          </div>

          <div className="rounded-2xl border border-black/[0.08] bg-white p-8 shadow-sm">
            <div className="text-xs font-medium text-gray-700">Scale</div>
            <div className="mt-2 text-4xl font-semibold text-gray-900">Custom</div>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li>Unlimited automations/agents</li>
              <li>SLA + on-call support</li>
              <li>Security & compliance</li>
            </ul>
            <a href="#book-demo" className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-black/[0.1] bg-white px-4 py-3 text-gray-900 text-sm font-medium hover:bg-gray-50">Talk to sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
