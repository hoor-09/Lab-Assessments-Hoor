import React from 'react';

const reviews = [
  {
    name: "Emily R.",
    review: "H&S StylistAI totally transformed how I shop! The suggestions were spot on.",
    avatar: "https://i.pravatar.cc/150?img=32"
  },
  {
    name: "James T.",
    review: "Very intuitive and easy to use. It felt like a real stylist was helping me.",
    avatar: "https://i.pravatar.cc/150?img=12"
  },
  {
    name: "Aisha K.",
    review: "I saved so much time and found styles that actually suit me. Love it!",
    avatar: "https://i.pravatar.cc/150?img=45"
  }
];

const CustomerReview = () => {
  return (
    <section style={{ padding: '3rem 1rem', backgroundColor: '#f7f7f7' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#7C2E3D' }}>
        What Our Customers Say
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        {reviews.map((item, index) => (
          <div key={index} style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '300px',
            textAlign: 'center'
          }}>
            <img
              src={item.avatar}
              alt={item.name}
              style={{ width: '70px', height: '70px', borderRadius: '50%', marginBottom: '1rem' }}
            />
            <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>"{item.review}"</p>
            <h4 style={{ color: '#7C2E3D', fontWeight: 'bold' }}>{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
