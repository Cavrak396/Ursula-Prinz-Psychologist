import Banner from "../banner/Banner";
import Testimonials from "../testimonials/Testimonials";
import PsychoteraphyInfo from "../psychoteraphy-info/PsychoteraphyInfo";
import Offers from "../offers/Offers";
import Focus from "../focus/Focus";
import About from "../about/About";

function HomePage() {
  return (
    <div className="homepage">
      <Banner />
      <Testimonials />
      <PsychoteraphyInfo />
      <Offers />
      <Focus />
      <About />
    </div>
  );
}

export default HomePage;
