import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-tavern section-padding !pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-bold mb-3">Ο Γιώργος</h3>
            <p className="text-sm uppercase tracking-widest text-primary-foreground/60 mb-4">
              Ταβέρνα · Από το 1990
            </p>
            <p className="text-primary-foreground/80 leading-relaxed">
              Αυθεντικές ελληνικές γεύσεις, ζεστή φιλοξενία και σπιτικές συνταγές τριών γενεών.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-4">Πλοήγηση</h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Αρχική" },
                { to: "/about", label: "Η Ιστορία μας" },
                { to: "/menu", label: "Μενού" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Επικοινωνία" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-4">Επικοινωνία</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-gold-light" />
                <span className="text-primary-foreground/80">
                  Οδός Παραδείγματος 42,<br />[Πόλη/Περιοχή], Ελλάδα
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-gold-light" />
                <a href="tel:+302101234567" className="text-primary-foreground/80 hover:text-primary-foreground">
                  +30 210 1234567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-gold-light" />
                <a href="mailto:info@taverna-giorgos.gr" className="text-primary-foreground/80 hover:text-primary-foreground">
                  info@taverna-giorgos.gr
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-4">Ωράριο</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 shrink-0 text-gold-light" />
                <div>
                  <p className="font-semibold text-primary-foreground">Δευτέρα – Κυριακή</p>
                  <p>12:00 – 00:00</p>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <a href="tel:+302101234567" className="btn-accent !text-sm gap-2">
                <Phone className="w-4 h-4" />
                Κράτηση
              </a>
            </div>
          </div>
        </div>

        {/* Social + Copyright */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Ταβέρνα "Ο Γιώργος". Με επιφύλαξη παντός δικαιώματος.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" aria-label="TripAdvisor" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 004.04 10.43 5.976 5.976 0 004.003-1.533l2 2.328 2-2.328a5.976 5.976 0 004.003 1.533 5.997 5.997 0 004.04-10.43L24 6.648h-4.35a15.067 15.067 0 00-7.644-2.353zM6.003 17.213a3.997 3.997 0 110-7.994 3.997 3.997 0 010 7.994zm11.994 0a3.997 3.997 0 110-7.994 3.997 3.997 0 010 7.994zM6.003 11.219a2 2 0 100 4 2 2 0 000-4zm11.994 0a2 2 0 100 4 2 2 0 000-4z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
