import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-tavern.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ταβέρνα Ο Γιώργος - Αυλή με παραδοσιακά ελληνικά πιάτα κάτω από ελιές"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-gold-light text-sm md:text-base font-semibold uppercase tracking-[0.3em] mb-6">
          Από το 1990
        </p>
        <h1 className="heading-hero text-cream mb-6 leading-tight">
          Αυθεντικές Ελληνικές
          <br />
          <span className="italic font-normal">Γεύσεις & Φιλοξενία</span>
        </h1>
        <p className="text-cream/80 text-body-lg max-w-2xl mx-auto mb-10">
          Παραδοσιακές σπιτικές συνταγές, φρέσκα τοπικά υλικά και η ζεστασιά 
          μιας οικογενειακής ταβέρνας που σερβίρει με αγάπη εδώ και τρεις δεκαετίες.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/menu" className="btn-hero-primary">
            Δείτε το Μενού
          </Link>
          <a href="tel:+302101234567" className="btn-hero-secondary gap-2">
            <Phone className="w-5 h-5" />
            Κράτηση Τραπεζιού
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-cream/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
