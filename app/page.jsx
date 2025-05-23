import HeroSection from "@/components/HeroSection.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import FeaturesSection from "@/components/FeaturesSection.jsx";
import Benefits from "@/components/Benefits.jsx";
import Mission from "@/components/Mission.jsx";
import OurPromise from "@/components/OurPromise.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-20 p-4">
        <HeroSection />
        <FeaturesSection />
        <Benefits />
        <Mission />
        <OurPromise />
        <Footer />
      </div>
    </>
  );
}
