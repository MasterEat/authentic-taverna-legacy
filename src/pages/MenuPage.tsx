import Layout from "@/components/layout/Layout";

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: "Ορεκτικά",
    items: [
      { name: "Τζατζίκι Σπιτικό", description: "Με γιαούρτι στραγγιστό, αγγούρι και σκόρδο", price: "€5" },
      { name: "Τυροκροκέτες", description: "Τραγανές με μείγμα ελληνικών τυριών", price: "€7" },
      { name: "Σαγανάκι Φέτα", description: "Φέτα τηγανητή με μέλι και σουσάμι", price: "€8" },
      { name: "Χταποδάκι Ξιδάτο", description: "Μαριναρισμένο χταπόδι με ελαιόλαδο", price: "€9" },
      { name: "Ντολμαδάκια", description: "Αμπελόφυλλα γεμιστά με ρύζι και μυρωδικά", price: "€6" },
    ],
  },
  {
    title: "Σαλάτες",
    items: [
      { name: "Χωριάτικη", description: "Ντομάτα, αγγούρι, ελιές, φέτα, ελαιόλαδο", price: "€8" },
      { name: "Ρόκα Παρμεζάνα", description: "Ρόκα, παρμεζάνα, ντοματίνια, βαλσάμικο", price: "€9" },
      { name: "Σαλάτα του Σεφ", description: "Εποχιακά λαχανικά με ντρέσινγκ μουστάρδας", price: "€10" },
    ],
  },
  {
    title: "Κρεατικά",
    items: [
      { name: "Μουσακάς Σπιτικός", description: "Μελιτζάνες, κιμάς μοσχαρίσιος, μπεσαμέλ", price: "€12" },
      { name: "Μπιφτέκια Σχάρας", description: "Χειροποίητα με μυρωδικά και φέτα", price: "€11" },
      { name: "Κοκκινιστό Μοσχάρι", description: "Αργομαγειρεμένο με πατάτες και ντομάτα", price: "€14" },
      { name: "Αρνί Κλέφτικο", description: "Αρνί ψημένο αργά σε λαδόκολλα", price: "€16" },
    ],
  },
  {
    title: "Σχάρας",
    items: [
      { name: "Παϊδάκια Αρνίσια", description: "Με λεμόνι και ρίγανη", price: "€16" },
      { name: "Κοτόπουλο Σχάρας", description: "Μαριναρισμένο με λεμόνι και μυρωδικά", price: "€11" },
      { name: "Μπριζόλα Χοιρινή", description: "Ψημένη στα κάρβουνα", price: "€13" },
      { name: "Σουβλάκι Κοτόπουλο", description: "Με πίτα, τζατζίκι και πατάτες", price: "€10" },
    ],
  },
  {
    title: "Μαγειρευτά",
    items: [
      { name: "Γεμιστά", description: "Ντομάτες και πιπεριές γεμιστές με ρύζι", price: "€10" },
      { name: "Φασολάκια Λαδερά", description: "Με ντομάτα, πατάτα και φέτα", price: "€9" },
      { name: "Γίγαντες Φούρνου", description: "Με ντομάτα, μυρωδικά και ελαιόλαδο", price: "€9" },
    ],
  },
  {
    title: "Θαλασσινά",
    items: [
      { name: "Χταπόδι Σχάρας", description: "Τρυφερό χταπόδι με λαδολέμονο", price: "€16" },
      { name: "Γαρίδες Σαγανάκι", description: "Με ντομάτα, φέτα και ούζο", price: "€15" },
      { name: "Ψάρι Ημέρας", description: "Φρέσκο ψάρι ψημένο στη σχάρα", price: "€ κατά βάρος" },
      { name: "Καλαμαράκια Τηγανητά", description: "Τραγανά με λεμόνι", price: "€12" },
    ],
  },
  {
    title: "Επιδόρπια",
    items: [
      { name: "Μπακλαβάς", description: "Σπιτικός με καρύδια, φιστίκι και μέλι", price: "€6" },
      { name: "Γαλακτομπούρεκο", description: "Κρέμα σε τραγανό φύλλο με σιρόπι", price: "€6" },
      { name: "Γιαούρτι με Μέλι", description: "Στραγγιστό γιαούρτι, θυμαρίσιο μέλι, καρύδια", price: "€5" },
    ],
  },
  {
    title: "Ποτά & Κρασιά",
    items: [
      { name: "Κρασί Χύμα (500ml)", description: "Κόκκινο ή λευκό, τοπικής παραγωγής", price: "€7" },
      { name: "Ούζο", description: "Με μεζέ", price: "€5" },
      { name: "Τσίπουρο", description: "Με ή χωρίς γλυκάνισο", price: "€5" },
      { name: "Μπύρα", description: "Ελληνική ή εισαγωγής", price: "€4" },
      { name: "Αναψυκτικά", description: "Διάφορα", price: "€3" },
    ],
  },
];

const MenuPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-tavern px-4 text-center">
          <p className="text-gold-light font-semibold uppercase tracking-widest text-sm mb-3">
            Οι Γεύσεις μας
          </p>
          <h1 className="heading-hero text-primary-foreground mb-4">Μενού</h1>
          <p className="text-primary-foreground/70 text-body-lg max-w-2xl mx-auto">
            Παραδοσιακές ελληνικές συνταγές, μαγειρεμένες καθημερινά με φρέσκα υλικά 
            από τοπικούς παραγωγούς.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-tavern max-w-4xl">
          {menuData.map((category, i) => (
            <div key={category.title} className={i > 0 ? "mt-16" : ""}>
              <div className="divider-ornament">
                <span className="text-accent font-display text-2xl font-semibold">
                  {category.title}
                </span>
              </div>

              <div className="mt-8 space-y-6">
                {category.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                    </div>
                    <span className="font-display text-lg font-semibold text-accent shrink-0">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-16 text-center p-8 bg-secondary rounded-2xl">
            <p className="text-muted-foreground italic">
              Οι τιμές περιλαμβάνουν ΦΠΑ. Ρωτήστε μας για ειδικές διατροφικές ανάγκες ή αλλεργίες.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MenuPage;
