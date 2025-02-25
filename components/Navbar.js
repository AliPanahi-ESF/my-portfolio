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
    <nav className={`nav-menu ${isScrolled ? "scrolled" : ""}`}>
      <ul>
        {[
          { en: "HOME", fa: "خانه", href: "/#home" },
          { en: "WORK", fa: "کارها", href: "/#work" },
          { en: "ABOUT", fa: "درباره", href: "/about" },
          { en: "CONTACT", fa: "تماس", href: "/#contact" },
        ].map((item, index) => (
          <li key={index} className="menu-item group">
            <Link href={item.href} className="menu-link">
              <span className="menu-text">{item.en}</span>
              <span className="menu-text-hover">{item.fa}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
