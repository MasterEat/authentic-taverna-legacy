import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Μαρία Κ.",
    text: "Η καλύτερη ταβέρνα στην περιοχή! Ο μουσακάς θυμίζει σπίτι και η φιλοξενία είναι πάντα εξαιρετική. Ερχόμαστε κάθε Σαββατοκύριακο.",
    rating: 5,
  },
  {
    name: "Νίκος Π.",
    text: "Φανταστικά παϊδάκια, φρέσκα ψάρια και ανεπανάληπτη ατμόσφαιρα. Αξίζει κάθε ευρώ. Σίγουρα η πιο αυθεντική ελληνική εμπειρία.",
    rating: 5,
  },
  {
    name: "Elena R.",
    text: "We discovered this gem during our trip to Greece and it was the highlight of our vacation. Authentic food, warm people, beautiful setting. A must-visit!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-tavern">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">
            Κριτικές
          </p>
          <h2 className="heading-section text-foreground mb-4">
            Τι Λένε οι Επισκέπτες μας
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="card-tavern p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <footer className="font-display text-lg font-semibold text-foreground">
                — {t.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
