import React from 'react';
import { Hero, Navbar,Profeature, Courses, Achievement, CTA, Footer, Anicard } from './components';
import './App.css'


function App() {
  return (
      <div>
        <Navbar />
        <Hero />
        <Anicard />
        <Achievement />
        <Courses />
        <CTA />
        <Footer />
      </div>
  );
}

export default App;
