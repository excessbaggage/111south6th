import JsonLd from "@/components/JsonLd";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Story from "@/components/Story";
import InteriorPhoto from "@/components/InteriorPhoto";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import History from "@/components/History";
import Neighborhood from "@/components/Neighborhood";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navigation />
      <main>
        <Hero />
        <StatsBar />
        <Story />
        <InteriorPhoto />
        <Features />
        <Gallery />
        <History />
        <Neighborhood />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
