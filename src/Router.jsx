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
        <Route
          path="https://landing-page-ruddy-five-59.vercel.app/home"
          element={<TravelLanding />}
        />
        <Route
          path="https://landing-page-ruddy-five-59.vercel.app//destinations"
          element={<DestinationsPage />}
        />
        <Route
          path="https://landing-page-ruddy-five-59.vercel.app//tours"
          element={<Tours />}
        />
        <Route
          path="https://landing-page-ruddy-five-59.vercel.app//about"
          element={<About />}
        />
        <Route
          path="https://landing-page-ruddy-five-59.vercel.app//contact"
          element={<Contact />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
