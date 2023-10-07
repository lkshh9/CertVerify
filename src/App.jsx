import React from 'react';
import { Hero, Navbar,Profeature, Courses, Achievement, CTA, Footer } from './components';
import './App.css'

function App() {
  return (
      <div>
        <Navbar />
        <Hero />
        <Profeature />
        <Achievement />
        <Courses />
        <CTA />
        <Footer />
      </div>
  );
}

export default App;
