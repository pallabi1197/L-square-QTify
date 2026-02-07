import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Section from "./components/Section/Section";
import AccordionUsage from "./components/Accordion/Accordion";
import BasicGrid from "./components/Footer/Footer";





function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section />
      <AccordionUsage />
      <BasicGrid />
      
    </div>
  );
}

export default App;
