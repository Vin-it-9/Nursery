import Categories from "@/components/Categories";
import CTASection from "@/components/CTASection";
import AboutNursery from "@/components/AboutNursery";
import FeaturedCollections from "@/components/FeaturedCollections";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import PlantPreview from "@/components/PlantPreview";
import Testimonials from "@/components/Testimonials";
import VisitUs from "@/components/VisitUs";
import WhyChooseUs from "@/components/WhyChooseUs";

// Homepage composes static sections only.
export default function HomePage() {
  return (
    <>
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Hero />
        <Categories />
        <WhyChooseUs />
        <FeaturedCollections />
        <PlantPreview />
        <AboutNursery />
        {/*<Testimonials />*/}
        <HowItWorks />
        <CTASection />
        <VisitUs />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
