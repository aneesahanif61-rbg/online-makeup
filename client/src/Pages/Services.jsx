import React from 'react';
import eyeImg from '../assets/eye.jpg';
import foundationImg from '../assets/foundation.jpg';
import serumImg from '../assets/serum.jpg';

const serviceMenu = [
  { id: '01', title: 'Bespoke Bridal Runway', price: '$250', img: foundationImg, desc: 'Custom high-definition master styling tailored perfectly for luxury weddings.' },
  { id: '02', title: 'Editorial & Campaign Look', price: '$180', img: eyeImg, desc: 'Avant-garde fashion concepts engineered for media shoots, print work, and runway projects.' },
  { id: '03', title: 'Digital Glow Treatment', price: '$75', img: serumImg, desc: 'One-on-one interactive virtual cosmetic analysis and personal skin routines.' }
];

const Services = () => {
  return (
    <div style={{ backgroundColor: '#0a0809', color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif', padding: '140px 40px 80px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid #1a1417', paddingBottom: '30px', marginBottom: '60px' }}>
          <div>
            <p style={{ color: '#e5afb7', letterSpacing: '6px', fontSize: '0.8rem', marginBottom: '10px' }}>// DESIGN EXPERIENCES</p>
            <h1 style={{ fontSize: '3.5rem', fontWeight: '300', margin: 0 }}>Our Services</h1>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {serviceMenu.map(service => (
            <div key={service.id} style={{ backgroundColor: '#110d0f', border: '1px solid #1a1417', borderRadius: '4px', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '500px' }}>
              <div style={{ height: '220px', width: '100%', overflow: 'hidden' }}>
                <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                    <span style={{ color: '#3d2f34', fontWeight: 'bold' }}>{service.id}</span>
                    <span style={{ color: '#e5afb7', fontWeight: 'bold' }}>{service.price}</span>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '400', color: '#e5afb7', marginBottom: '10px' }}>{service.title}</h3>
                  <p style={{ color: '#a3989a', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>{service.desc}</p>
                </div>
                <button style={{ background: 'transparent', border: 'none', borderBottom: '1px solid #e5afb7', color: '#e5afb7', width: 'max-content', padding: '4px 0', cursor: 'pointer', fontSize: '0.85rem', letterSpacing: '1px', fontWeight: 'bold' }}>
                  BOOK APPOINTMENT →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;
