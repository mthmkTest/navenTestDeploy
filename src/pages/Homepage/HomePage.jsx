import Hero from "./components/Hero";
import Services from "./components/Services";
import Examples from "./components/Examples";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <div className="h-full font-montserrat">
      <div className="border-b border-borderLighterMainText bg-mainColor md:h-screen">
        <Hero />
      </div>
      <div className="flex items-center border-b border-borderLighterMainText bg-secondMainColor lg:mb-0 lg:h-screen">
        <Services />
      </div>
      <div className="border-b border-borderLighterMainText bg-mainColor md:h-full">
        <Examples />
      </div>
      <div className="mx-auto border-b border-borderLighterMainText bg-secondMainColor lg:h-full">
        <Benefits />
      </div>
      <div className="mx-auto border-b border-borderLighterMainText bg-mainColor lg:h-full">
        <Testimonials />
      </div>
      <div className="bg-secondMainColor">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
