import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { to: "/", label: "Αρχική" },
  { to: "/about", label: "Σχετικά" },
  { to: "/menu", label: "Μενού" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Επικοινωνία" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const headerBg = isScrolled || !isHome
    ? "bg-primary shadow-lg"
    : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <nav className="container-tavern flex items-center justify-between px-4 md:px-8 py-4">
        <Link to="/" className="flex flex-col" aria-label="Αρχική σελίδα">
          <span className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
            Ο Γιώργος
          </span>
          <span className="text-xs tracking-widest uppercase text-primary-foreground/70">
            Ταβέρνα · Από το 1990
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`text-sm font-semibold tracking-wide uppercase transition-colors duration-200 
                  ${location.pathname === link.to
                    ? "text-gold-light"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+302101234567" className="btn-hero-secondary !py-2.5 !px-5 !text-sm gap-2">
            <Phone className="w-4 h-4" />
            Κράτηση
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`block px-6 py-3 text-sm font-semibold uppercase tracking-wide
                    ${location.pathname === link.to
                      ? "text-gold-light"
                      : "text-primary-foreground/80"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-6 pt-3">
              <a href="tel:+302101234567" className="btn-accent !text-sm w-full gap-2">
                <Phone className="w-4 h-4" />
                Κράτηση Τώρα
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
