import React from 'react'

const CTA = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '62895386778070'
    const message = `Halo Man Run, saya tertarik dengan produk Anda dan ingin melakukan pemesanan. Bisa dibantu?`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section style={{ 
      backgroundColor: 'var(--primary-blue)',
      color: 'var(--white)'
    }}>
      <div className="container">
        <div style={{ 
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{ color: 'var(--white)' }}>Saatnya Miliki Sepatu dengan Karakter!</h2>
          <p style={{ 
            fontSize: '1.2rem',
            marginBottom: '2.5rem',
            opacity: '0.9'
          }}>
            Jangan hanya mengikuti arus, ciptakan jalan Anda sendiri. 
            Dengan Man Run, setiap langkah adalah pernyataan.
          </p>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            <button 
              onClick={handleWhatsAppClick}
              className="btn btn-lg"
              style={{ 
                backgroundColor: 'var(--secondary-blue)',
                fontSize: '1.3rem',
                padding: '1.2rem 3rem'
              }}
            >
              <i className="fab fa-whatsapp" style={{ marginRight: '15px' }}></i>
              PESAN SEKARANG VIA WHATSAPP
            </button>
            
            <p style={{ opacity: '0.8', fontSize: '0.9rem' }}>
              <i className="fas fa-shield-alt" style={{ marginRight: '8px' }}></i>
              Transaksi aman • Garansi 3 tahun • Gratis konsultasi
            </p>
          </div>
          
          <div style={{
            marginTop: '3rem',
            padding: '1.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 'var(--border-radius)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-shipping-fast" style={{ marginRight: '10px', color: 'var(--secondary-blue)' }}></i>
              <span>Gratis Ongkir</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-exchange-alt" style={{ marginRight: '10px', color: 'var(--secondary-blue)' }}></i>
              <span>Pengembalian Mudah</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-headset" style={{ marginRight: '10px', color: 'var(--secondary-blue)' }}></i>
              <span>Dukungan 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA