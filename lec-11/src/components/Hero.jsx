export default function Hero() {
  return (
    <section id="home" className="bg-indigo-600 text-white">
      <div className="mx-auto max-w-6xl px-4 py-24 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Welcome to MyShop</h1>
        <p className="mb-8 text-lg text-indigo-100">Find the best products at the best prices.</p>
        <a href="#products" className="rounded-lg bg-white px-6 py-3 font-semibold text-indigo-600 hover:bg-indigo-50">
          Shop Now
        </a>
      </div>
    </section>
  )
}