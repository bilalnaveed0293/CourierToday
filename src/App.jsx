import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import World from "./Page1/World.jsx";
import Footer from "./components/Footer.jsx";
import Cards1 from "./Boards/Cards1.jsx";
import Process from "./Shipment/Process.jsx";
import ServiceOptions from "./Services/ServiceOptions.jsx";
import AboutUs from "./AboutUs.jsx";
import DeliverySuccessRate from "./Delivery/page.jsx";
import PlansForm from "./Plans/PlansForm.jsx";
import CallToAction from "./CTA/CallToAction.jsx";
import PrivacyPolicy from "../src/Privacy Policy/PrivacyPolicy.jsx"; // Fixed import path
import PrivacyNavbar from "./components/PrivacyNavbar.jsx"; // Added missing import

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Main page route */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <World />
                <Cards1 />
                <CallToAction />
                <Process />
                <ServiceOptions />
                <DeliverySuccessRate />
                <PlansForm />
                <AboutUs />
                <Footer />
              </>
            }
          />
          {/* Privacy Policy route */}
          <Route
            path="/privacy-policy"
            element={
              <>
                <PrivacyNavbar />
                <PrivacyPolicy />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;