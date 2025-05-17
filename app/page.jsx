import HeroSection from "@/components/HeroSection.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import FeaturesSection from "@/components/FeaturesSection.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-20 p-2">
        <HeroSection />
        <FeaturesSection />
        <Footer />
      </div>
    </>
  );
}
