import "./App.css";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Intro from "./components/psychoteraphy-intro/Intro";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Testimonials />
      <Intro />
    </>
  );
}

export default App;
