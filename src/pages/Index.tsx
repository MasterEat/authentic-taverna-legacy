import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Story from "@/components/home/Story";
import SignatureDishes from "@/components/home/SignatureDishes";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GalleryPreview from "@/components/home/GalleryPreview";
import ReservationCTA from "@/components/home/ReservationCTA";
import Testimonials from "@/components/home/Testimonials";
import ContactPreview from "@/components/home/ContactPreview";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Story />
      <SignatureDishes />
      <WhyChooseUs />
      <GalleryPreview />
      <ReservationCTA />
      <Testimonials />
      <ContactPreview />
    </Layout>
  );
};

export default Index;
