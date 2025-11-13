import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/60 border-b border-black/[0.06]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-purple-600 via-blue-500 to-amber-400 flex items-center justify-center text-white">
              <Sparkles size={18} />
            </div>
            <span className="font-semibold tracking-tight">Aurora Automations</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} className="hover:text-gray-900 transition-colors">
                {n.label}
              </a>
            ))}
            <a href="#book-demo" className="inline-flex items-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-black">
              Book a demo
            </a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((n) => (
                <a key={n.label} href={n.href} className="px-2 py-2 rounded-md hover:bg-gray-100" onClick={() => setOpen(false)}>
                  {n.label}
                </a>
              ))}
              <a href="#book-demo" className="mt-2 inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-black" onClick={() => setOpen(false)}>
                Book a demo
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
