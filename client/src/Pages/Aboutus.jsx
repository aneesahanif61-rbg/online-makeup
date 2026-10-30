import React from 'react';
import thodeproductImg from '../assets/thodeproduct.avif'; 

const Aboutus = () => {
  return (
    <div style={{ backgroundColor: '#0a0809', color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif', padding: '140px 40px 80px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <p style={{ color: '#e5afb7', textTransform: 'uppercase', letterSpacing: '6px', fontSize: '0.8rem', marginBottom: '20px' }}>// THE ATELIER SPIRIT</p>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '300', lineHeight: '1.1', margin: 0 }}>
              Crafting <span style={{ color: '#e5afb7', fontStyle: 'italic' }}>Aura</span>,<br />Defining Identity.
            </h1>
            <p style={{ color: '#a3989a', marginTop: '30px', lineHeight: '1.8', fontSize: '1rem' }}>
              We curate conscious cosmetics intended as bespoke expressions of natural, authentic brilliance. Every formulation is meticulously crafted for absolute perfection.
            </p>
          </div>
          
          {/* Aapki Nayi Image Yahan Responsive Viewport Me Set Hai */}
          <div style={{ width: '100%', height: '480px', overflow: 'hidden', borderRadius: '4px', border: '1px solid #261f22' }}>
            <img src={thodeproductImg} alt="Lumera Nayi Collection" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Aboutus;
