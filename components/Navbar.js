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
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? "bg-white/10 backdrop-blur-md shadow-md" : ""} px-8 py-3 rounded-full border border-white/20`}
    >
      <ul className="flex gap-8 items-center justify-center">
        {[
          { en: "HOME", fa: "خانه", href: "/#home" },
          { en: "WORK", fa: "کارها", href: "/#work" },
          { en: "ABOUT", fa: "درباره", href: "/about" },
          { en: "CONTACT", fa: "تماس", href: "/#contact" },
        ].map((item, index) => (
          <li key={index} className="relative group cursor-pointer">
            <Link href={item.href} className="font-heading text-white text-sm md:text-base">
              <span className="block group-hover:opacity-0 transition-opacity duration-300">{item.en}</span>
              <span className="absolute inset-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.fa}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
