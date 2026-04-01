import Layout from "@/components/layout/Layout";
import tavernInterior from "@/assets/tavern-interior.jpg";
import tavernOutdoor from "@/assets/tavern-outdoor.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <img src={tavernInterior} alt="Εσωτερικός χώρος ταβέρνας" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative z-10 container-tavern px-4 text-center">
          <p className="text-gold-light font-semibold uppercase tracking-widest text-sm mb-3">Από το 1990</p>
          <h1 className="heading-hero text-cream">Η Ιστορία μας</h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-tavern max-w-4xl">
          <div className="space-y-8 text-muted-foreground text-body-lg leading-relaxed">
            <p>
              Η ιστορία της ταβέρνας «Ο Γιώργος» ξεκινά το 1990, όταν ο Γιώργος και η 
              Ελένη άνοιξαν ένα μικρό μαγαζί στην καρδιά της [Πόλη/Περιοχή] με ένα 
              απλό όραμα: να σερβίρουν φαγητό όπως στο σπίτι τους.
            </p>
            <p>
              Με συνταγές που κληρονόμησαν από τις μητέρες και τις γιαγιάδες τους, 
              ξεκίνησαν να μαγειρεύουν πιάτα γεμάτα αγάπη, μνήμες και γνήσια ελληνική 
              γεύση. Σύντομα, η ταβέρνα έγινε σημείο αναφοράς στην περιοχή.
            </p>

            <div className="rounded-2xl overflow-hidden shadow-xl my-12">
              <img
                src={tavernOutdoor}
                alt="Αυλή της ταβέρνας με βουκαμβίλιες"
                className="w-full h-[400px] object-cover"
                loading="lazy"
                width={1200}
                height={800}
              />
            </div>

            <h2 className="heading-subsection text-foreground !mt-12">
              Μια Οικογένεια, Μια Παράδοση
            </h2>
            <p>
              Σήμερα, η δεύτερη γενιά συνεχίζει με τον ίδιο ζήλο. Τα παιδιά του Γιώργου 
              μεγάλωσαν μέσα στην κουζίνα, έμαθαν τα μυστικά κάθε συνταγής και σέβονται 
              βαθιά την παράδοση που κληρονόμησαν.
            </p>
            <p>
              Κάθε μέρα, προμηθευόμαστε φρέσκα υλικά από τοπικούς παραγωγούς — λαχανικά 
              από κήπους της περιοχής, κρέατα από κτηνοτρόφους που γνωρίζουμε προσωπικά, 
              ψάρια φρεσκοψαρεμένα και τυριά από τοπικά τυροκομεία.
            </p>

            <h2 className="heading-subsection text-foreground !mt-12">
              Η Φιλοσοφία μας
            </h2>
            <p>
              Πιστεύουμε ότι το καλό φαγητό δεν χρειάζεται πολυπλοκότητα. Χρειάζεται 
              σεβασμό στα υλικά, υπομονή στη μαγειρική και χαρά στη φιλοξενία. 
              Αυτός είναι ο τρόπος μας.
            </p>
            <p>
              Σας περιμένουμε να μοιραστούμε μαζί σας ένα τραπέζι γεμάτο γεύσεις, 
              χρώματα και αρώματα — ακριβώς όπως θα κάναμε στο δικό μας σπίτι.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
