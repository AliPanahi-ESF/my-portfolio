
export default function SmartMobileProject() {
    return (
      <section className="w-full min-h-screen flex flex-col items-center justify-center text-white px-10 py-10 section-noise">
        <h2 className="text-4xl md:text-6xl font-heading text-center mb-10">Loyalty of Lucifer</h2>
  
        {/* Custom Styling & Content */}
        <div className="w-full max-w-4xl text-lg opacity-80">
          <p>
          Student Project | Team Project | Client: Lucifer Coffee Roasters & Team Liquid
          </p>
        </div>
  
        {/* Notion Embed or Image Showcase */}
        <iframe
          src="https://alipanahi.notion.site/ebd/b718f4fe30e1446eaec7f864e1c4731b"
          width="100%"
          height="900"
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
  