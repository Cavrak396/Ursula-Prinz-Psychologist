import "./App.css";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Testimonials from "./components/testimonials/Testimonials";
import Intro from "./components/psychoteraphy-intro/Intro";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Testimonials />
      <Intro />
      <Footer />
    </>
  );
}

export default App;
