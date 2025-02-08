import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import Footer from "./components/footer/Footer";
import ProcessPage from "./components/pages/ProcessPage";
import { NavigationProvider } from "./components/context/NavigationContext";
import "./App.css";

function App() {
  return (
    <Router>
      <NavigationProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/process" element={<ProcessPage />} />
        </Routes>
        <Footer />
      </NavigationProvider>
    </Router>
  );
}

export default App;
