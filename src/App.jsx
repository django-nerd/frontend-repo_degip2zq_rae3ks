import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Check, PhoneCall, Star, Sparkles, Shield, Rocket, Calendar, PlayCircle, Zap, Bot, Headphones } from 'lucide-react'

function NavBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400"></div>
          <span className="font-extrabold tracking-tight text-gray-900 text-lg">Aura Automations</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#how" className="hover:text-gray-900">How it works</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#testimonials" className="hover:text-gray-900">Results</a>
          <a href="#faq" className="hover:text-gray-900">FAQ</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#demo" className="px-4 py-2 rounded-lg text-sm font-semibold border border-gray-300 hover:bg-gray-50">Book a demo</a>
          <a href="#pricing" className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 hover:opacity-90 flex items-center gap-2">
            Get started <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(124,58,237,0.10)_0%,rgba(37,99,235,0.10)_35%,rgba(249,115,22,0.08)_100%)]" />
        <div className="absolute inset-x-0 -top-24 h-[40rem] bg-gradient-to-b from-white via-white/70 to-transparent" />
      </div>

      <div className="absolute inset-0 opacity-90 pointer-events-none">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 bg-white/60 backdrop-blur text-xs font-medium text-gray-700 mb-4">
            <Sparkles className="text-purple-600" size={14} /> Trusted by 7+ figure operators
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Scale with AI Automations that print revenue
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            We build autonomous workflows, voice agents, and sales ops that replace manual work and unlock new profit. Done-for-you in weeks, not months.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#demo" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800">
              <PhoneCall size={18} /> Book a demo
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold border border-gray-300 bg-white/70 backdrop-blur hover:bg-white">
              <PlayCircle size={18} /> See pricing
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-1"><Shield size={16} className="text-blue-600"/> SOC2-ready</div>
            <div className="flex items-center gap-1"><Rocket size={16} className="text-purple-600"/> Launch in 2-4 weeks</div>
            <div className="flex items-center gap-1"><Zap size={16} className="text-orange-500"/> ROI-first delivery</div>
          </div>
        </div>
        <div className="relative h-[420px] md:h-[560px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-3xl ring-1 ring-white/40 shadow-2xl overflow-hidden">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  )
}

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="p-6 rounded-2xl bg-white/70 backdrop-blur border border-white/40 shadow-sm hover:shadow-md transition-shadow">
    <div className="h-10 w-10 rounded-xl grid place-items-center bg-gradient-to-tr from-purple-600 via-blue-600 to-orange-500 text-white mb-4">
      <Icon size={20} />
    </div>
    <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
    <p className="text-gray-600 mt-1 text-sm">{desc}</p>
  </div>
)

