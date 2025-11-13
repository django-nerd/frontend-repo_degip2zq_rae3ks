import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] pt-24 overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-gradient-to-tr from-purple-500/10 via-blue-400/10 to-amber-300/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/70 px-3 py-1 text-xs text-gray-700">
              <span className="h-2 w-2 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-amber-400 animate-pulse" />
              Multi–figure AI Automation studio
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Scale with intelligent automations.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              We design, build, and maintain revenue-driving AI systems – agents, workflows, and integrations that pay for themselves.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="#book-demo" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-black">
                Book a demo
                <ArrowRight className="ml-2" size={18} />
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-md border border-black/[0.1] bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50">
                View pricing
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-xs text-gray-500">
              <div>Trusted by 100+ operators</div>
              <div className="h-1 w-1 rounded-full bg-gray-300" />
              <div>Avg ROI 5.2x within 90 days</div>
            </div>
          </div>

          <div className="relative h-[520px] rounded-2xl border border-black/[0.08] bg-white/70 backdrop-blur-sm overflow-hidden shadow-sm">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
