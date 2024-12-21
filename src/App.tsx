import "./App.css";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import PsychoteraphyInfo from "./components/psychoteraphy-info/PsychoteraphyInfo";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Testimonials />
      <PsychoteraphyInfo />
      <Footer />
    </>
  );
}

export default App;
