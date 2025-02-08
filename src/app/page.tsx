import HeroSection from "./components/heroSection/HeroSection";
import ShowCaseProducts from "./components/showCaseProducts/ShowCaseProducts";
import Featured from "./components/featured/Featured";
import GearProducts from "./components/gearProducts/GearProducts";
import JordanBrand from "./components/jordanBrand/JordanBrand";
import EssentialsSection from "./components/essentialsSection/Essentials";
import Catagories from "./components/catagogies/Catagories";



export default function Home() {
  return (
    <div className="md:header_container">
      <div className="mb-[50px]">
        <HeroSection />
      </div>

      <div className="mt-5">
        <ShowCaseProducts />
      </div>

      <div className="mt-5">
        <Featured/>        
      </div>

      <div className="mt-5">
        <GearProducts/>        
      </div>

      <div className="mt-5">
        <JordanBrand/>
      </div>

      <div className="mt-5">
        <EssentialsSection/>
      </div>

      <div className="mt-5">
        <Catagories />
      </div>


    </div>
  );
}
