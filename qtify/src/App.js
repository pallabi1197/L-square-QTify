import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Section from "./components/Section/Section";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section title1="Top Albums" title2="Collapse"/>
      <Section title1="New Albums" title2="Show All"/>
    </div>
  );
}

export default App;
