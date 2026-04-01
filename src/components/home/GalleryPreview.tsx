import { Link } from "react-router-dom";
import dishMoussaka from "@/assets/dish-moussaka.jpg";
import dishLamb from "@/assets/dish-lamb.jpg";
import dishSalad from "@/assets/dish-salad.jpg";
import dishOctopus from "@/assets/dish-octopus.jpg";
import tavernInterior from "@/assets/tavern-interior.jpg";
import tavernOutdoor from "@/assets/tavern-outdoor.jpg";

const images = [
  { src: tavernOutdoor, alt: "Αυλή ταβέρνας με βουκαμβίλιες το βράδυ", className: "col-span-2 row-span-2" },
  { src: dishSalad, alt: "Φρέσκια χωριάτικη σαλάτα", className: "" },
  { src: dishLamb, alt: "Παϊδάκια αρνίσια στη σχάρα", className: "" },
  { src: tavernInterior, alt: "Εσωτερικός χώρος ταβέρνας", className: "col-span-2" },
  { src: dishMoussaka, alt: "Σπιτικός μουσακάς", className: "" },
  { src: dishOctopus, alt: "Χταπόδι σχάρας", className: "" },
];

const GalleryPreview = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-tavern">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">
            Στιγμιότυπα
          </p>
          <h2 className="heading-section text-foreground mb-4">
            Ο Χώρος & οι Γεύσεις μας
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`rounded-xl overflow-hidden ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/gallery" className="btn-secondary">
            Δείτε το Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
