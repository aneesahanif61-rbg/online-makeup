import React from 'react';

const Banner = () => {
  return (
    <div style={{ backgroundColor: '#110d0f', borderTop: '1px solid #1a1417', borderBottom: '1px solid #1a1417', padding: '30px 20px', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap', gap: '20px' }}>
        
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ color: '#e5afb7', margin: '0 0 5px 0', letterSpacing: '2px', fontSize: '1.1rem', fontWeight: '400' }}>CRUELTY FREE</h4>
          <p style={{ color: '#a3989a', margin: 0, fontSize: '0.8rem' }}>100% Certified Ethical Solutions</p>
        </div>

        <div style={{ width: '1px', height: '40px', backgroundColor: '#261f22' }}></div>

        <div style={{ textAlign: 'center' }}>
          <h4 style={{ color: '#e5afb7', margin: '0 0 5px 0', letterSpacing: '2px', fontSize: '1.1rem', fontWeight: '400' }}>ORGANIC FORMULAS</h4>
          <p style={{ color: '#a3989a', margin: 0, fontSize: '0.8rem' }}>Botanical Standard Selection</p>
        </div>

        <div style={{ width: '1px', height: '40px', backgroundColor: '#261f22' }}></div>

        <div style={{ textAlign: 'center' }}>
          <h4 style={{ color: '#e5afb7', margin: '0 0 5px 0', letterSpacing: '2px', fontSize: '1.1rem', fontWeight: '400' }}>GLOBAL CONCIERGE</h4>
          <p style={{ color: '#a3989a', margin: 0, fontSize: '0.8rem' }}>Premium Premium 24/7 Care Access</p>
        </div>

      </div>
    </div>
  );
};

export default Banner;
