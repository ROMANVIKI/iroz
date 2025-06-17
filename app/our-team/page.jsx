import Navbar from "@/components/Navbar";
import HeroSection from "@/components/ourTeamPageComponents/HeroSection";
import Purpose from "@/components/ourTeamPageComponents/Purpose";
import SliderComp from "@/components/ourTeamPageComponents/SliderComp";
import Footer from "@/components/Footer";
const page = () => {
  return (
    <>
      <Navbar />
      <div className="p-2">
        <HeroSection />
        <Purpose />
        <SliderComp />
      </div>
      <Footer />
    </>
  );
};

export default page;
