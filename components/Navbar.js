import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 px-6 py-2 rounded-full border ${
        isScrolled
          ? "bg-white/10 backdrop-blur-md shadow-lg border-white/20"
          : "border-white/10"
      }`}
    >
      <ul className="flex gap-6 items-center justify-center">
        {[
          { en: "HOME", fa: "HOME", href: "/#home" },
          { en: "WORK", fa: "WORK", href: "/#work" },
          { en: "ABOUT", fa: "ABOUT", href: "/about" },
          { en: "CONTACT", fa: "Email", href: "/#contact" },
        ].map((item, index) => (
          <li
            key={index}
            // Removed 'cursor-pointer'
            // ENHANCED hover effects for outstanding yet minimalistic look:
            // - Stronger blue shadow (opacity 0.5, larger spread)
            // - Subtle vertical lift (-translate-y-1)
            className="relative group px-4 py-2 rounded-xl transition duration-300 hover:border hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] hover:-translate-y-1"
          >
            <Link
              href={item.href}
              className="font-heading text-white text-sm md:text-base block text-center relative"
            >
              {/* Ensures only English text is shown, no hover-based text change */}
              <span className="block">{item.en}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}