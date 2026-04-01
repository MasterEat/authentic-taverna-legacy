import { Link } from "react-router-dom";
import dishMoussaka from "@/assets/dish-moussaka.jpg";
import dishLamb from "@/assets/dish-lamb.jpg";
import dishSalad from "@/assets/dish-salad.jpg";
import dishOctopus from "@/assets/dish-octopus.jpg";

const dishes = [
  {
    name: "Μουσακάς Σπιτικός",
    description: "Στρώσεις μελιτζάνας, κιμά μοσχαρίσιου και κρεμώδους μπεσαμέλ, ψημένος στον φούρνο με αγάπη.",
    image: dishMoussaka,
    alt: "Σπιτικός μουσακάς με μπεσαμέλ",
  },
  {
    name: "Παϊδάκια στη Σχάρα",
    description: "Ζουμερά αρνίσια παϊδάκια ψημένα στα κάρβουνα με λεμόνι, ρίγανη και φρέσκο δεντρολίβανο.",
    image: dishLamb,
    alt: "Αρνίσια παϊδάκια στη σχάρα με λεμόνι",
  },
  {
    name: "Χωριάτικη Σαλάτα",
    description: "Ντομάτα, αγγούρι, πιπεριά, κρεμμύδι, ελιές Καλαμάτας και χοντρό κομμάτι φέτας με εξαιρετικό παρθένο ελαιόλαδο.",
    image: dishSalad,
    alt: "Χωριάτικη σαλάτα με φέτα",
  },
  {
    name: "Χταπόδι Σχάρας",
    description: "Τρυφερό χταπόδι ψημένο αργά στα κάρβουνα, σερβιρισμένο με λαδολέμονο και κάπαρη.",
    image: dishOctopus,
    alt: "Χταπόδι ψητό στη σχάρα",
  },
];

const SignatureDishes = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-tavern">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">
            Οι Γεύσεις μας
          </p>
          <h2 className="heading-section text-foreground mb-4">
            Αγαπημένα Πιάτα
          </h2>
          <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto">
            Μερικά από τα πιάτα που αγαπούν οι επισκέπτες μας εδώ και χρόνια – 
            μαγειρεμένα κάθε μέρα με φρέσκα υλικά.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish) => (
            <article key={dish.name} className="card-tavern group">
              <div className="aspect-square overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={800}
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {dish.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/menu" className="btn-primary">
            Δείτε Όλο το Μενού
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
