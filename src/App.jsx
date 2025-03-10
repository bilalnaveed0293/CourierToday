import { useState } from "react";
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
function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
