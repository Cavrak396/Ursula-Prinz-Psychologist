import "./App.css";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import PsychoteraphyInfo from "./components/psychoteraphy-info/PsychoteraphyInfo";
import Offers from "./components/offers/Offers";
import Focus from "./components/focus/Focus";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Testimonials />
      <PsychoteraphyInfo />
      <Offers />
      <Focus />
      <Footer />
    </>
  );
}

export default App;
