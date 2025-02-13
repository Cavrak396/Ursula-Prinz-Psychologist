import Banner from "../reusableSections/banner/Banner";
import Testimonials from "../home-page/testimonials/Testimonials";
import PsychoteraphyInfo from "../home-page/psychotheraphy-info/PsychoteraphyInfo";
import Offers from "../home-page/offers/Offers";
import Focus from "../home-page/focus/Focus";
import About from "../home-page/about/About";
import HomePageBannerImg from "../../assets/images/banner/ursula-prinz.webp";

function HomePage() {
  return (
    <main>
      <Banner bgImage={HomePageBannerImg} page="Home" />
      <Testimonials />
      <PsychoteraphyInfo />
      <Offers />
      <Focus />
      <About />
    </main>
  );
}

export default HomePage;
