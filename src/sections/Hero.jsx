export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
        Hi, I’m Julia 👋
      </h1>

      <p className="mt-6 max-w-xl text-lg text-gray-600">
        Software engineer interested in building clean, thoughtful products
        with React and JavaScript.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="https://github.com/YOUR_GITHUB"
          target="_blank"
          className="rounded-xl bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/YOUR_LINKEDIN"
          target="_blank"
          className="rounded-xl border border-gray-300 px-6 py-3 font-medium hover:bg-gray-100 transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
