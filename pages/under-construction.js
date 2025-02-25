export default function UnderConstruction() {
    return (
      <section className="w-screen h-screen flex flex-col items-center justify-center bg-black text-white text-center p-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">🚧 Under Construction 🚧</h1>
        <p className="text-lg md:text-xl opacity-80 mb-4">
          This page is currently being built. Check back soon!
        </p>
        <a
          href="/"
          className="mt-4 px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition"
        >
          Go Back Home
        </a>
      </section>
    );
  }
  