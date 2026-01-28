import React from 'react'

const Hero = () => {
  return (
    <section className="hero" style={{ 
      backgroundColor: 'var(--light-blue)', 
      paddingTop: '100px',
      paddingBottom: '80px'
    }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <h1 style={{ 
            color: 'var(--primary-blue)',
            marginBottom: '1.5rem'
          }}>
            <span style={{ color: 'var(--secondary-blue)' }}>MAN RUN</span> - Bukan Sekadar Sepatu, Tapi Karakter
          </h1>
          <p style={{ 
            fontSize: '1.3rem',
            maxWidth: '700px',
            marginBottom: '2rem',
            color: 'var(--dark-gray)'
          }}>
            Setiap langkah adalah cerita. Setiap sepatu adalah ekspresi diri. 
            Temukan pasangan yang bukan hanya nyaman, tapi juga mencerminkan siapa Anda.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#products" className="btn btn-lg">
              <i className="fas fa-shoe-prints" style={{ marginRight: '10px' }}></i>
              Lihat Koleksi
            </a>
            <a href="#why" className="btn btn-lg" style={{ 
              backgroundColor: 'transparent', 
              color: 'var(--secondary-blue)',
              border: '2px solid var(--secondary-blue)'
            }}>
              <i className="fas fa-question-circle" style={{ marginRight: '10px' }}></i>
              Kenapa Man Run?
            </a>
          </div>
          <div style={{ marginTop: '3rem', width: '100%', maxWidth: '800px' }}>
            <img 
              src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Man Run Shoes" 
              style={{ 
                width: '100%', 
                borderRadius: 'var(--border-radius-lg)',
                boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero