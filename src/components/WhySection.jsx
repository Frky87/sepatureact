import React from 'react'

const WhySection = () => {
  const features = [
    {
      icon: 'fas fa-gem',
      title: 'Material Premium',
      description: 'Dibuat dari bahan berkualitas tinggi yang tahan lama dan nyaman sepanjang hari.'
    },
    {
      icon: 'fas fa-palette',
      title: 'Desain Unik & Berkarakter',
      description: 'Setiap model memiliki cerita dan karakter tersendiri, bukan sekedar tren.'
    },
    {
      icon: 'fas fa-heart',
      title: 'Fokus pada Kenyamanan',
      description: 'Ergonomi terbaik dengan dukungan yang pas untuk aktivitas sehari-hari.'
    },
    {
      icon: 'fas fa-leaf',
      title: 'Ramah Lingkungan',
      description: 'Proses produksi yang memperhatikan keberlanjutan dan dampak lingkungan.'
    }
  ]

  return (
    <section id="why" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <h2 className="text-center">Mengapa Memilih <span style={{ color: 'var(--secondary-blue)' }}>Man Run</span>?</h2>
        <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
          Kami tidak hanya menjual sepatu, tapi juga pengalaman. Setiap produk kami dirancang 
          dengan filosofi bahwa sepatu adalah ekstensi dari kepribadian Anda.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{ 
              textAlign: 'center',
              padding: '2rem',
              borderRadius: 'var(--border-radius)',
              backgroundColor: 'var(--light-blue)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ 
                fontSize: '2.5rem',
                color: 'var(--secondary-blue)',
                marginBottom: '1.5rem'
              }}>
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div style={{ 
          marginTop: '4rem',
          padding: '2.5rem',
          backgroundColor: 'var(--primary-blue)',
          borderRadius: 'var(--border-radius-lg)',
          color: 'var(--white)',
          textAlign: 'center'
        }}>
          <h3 style={{ color: 'var(--white)' }}>Siap untuk Langkah Berikutnya?</h3>
          <p style={{ marginBottom: '1.5rem', maxWidth: '700px', margin: '1rem auto 2rem' }}>
            Bergabunglah dengan ribuan individu yang telah menemukan ekspresi diri mereka melalui 
            sepatu Man Run. Tidak hanya nyaman, tapi juga berbicara banyak tentang siapa Anda.
          </p>
          <a href="#products" className="btn" style={{ backgroundColor: 'var(--secondary-blue)' }}>
            <i className="fas fa-arrow-right" style={{ marginRight: '10px' }}></i>
            Jelajahi Koleksi Sekarang
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhySection