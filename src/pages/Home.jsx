import React from 'react';
import Hero from '../components/Hero';
import TechTicker from '../components/TechTicker';
import About from './About';
import Skills from './Skills';
import Portfolio from '../components/Portfolio';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <TechTicker />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default Home;
