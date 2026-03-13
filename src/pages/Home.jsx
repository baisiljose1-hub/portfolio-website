import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact"; // 1. Import the Contact section

const Home = () => {
  return (
    <div className="bg-[#050505] min-h-screen relative text-white selection:bg-brand-red selection:text-white overflow-x-hidden font-sans">
      <Navbar />

      <main>
        <Hero />
      </main>

      <About />

      <section id="projects">
        <Projects />
      </section>

      {/* 2. Place it at the very bottom */}
      <Contact />
    </div>
  );
};

export default Home;
