import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setIsScrolled(window.scrollY > 50);
      } else {
        setIsScrolled(true);
      }
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const navItems = [
    { en: "HOME", href: "/#home" },
    { en: "WORK", href: "/#work" },
    { en: "ABOUT", href: "/about" },
    { en: "CONTACT", href: "/#contact" },
  ];

  const navBackground = isScrolled || isOpen
      ? "bg-black/30 backdrop-blur-lg border-white/20"
      : "md:border-white/10";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        md:top-4 md:w-auto md:left-1/2 md:-translate-x-1/2
        md:rounded-full ${navBackground}
        ${isOpen ? "rounded-b-3xl border-x border-b" : "md:border rounded-none"}`}
    >
      <div className="flex items-center justify-between md:justify-start md:gap-10 h-16 px-6 max-w-screen-lg mx-auto">
        {/* --- FONT IS NOW APPLIED HERE --- */}
        <Link href="/#home" className="text-xl font-bold text-white font-cinzel">
          AP
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-2 items-center">
            {navItems.map((item) => (
              <li key={item.en}>
                {/* --- AND FONT IS APPLIED HERE --- */}
                <Link
                  href={item.href}
                  className="block px-4 py-2 rounded-full font-cinzel text-white text-sm tracking-wider transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                >
                  {item.en}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden pb-6 px-6 pt-2">
          <ul className="flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <li key={item.en} className="w-full">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-3 rounded-xl font-cinzel text-white text-base tracking-wider transition-colors bg-white/5 hover:bg-white/10"
                >
                  {item.en}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}