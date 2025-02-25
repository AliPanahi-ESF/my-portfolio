
export default function SmartMobileProject() {
    return (
      <section className="w-full min-h-screen flex flex-col items-center justify-center text-white px-10 py-10 section-noise">
        <h2 className="text-4xl md:text-6xl font-heading text-center mb-10">Smart Mobile Project</h2>
  
        {/* Custom Styling & Content */}
        <div className="w-full max-w-4xl text-lg opacity-80">
          <p>
            The Smart Mobile project focuses on developing a seamless and responsive mobile experience for IoT-based applications.
          </p>
        </div>
  
        {/* Notion Embed or Image Showcase */}
        <iframe
          src="https://e.notionhero.io/e1/p/4f1f943-fb9c0dec36b42cb4076cb7f6a8705a8"
          width="100%"
          height="600"
          frameBorder="0"
          allowFullScreen
          className="rounded-3xl shadow-lg mt-6"
        ></iframe>
          <a
          href="/selected-work"
          className="mt-6 px-6 py-3 bg-gray-700 text-white rounded-full hover:scale-105 transition"
        >
          Back to Portfolio
        </a>
      </section>
    );
  }
  