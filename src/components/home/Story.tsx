import { Link } from "react-router-dom";
import tavernInterior from "@/assets/tavern-interior.jpg";

const Story = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-tavern">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">
              Η Ιστορία μας
            </p>
            <h2 className="heading-section text-foreground mb-6">
              Μια Οικογενειακή Παράδοση<br />
              <span className="italic font-normal text-olive-light">Τριών Δεκαετιών</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-body-lg">
              <p>
                Από το 1990, η ταβέρνα «Ο Γιώργος» υποδέχεται κάθε επισκέπτη σαν μέλος 
                της οικογένειάς μας. Με σεβασμό στην παράδοση και αγάπη για τη γνήσια 
                ελληνική κουζίνα, σερβίρουμε πιάτα που θυμίζουν σπίτι.
              </p>
              <p>
                Φρέσκα υλικά από τοπικούς παραγωγούς, συνταγές που περνούν από γενιά σε γενιά 
                και μια ατμόσφαιρα που σε κάνει να νιώθεις ότι ανήκεις εδώ.
              </p>
            </div>
            <Link to="/about" className="btn-primary mt-8">
              Μάθετε Περισσότερα
            </Link>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={tavernInterior}
                alt="Εσωτερικός χώρος ταβέρνας με πέτρινους τοίχους και ζεστό φωτισμό"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
                width={1200}
                height={800}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-xl p-6 shadow-lg hidden md:block">
              <p className="font-display text-4xl font-bold">35+</p>
              <p className="text-sm">Χρόνια Παράδοσης</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
