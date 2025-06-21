import HeroSection from "@/components/HeroSection.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import FeaturesSection from "@/components/FeaturesSection.jsx";
import Benefits from "@/components/Benefits.jsx";
import Mission from "@/components/Mission.jsx";
import OurPromise from "@/components/OurPromise.jsx";
import NotificationLine from "@/components/NotificationLine.jsx";
import Showcase from "@/components/Showcase.jsx";
import SliderComp from "@/components/SliderComp.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <NotificationLine />
      <SliderComp />
      <HeroSection />
      <FeaturesSection />
      <Benefits />
      <Mission />
      <OurPromise />
      <Showcase />
      <Footer />
    </>
  );
}
