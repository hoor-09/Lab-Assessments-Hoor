import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#333', color: 'white', padding: '2rem 1rem' }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'flex-end', // aligns all content to the right
        textAlign: 'left'          // aligns text within each block to the right
      }}>
        
        {/* About Section */}
        <div style={{ flex: '1 1 200px', marginBottom: '1rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>About Us</h3>
          <p style={{ lineHeight: '1.5' }}>
            StylistAI is your smart fashion companion, helping you find the best outfits tailored to your style using advanced AI.
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ flex: '1 1 150px', marginBottom: '1rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
            <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
            <li><a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
            <li><a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
            <li><a href="/privacy" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={{ flex: '1 1 200px', marginBottom: '1rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>Contact Us</h3>
          <p>Email: support@stylista.ai</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Fashion Street, London, UK</p>
        </div>

        {/* Social Media */}
        <div style={{ flex: '1 1 200px', marginBottom: '1rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>Follow Us</h3>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
            <a href="https://facebook.com" style={{ color: 'white' }}>Facebook</a>
            <a href="https://instagram.com" style={{ color: 'white' }}>Instagram</a>
            <a href="https://twitter.com" style={{ color: 'white' }}>Twitter</a>
            <a href="https://linkedin.com" style={{ color: 'white' }}>LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div style={{ 
        textAlign: 'right', 
        marginTop: '2rem', 
        borderTop: '1px solid #555', 
        paddingTop: '1rem', 
        maxWidth: '1200px', 
        marginLeft: 'auto', 
        marginRight: 'auto' 
      }}>
        <p>&copy; {currentYear} StylistAI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
