import { Phone } from "lucide-react";
import heroImage from "@/assets/tavern-outdoor.jpg";

const ReservationCTA = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Βραδινή ατμόσφαιρα στην ταβέρνα"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="relative z-10 container-tavern text-center px-4">
        <p className="text-gold-light font-semibold uppercase tracking-widest text-sm mb-4">
          Κλείστε Τραπέζι
        </p>
        <h2 className="heading-section text-cream mb-6">
          Κρατήστε τη Θέση σας<br />
          <span className="italic font-normal">στην Παράδοση</span>
        </h2>
        <p className="text-cream/80 text-body-lg max-w-2xl mx-auto mb-10">
          Κρατήστε ένα τραπέζι και απολαύστε αυθεντικές ελληνικές γεύσεις σε μια 
          ζεστή, παραδοσιακή ατμόσφαιρα. Σας περιμένουμε!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:+302101234567" className="btn-hero-primary gap-2">
            <Phone className="w-5 h-5" />
            Καλέστε: 210 1234567
          </a>
          <a href="/contact" className="btn-hero-secondary">
            Φόρμα Επικοινωνίας
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReservationCTA;
