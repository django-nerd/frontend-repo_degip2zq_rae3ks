export default function CTA() {
  return (
    <section id="book-demo" className="py-20 bg-gradient-to-tr from-purple-600 via-blue-600 to-amber-500 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Ready to unlock new revenue?</h3>
            <p className="mt-3 text-white/90">Book a 20-minute discovery call. If we can’t identify a clear ROI path, we’ll tell you right away.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="bg-white/10 backdrop-blur rounded-xl p-4 grid gap-3">
            <input type="text" required placeholder="Full name" className="rounded-md px-3 py-2 bg-white text-gray-900 placeholder-gray-500" />
            <input type="email" required placeholder="Work email" className="rounded-md px-3 py-2 bg-white text-gray-900 placeholder-gray-500" />
            <input type="text" required placeholder="Company" className="rounded-md px-3 py-2 bg-white text-gray-900 placeholder-gray-500" />
            <button className="mt-1 inline-flex items-center justify-center rounded-md bg-black/90 hover:bg-black px-4 py-3 text-white text-sm font-medium">Request a demo</button>
            <p className="text-xs text-white/70">We’ll respond within one business day.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
