import { useRouter } from "next/router";

const notionPages = {
  hud: "https://alipanahi.notion.site/ebd/b718f4fe30e1446eaec7f864e1c4731b",
  "smart-mobile": "https://alipanahi.notion.site/ebd/f4f278d5ba7f478587de1786872bee2a",
};

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!notionPages[slug]) {
    return <p className="text-white text-center">Project not found.</p>;
  }

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center text-white px-10 py-10 section-noise">
      <h2 className="text-4xl md:text-6xl font-heading text-center mb-10">Project Details</h2>

      {/* Notion Embedded Iframe */}
      <iframe
        src={notionPages[slug]}
        width="100%"
        height="80vh"
        frameBorder="0"
        allowFullScreen
        className="rounded-3xl shadow-lg"
      ></iframe>

      {/* Back Button */}
      <a
        href="/selected-work"
        className="mt-6 px-6 py-3 bg-gray-700 text-white rounded-full hover:scale-105 transition"
      >
        Back to Portfolio
      </a>
    </section>
  );
}
