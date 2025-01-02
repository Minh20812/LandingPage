import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TravelLanding from "./page/LandingPage";
import DestinationsPage from "./page/Destinations";
import Tours from "./page/Tours";
import About from "./page/About";
import Contact from "./page/Contact";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TravelLanding />} />
        <Route path="/home" element={<TravelLanding />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
