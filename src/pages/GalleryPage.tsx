import Layout from "@/components/layout/Layout";
import dishMoussaka from "@/assets/dish-moussaka.jpg";
import dishLamb from "@/assets/dish-lamb.jpg";
import dishSalad from "@/assets/dish-salad.jpg";
import dishOctopus from "@/assets/dish-octopus.jpg";
import dishBaklava from "@/assets/dish-baklava.jpg";
import tavernInterior from "@/assets/tavern-interior.jpg";
import tavernOutdoor from "@/assets/tavern-outdoor.jpg";
import heroTavern from "@/assets/hero-tavern.jpg";

const images = [
  { src: heroTavern, alt: "Αυλή ταβέρνας με ελιές και σερβιρισμένα τραπέζια", span: "col-span-2 row-span-2" },
  { src: dishMoussaka, alt: "Σπιτικός μουσακάς", span: "" },
  { src: dishSalad, alt: "Χωριάτικη σαλάτα με φέτα", span: "" },
  { src: tavernInterior, alt: "Εσωτερικός χώρος ταβέρνας", span: "col-span-2" },
  { src: dishLamb, alt: "Αρνίσια παϊδάκια σχάρας", span: "" },
  { src: dishOctopus, alt: "Χταπόδι ψητό στη σχάρα", span: "" },
  { src: tavernOutdoor, alt: "Εξωτερική αυλή ταβέρνας το βράδυ", span: "col-span-2" },
  { src: dishBaklava, alt: "Σπιτικός μπακλαβάς με φιστίκια", span: "" },
];

const GalleryPage = () => {
  return (
    <Layout>
      <section className="bg-primary pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-tavern px-4 text-center">
          <p className="text-gold-light font-semibold uppercase tracking-widest text-sm mb-3">
            Στιγμιότυπα
          </p>
          <h1 className="heading-hero text-primary-foreground mb-4">Gallery</h1>
          <p className="text-primary-foreground/70 text-body-lg max-w-2xl mx-auto">
            Εικόνες από τον χώρο μας, τα πιάτα μας και τις στιγμές που μοιραζόμαστε 
            με τους επισκέπτες μας.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-tavern">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className={`rounded-xl overflow-hidden ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 min-h-[200px]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GalleryPage;
