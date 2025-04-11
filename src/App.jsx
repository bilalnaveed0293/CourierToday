import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import PrivacyPolicy from "../src/Privacy Policy/PrivacyPolicy.jsx";
import PrivacyNavbar from "./components/PrivacyNavbar.jsx";

function App() {
  return (
    <Router>
      <div className="relative">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <World />
                <Cards1 />
                <Process />
                <CallToAction />
                <ServiceOptions />
                <DeliverySuccessRate />
                <PlansForm />
                <Footer />
              </>
            }
          />
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

        {/* 🟢 Floating WhatsApp Icon */}
        <a
          href="https://wa.me/971506448524"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-50"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp Chat"
            className="w-14 h-14 hover:scale-110 transition-transform duration-300"
          />
        </a>

      </div>
    </Router>
  );
}

export default App;
