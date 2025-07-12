import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is H&S StylistAI?',
    answer: 'H&S StylistAI is a smart personal shopping assistant that helps you discover styles and outfits based on your preferences using artificial intelligence.',
  },
  {
    question: 'Is H&S StylistAI free to use?',
    answer: 'Yes, the basic version is free. Premium features may be available under a subscription plan.',
  },
  {
    question: 'Can I get personalised style recommendations?',
    answer: 'Absolutely! After you answer a few questions, our AI provides style suggestions tailored just for you.',
  },
  {
    question: 'Is my data secure with H&S StylistAI?',
    answer: 'Yes. We prioritise your privacy and use industry-standard security measures to keep your data safe.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '1rem' }}>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
          <h3
            onClick={() => toggleFAQ(index)}
            style={{
              cursor: 'pointer',
              fontSize: '1.25rem',
              color: '#7C2E3D',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {faq.question}
            <span>{openIndex === index ? '−' : '+'}</span>
          </h3>
          {openIndex === index && (
            <p style={{ marginTop: '0.5rem', color: '#333' }}>{faq.answer}</p>
          )}
        </div>
      ))}
    </section>
  );
}

export default FAQ;
