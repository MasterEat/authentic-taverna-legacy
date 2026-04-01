import { Utensils, Leaf, Heart, Clock } from "lucide-react";

const reasons = [
  {
    icon: Utensils,
    title: "Παραδοσιακές Συνταγές",
    description: "Συνταγές τριών γενεών, μαγειρεμένες με τον ίδιο τρόπο που μας δίδαξαν οι γιαγιάδες μας.",
  },
  {
    icon: Leaf,
    title: "Φρέσκα Υλικά",
    description: "Προμηθευόμαστε καθημερινά από τοπικούς παραγωγούς — λαχανικά, κρέατα, ψάρια και τυριά.",
  },
  {
    icon: Heart,
    title: "Ζεστή Φιλοξενία",
    description: "Κάθε επισκέπτης γίνεται μέλος της οικογένειάς μας. Αυτό πιστεύουμε από το 1990.",
  },
  {
    icon: Clock,
    title: "Από το 1990",
    description: "Πάνω από τρεις δεκαετίες εμπειρίας στην αυθεντική ελληνική κουζίνα και φιλοξενία.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-tavern">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">
            Γιατί Εμάς
          </p>
          <h2 className="heading-section text-foreground">
            Αυτά που μας Ξεχωρίζουν
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-accent mb-5">
                <reason.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
