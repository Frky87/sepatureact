import React from 'react'

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: 'var(--dark-blue)',
      color: 'var(--white)',
      padding: '3rem 1.5rem'
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h3 style={{ color: 'var(--white)', marginBottom: '1.5rem' }}>
              <span style={{ color: 'var(--secondary-blue)' }}>MAN RUN</span>
            </h3>
            <p style={{ opacity: '0.8', marginBottom: '1rem' }}>
              Sepatu dengan karakter untuk individu yang ingin berdiri dari keramaian.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: 'var(--white)', fontSize: '1.2rem' }}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" style={{ color: 'var(--white)', fontSize: '1.2rem' }}>
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" style={{ color: 'var(--white)', fontSize: '1.2rem' }}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" style={{ color: 'var(--white)', fontSize: '1.2rem' }}>
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--white)', marginBottom: '1.5rem' }}>Kontak Kami</h4>
            <div style={{ opacity: '0.8' }}>
              <p style={{ marginBottom: '0.5rem' }}>
                <i className="fas fa-phone" style={{ marginRight: '10px' }}></i>
                0895-3867-78070
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <i className="fas fa-envelope" style={{ marginRight: '10px' }}></i>
                info@manrun.com
              </p>
              <p>
                <i className="fas fa-map-marker-alt" style={{ marginRight: '10px' }}></i>
                Jakarta, Indonesia
              </p>
            </div>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--white)', marginBottom: '1.5rem' }}>Jam Operasional</h4>
            <div style={{ opacity: '0.8' }}>
              <p style={{ marginBottom: '0.5rem' }}>
                Senin - Jumat: 09.00 - 18.00
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                Sabtu: 09.00 - 15.00
              </p>
              <p>
                Minggu & Hari Libur: Tutup
              </p>
            </div>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '1.5rem',
          textAlign: 'center',
          opacity: '0.7',
          fontSize: '0.9rem'
        }}>
          <p>&copy; {new Date().getFullYear()} Man Run. All rights reserved. Setiap langkah adalah cerita.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer