import React from 'react'

const SocialProof = () => {
  const testimonials = [
    {
      name: 'Rizky Pratama',
      role: 'Desainer Grafis',
      comment: 'Sepatu yang nyaman untuk seharian kerja dan tetap stylish. Banyak kolega yang tanya dimana belinya!',
      rating: 5
    },
    {
      name: 'Budi Santoso',
      role: 'Entrepreneur',
      comment: 'Karakter sepatu ini yang bikin beda. Tidak mainstream dan benar-benar mencerminkan kepribadian saya.',
      rating: 5
    },
    {
      name: 'Ahmad Fauzi',
      role: 'Mahasiswa',
      comment: 'Dari segi kenyamanan tidak perlu diragukan lagi. Sudah pakai 6 bulan masih seperti baru.',
      rating: 4
    }
  ]

  const stats = [
    { number: '5.000+', label: 'Sepatu Terjual' },
    { number: '98%', label: 'Kepuasan Pelanggan' },
    { number: '50+', label: 'Desain Eksklusif' },
    { number: '3 Tahun', label: 'Garansi' }
  ]

  return (
    <section style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <h2 className="text-center">Dipercaya oleh <span style={{ color: 'var(--secondary-blue)' }}>Ribuan Pengguna</span></h2>
        <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
          Mereka telah menemukan pasangan sepatu yang tidak hanya nyaman, tetapi juga menjadi bagian dari identitas mereka.
        </p>
        
        {/* Stats */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2.5rem',
                fontWeight: '700',
                color: 'var(--secondary-blue)',
                marginBottom: '0.5rem'
              }}>
                {stat.number}
              </div>
              <div style={{ 
                fontSize: '1.1rem',
                color: 'var(--primary-blue)',
                fontWeight: '600'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{ 
              padding: '2rem',
              borderRadius: 'var(--border-radius)',
              backgroundColor: 'var(--light-blue)',
              position: 'relative'
            }}>
              <div style={{ marginBottom: '1rem' }}>
                {[...Array(5)].map((_, i) => (
                  <i 
                    key={i} 
                    className={`fas fa-star ${i < testimonial.rating ? 'text-yellow' : 'text-light'}`}
                    style={{ 
                      color: i < testimonial.rating ? '#FFD700' : 'var(--medium-gray)',
                      marginRight: '3px'
                    }}
                  ></i>
                ))}
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>
                "{testimonial.comment}"
              </p>
              <div>
                <div style={{ fontWeight: '600', color: 'var(--primary-blue)' }}>
                  {testimonial.name}
                </div>
                <div style={{ color: 'var(--dark-gray)', fontSize: '0.9rem' }}>
                  {testimonial.role}
                </div>
              </div>
              <div style={{
                position: 'absolute',
                top: '-15px',
                right: '20px',
                fontSize: '3rem',
                color: 'var(--secondary-blue)',
                opacity: '0.2'
              }}>
                <i className="fas fa-quote-right"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof