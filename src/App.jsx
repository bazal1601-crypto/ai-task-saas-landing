import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import FeatureGrowth from "./components/FeatureGrowth";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
import Customers from "./components/Customers";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <FeatureGrowth />
      <Pricing />
      <Blog />
      <Customers />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;