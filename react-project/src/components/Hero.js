import React from 'react';
import heroImage from '../assets/Hero.png'; 

function Hero() {
  return (
    <section
      style={{
        padding: '4rem 1rem',
        textAlign: 'center',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Welcome to My Website</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
        This is a simple hero section built with React.
      </p>
      <a
        href="#get-started"
        style={{
          backgroundColor: '#7C2E3D',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '8px',
          textDecoration: 'none'
        }}
      >
        Get Started
      </a>
    </section>
  );
}

export default Hero;
