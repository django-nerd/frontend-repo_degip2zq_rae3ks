export default function Logos() {
  const brands = ['Linear', 'Notion', 'Vercel', 'Ramp', 'OpenAI', 'Stripe']
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center opacity-70">
          {brands.map((b) => (
            <div key={b} className="h-10 flex items-center justify-center text-gray-500 text-sm tracking-wide border border-black/[0.06] rounded-md bg-white">
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
