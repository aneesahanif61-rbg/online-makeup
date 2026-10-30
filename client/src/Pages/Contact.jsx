import React from 'react';

const Contact = () => {
  return (
    <div style={{ backgroundColor: '#0a0809', color: '#ffffff', minHeight: '100vh', fontFamily: "sans-serif", padding: '140px 40px 80px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px' }}>
        
        {/* Info Box */}
        <div>
          <p style={{ color: '#e5afb7', letterSpacing: '5px', fontSize: '0.8rem', marginBottom: '10px' }}>// CONCIERGE</p>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '300', marginBottom: '30px' }}>Get In Touch</h1>
          <p style={{ color: '#a3989a', lineHeight: '1.8', marginBottom: '40px' }}>Our dedicated aesthetic support specialists are online to cater to your custom orders and product queries.</p>
          
          <div style={{ borderTop: '1px solid #1a1417', paddingTop: '30px', marginBottom: '20px' }}>
            <h4 style={{ color: '#e5afb7', fontSize: '0.9rem', letterSpacing: '1px', marginBottom: '5px' }}>GLOBAL HQ</h4>
            <p style={{ color: '#a3989a', fontSize: '0.95rem' }}>750 Luxury Boulevard, Suite 100, New York</p>
          </div>
          <div>
            <h4 style={{ color: '#e5afb7', fontSize: '0.9rem', letterSpacing: '1px', marginBottom: '5px' }}>EMAIL</h4>
            <p style={{ color: '#a3989a', fontSize: '0.95rem' }}>concierge@lumera-beauty.com</p>
          </div>
        </div>

        {/* Luxury Minimal Form */}
        <div style={{ background: '#110d0f', padding: '40px', borderRadius: '4px', border: '1px solid #1a1417' }}>
          <form onSubmit={(e) => e.preventDefault()}>
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', color: '#e5afb7', fontSize: '0.75rem', letterSpacing: '2px', marginBottom: '10px' }}>FULL NAME</label>
              <input type="text" style={{ width: '100%', background: '#0a0809', border: '1px solid #261f22', padding: '12px', color: '#ffffff', outline: 'none' }} />
            </div>
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', color: '#e5afb7', fontSize: '0.75rem', letterSpacing: '2px', marginBottom: '10px' }}>EMAIL ADDRESS</label>
              <input type="email" style={{ width: '100%', background: '#0a0809', border: '1px solid #261f22', padding: '12px', color: '#ffffff', outline: 'none' }} />
            </div>
            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', color: '#e5afb7', fontSize: '0.75rem', letterSpacing: '2px', marginBottom: '10px' }}>YOUR ENQUIRY</label>
              <textarea rows="4" style={{ width: '100%', background: '#0a0809', border: '1px solid #261f22', padding: '12px', color: '#ffffff', outline: 'none', resize: 'none' }}></textarea>
            </div>
            <button type="submit" style={{ width: '100%', backgroundColor: '#e5afb7', color: '#0a0809', padding: '14px', border: 'none', fontWeight: 'bold', letterSpacing: '2px', cursor: 'pointer' }}>SUBMIT TO CONCIERGE</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
