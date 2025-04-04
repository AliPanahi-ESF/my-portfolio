export default function SmartMobileProject() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center text-white px-10 py-10 bg-black">
      <h2 className="text-4xl md:text-6xl font-heading text-center mb-10">User Interface for Edorado </h2>

      {/* Custom Styling & Content */}
      <div className="w-full max-w-4xl text-lg opacity-80">
        <p>
          You can see the User Interface Design for Edorado Electric 8s below.
        </p>
      </div>

      {/* Notion Embed or Image Showcase */}
            <iframe
        src="https://www.youtube.com/embed/xdAH9EEHEo0?si=AttfLIrpDPUyFp-t"
        width="100%"
        height="800"
        frameBorder="0"
        allowFullScreen
        className="rounded-3xl shadow-lg mt-6"
      ></iframe>
            <div className="w-full max-w-4xl mt-6">
        <img
          src="/Edorado-explanation.jpg" // Ensure this matches the public folder path
          alt="Project Brief"
          className="w-full rounded-3xl shadow-lg"
        />
      </div>
        <a
        href="/selected-work"
        className="mt-6 px-6 py-3 bg-gray-700 text-white rounded-full hover:scale-105 transition"
      >
        Back to Portfolio
      </a>
    </section>
  );
}
