import React from "react";
import AboutUs from "./components/AboutUs";
import DailyPrices from "./components/DailyPrices";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import SignUp from "./components/SignUp";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <DailyPrices />
      <AboutUs />
      <Services />
      <SignUp />
      <Roadmap />
      <Newsletter />
      <Footer />
    </div>
  );
}
