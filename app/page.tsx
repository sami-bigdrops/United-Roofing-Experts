import Navbar from "@/ure/navbar";
// import Ribbon from "@/ure/ribbon";
import Hero from "@/ure/hero";
import Ratings from "@/ure/ratings";
import OfferRibbon from "@/ure/offer-ribbon";
import About from "@/ure/about";
import Work from "@/ure/work";
import Choose from "@/ure/choose";
import RoofingStyles from "@/ure/roofing-styles";
import Faq from "@/ure/faq";
import Review from "@/ure/review";
import ImageSlider from "@/ure/image-slider";
import Footer from "@/ure/footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      {/* <Ribbon/> */}
      <Hero/>
      <Ratings/>
      <OfferRibbon/>
      <About/>
      <RoofingStyles/>
      <Work/>
      <ImageSlider/>
      <Review/>
      <Choose/>
      <Faq/>
      <Footer/>


    </div>
    
  );
}
