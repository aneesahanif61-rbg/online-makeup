import React from 'react';
import lipstickkImg from '../assets/lipstickk.webp';
import thodeproductImg from '../assets/thodeproduct.avif';

const LatestCollection = () => {
  return (
    <section style={{ backgroundColor: '#0a0809', padding: '100px 40px', color: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '50px' }}>
          <p style={{ color: '#e5afb7', letterSpacing: '4px', fontSize: '0.8rem', marginBottom: '10px' }}>// FRESH ARRIVALS</p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '300', margin: 0 }}>The Latest Drops</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '40px' }}>
          
          {/* Box Variant 1 */}
          <div style={{ position: 'relative', height: '500px', overflow: 'hidden', borderRadius: '4px', border: '1px solid #1a1417' }}>
            <img src={thodeproductImg} alt="Drop One" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'linear-gradient(to top, rgba(10,8,9,0.9), transparent)', padding: '40px' }}>
              <span style={{ color: '#e5afb7', fontSize: '0.8rem', letterSpacing: '2px' }}>SKINCARE SERUMS</span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '300', margin: '10px 0' }}>The Pastel Bloom Box</h3>
              <button style={{ background: 'transparent', border: 'none', borderBottom: '1px solid #ffffff', color: '#ffffff', cursor: 'pointer', paddingBottom: '4px', fontSize: '0.85rem', letterSpacing: '1px' }}>DISCOVER</button>
            </div>
          </div>

          {/* Box Variant 2 */}
          <div style={{ position: 'relative', height: '500px', overflow: 'hidden', borderRadius: '4px', border: '1px solid #1a1417' }}>
            <img src={lipstickkImg} alt="Drop Two" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'linear-gradient(to top, rgba(10,8,9,0.9), transparent)', padding: '40px' }}>
              <span style={{ color: '#e5afb7', fontSize: '0.8rem', letterSpacing: '2px' }}>MATTE LUXURY</span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '300', margin: '10px 0' }}>Satin Matte Lip Modules</h3>
              <button style={{ background: 'transparent', border: 'none', borderBottom: '1px solid #ffffff', color: '#ffffff', cursor: 'pointer', paddingBottom: '4px', fontSize: '0.85rem', letterSpacing: '1px' }}>DISCOVER</button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LatestCollection;
