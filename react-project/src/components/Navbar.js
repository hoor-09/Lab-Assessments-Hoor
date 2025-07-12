import React from 'react';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#7C2E3D', padding: '1rem', color: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
        <a href="/" style={{ fontWeight: 'bold', fontSize: '1.5rem', textDecoration: 'none', color: 'white' }}>
          My Logo
        </a>
        <div>
          <a href="#about" style={{ margin: '0 1rem', textDecoration: 'none', color: 'white' }}>About</a>
          <a href="#contact" style={{ margin: '0 1rem', textDecoration: 'none', color: 'white' }}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