function Features() {
  const items = [
    { icon: Bot, title: 'AI Voice & Chat Agents', desc: '24/7 voice and chat agents for lead capture, qualification, support and scheduling.' },
    { icon: Zap, title: 'Automation Ops', desc: 'Connect CRMs, ads, emails, outreach and fulfillment to remove manual steps.' },
    { icon: Rocket, title: 'Revenue Playbooks', desc: 'Battle-tested flows that increase reply rates, show rates and conversions.' },
    { icon: Shield, title: 'Security & Governance', desc: 'Enterprise-grade security, role-based access and audit-friendly logs.' },
  ]
  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(124,58,237,0.10)_0%,rgba(37,99,235,0.10)_35%,rgba(249,115,22,0.08)_100%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Automate the boring, amplify the impact</h2>
          <p className="mt-3 text-gray-700">From prospecting to post-sale support, we deploy automations that directly move the revenue needle.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f, i) => <Feature key={i} {...f} />)}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { title: 'Discovery', desc: 'Map current workflows, data sources and ROI targets.', icon: Calendar },
    { title: 'Design', desc: 'We blueprint the agent/automation architecture with clear KPIs.', icon: Sparkles },
    { title: 'Build', desc: 'Implement, integrate and test with your stack and datasets.', icon: Rocket },
    { title: 'Scale', desc: 'Iterate, A/B test and roll out across teams to maximize ROI.', icon: Zap },
  ]
  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Proven, streamlined delivery</h2>
          <p className="mt-3 text-gray-700">A white-glove process focused on speed, quality and measurable outcomes.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="h-10 w-10 rounded-xl grid place-items-center bg-gradient-to-tr from-purple-600 via-blue-600 to-orange-500 text-white mb-4">
                <s.icon size={20} />
              </div>
              <h3 className="font-semibold text-gray-900">{s.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '$3,000',
      tag: 'Best for pilots',
      features: [
        '1 core automation or agent',
        'Up to 2 integrations',
        'Analytics dashboard',
        'Email support',
      ],
      cta: 'Start pilot',
    },
    {
      name: 'Growth',
      price: '$7,500',
      tag: 'Most popular',
      features: [
        '3-5 revenue automations',
        'Voice + chat agent',
        'CRM + outreach + ads integrations',
        'Weekly optimization sprints',
        'Priority support',
      ],
      cta: 'Scale revenue',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      tag: 'For complex stacks',
      features: [
        'Unlimited workflows',
        'SSO, RBAC, audit logs',
        'Dedicated solutions team',
        'Security reviews & SLAs',
      ],
      cta: 'Talk to sales',
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Simple, ROI-first pricing</h2>
          <p className="mt-3 text-gray-700">Engagements designed to pay for themselves quickly. Cancel anytime.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <div key={i} className={`relative p-6 rounded-2xl border ${t.highlight ? 'bg-gray-900 text-white border-gray-800' : 'bg-white border-gray-200'} shadow-sm`}>
              {t.highlight && (
                <div className="absolute -top-3 left-6 text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 text-white">Most popular</div>
              )}
              <h3 className={`text-xl font-semibold ${t.highlight ? 'text-white' : 'text-gray-900'}`}>{t.name}</h3>
              <p className={`mt-1 text-sm ${t.highlight ? 'text-gray-300' : 'text-gray-600'}`}>{t.tag}</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className={`text-3xl font-extrabold ${t.highlight ? 'text-white' : 'text-gray-900'}`}>{t.price}</span>
                <span className={`text-sm ${t.highlight ? 'text-gray-400' : 'text-gray-500'}`}>/ month</span>
              </div>
              <ul className="mt-6 space-y-2">
                {t.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check size={18} className={`${t.highlight ? 'text-blue-400' : 'text-purple-600'} shrink-0 mt-0.5`} />
                    <span className={`text-sm ${t.highlight ? 'text-gray-200' : 'text-gray-700'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#demo" className={`mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold ${t.highlight ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
                {t.cta} <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const quotes = [
    {
      name: 'Elena M.',
      role: 'COO, DTC brand',
      text: 'We replaced two full-time roles with an AI agent that books calls and follows up across SMS + email. 28% more demos, in 3 weeks.',
    },
    {
      name: 'Jason R.',
      role: 'CEO, B2B services',
      text: 'Their automations stitched our CRM, ads, and outreach. Pipeline velocity up 41% and we finally have clean data.',
    },
    {
      name: 'Priya K.',
      role: 'Head of Growth, SaaS',
      text: 'From discovery to rollout, the team was laser-focused on revenue. Best agency experience we have had.',
    },
  ]
  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What operators say</h2>
          <p className="mt-3 text-gray-700">Real outcomes from real teams growing with AI.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="flex items-center gap-1 text-yellow-500 mb-3">
                {Array.from({ length: 5 }).map((_, idx) => <Star key={idx} size={16} fill="#eab308" className="text-yellow-500" />)}
              </div>
              <p className="text-gray-800">“{q.text}”</p>
              <div className="mt-4 text-sm text-gray-600">{q.name} • {q.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DemoCTA() {
  return (
    <section id="demo" className="py-20 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(124,58,237,0.12)_0%,rgba(37,99,235,0.10)_35%,rgba(249,115,22,0.08)_100%)]" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 rounded-3xl bg-gray-900 text-white border border-gray-800 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold">Book a 20-min strategy call</h3>
              <p className="mt-2 text-gray-300">Get a free ROI blueprint tailored to your stack and goals. No fluff, just numbers.</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><Check size={18} className="text-blue-400"/> ROI estimate and roadmap</li>
                <li className="flex items-center gap-2"><Check size={18} className="text-blue-400"/> Tech stack audit</li>
                <li className="flex items-center gap-2"><Check size={18} className="text-blue-400"/> Example automations and playbooks</li>
              </ul>
            </div>
            <div className="space-y-3">
              <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 px-5 py-4 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100">
                <Calendar size={18}/> Schedule on Calendly
              </a>
              <a href="#pricing" className="inline-flex w-full items-center justify-center gap-2 px-5 py-4 rounded-xl border border-gray-700 hover:bg-gray-800 font-semibold">
                <PlayCircle size={18}/> See plans
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const items = [
    {
      q: 'How fast can we launch?',
      a: 'Most pilots go live in 2–4 weeks. Timeline depends on integrations and data access.'
    },
    {
      q: 'Do you replace our team?',
      a: 'We augment your team with automations that remove repetitive tasks so your ops can focus on higher-leverage work.'
    },
    {
      q: 'What does success look like?',
      a: 'North-star metrics include booked demos, reply rates, show rates, pipeline velocity and CAC/LTV efficiency.'
    },
    {
      q: 'Data security?',
      a: 'We follow best practices for data handling, encryption, and access control. SOC2-ready processes available.'
    },
  ]
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">Frequently asked questions</h2>
        <div className="mt-10 divide-y divide-gray-200 border rounded-2xl">
          {items.map((it, i) => (
            <details key={i} className="group p-6">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="font-semibold text-gray-900">{it.q}</span>
                <span className="ml-4 h-6 w-6 grid place-items-center rounded-full border border-gray-300 text-gray-600 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-gray-600">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400"></div>
          <span className="font-semibold text-gray-800">Aura Automations</span>
        </div>
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} Aura Labs Inc. All rights reserved.</div>
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Terms</a>
          <a href="#demo" className="inline-flex items-center gap-1 hover:text-gray-900"><Headphones size={16}/> Support</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="font-[Inter,Manrope,IBM Plex Sans,system-ui] text-gray-900 bg-white">
      <NavBar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <DemoCTA />
      <FAQ />
      <Footer />
    </div>
  )
}
