import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CustomerReview from './components/Cutomerreviews';
import FAQ from './components/FAQ';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <CustomerReview />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
