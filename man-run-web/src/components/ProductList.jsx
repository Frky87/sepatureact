import React, { useState } from 'react'

const ProductList = ({ products, loading }) => {
  const [selectedCategory, setSelectedCategory] = useState('Semua')

  console.log('ProductList rendered with products:', products)
  console.log('First product:', products[0])
  console.log('First product deskripsi:', products[0]?.deskripsi)
  console.log('Type of deskripsi:', typeof products[0]?.deskripsi)

  // Ekstrak kategori unik dari produk
  const categories = ['Semua']
  if (products && products.length > 0) {
    const uniqueCategories = [...new Set(products.map(product => product.kategori).filter(Boolean))]
    categories.push(...uniqueCategories)
  }

  // Filter produk berdasarkan kategori
  const filteredProducts = selectedCategory === 'Semua' 
    ? products 
    : products.filter(product => product.kategori === selectedCategory)

  console.log('Filtered products:', filteredProducts)

  // Format harga ke Rupiah
  const formatPrice = (price) => {
    if (!price && price !== 0) return 'Rp 0'
    const numPrice = typeof price === 'number' ? price : Number(price)
    if (isNaN(numPrice)) return 'Rp 0'
    
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(numPrice)
  }

  // Fungsi untuk mendapatkan deskripsi yang aman
  const getSafeDescription = (desc) => {
    console.log('Getting description:', desc, 'type:', typeof desc)
    
    if (desc === undefined || desc === null) {
      return 'Deskripsi tidak tersedia'
    }
    
    if (typeof desc === 'string') {
      return desc
    }
    
    if (typeof desc === 'number' || typeof desc === 'boolean') {
      return String(desc)
    }
    
    try {
      return JSON.stringify(desc)
    } catch (e) {
      return 'Deskripsi tidak tersedia'
    }
  }

  // Fungsi untuk mendapatkan nama yang aman
  const getSafeName = (name) => {
    if (!name) return 'Produk tanpa nama'
    if (typeof name === 'string') return name
    try {
      return String(name)
    } catch (e) {
      return 'Produk tanpa nama'
    }
  }

  // Fungsi untuk mendapatkan ukuran yang aman
  const getSafeSizes = (ukuran) => {
    if (!ukuran) return '-'
    if (Array.isArray(ukuran)) {
      return ukuran.join(', ')
    }
    if (typeof ukuran === 'string') {
      return ukuran
    }
    try {
      return String(ukuran)
    } catch (e) {
      return '-'
    }
  }

  return (
    <section id="products" style={{ backgroundColor: 'var(--light-gray)' }}>
      <div className="container">
        <h2 className="text-center">Koleksi Eksklusif <span style={{ color: 'var(--secondary-blue)' }}>Man Run</span></h2>
        <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
          Setiap model adalah mahakarya dengan karakter unik. Temukan sepatu yang selaras dengan gaya dan kepribadian Anda.
        </p>
        
        {/* Filter kategori - hanya tampilkan jika ada produk */}
        {categories.length > 1 && (
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '3rem'
          }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '0.8rem 1.5rem',
                  backgroundColor: selectedCategory === category ? 'var(--secondary-blue)' : 'var(--white)',
                  color: selectedCategory === category ? 'var(--white)' : 'var(--primary-blue)',
                  border: `2px solid ${selectedCategory === category ? 'var(--secondary-blue)' : 'var(--medium-gray)'}`,
                  borderRadius: '50px',
                  fontFamily: 'var(--heading-font)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        )}
        
        {/* Debug info */}
        <div style={{
          backgroundColor: 'rgba(52, 152, 219, 0.1)',
          padding: '0.5rem',
          marginBottom: '1rem',
          borderRadius: '4px',
          fontSize: '0.8rem',
          color: 'var(--dark-gray)'
        }}>
          Debug: {products.length} produk ditemukan | {filteredProducts.length} setelah filter
        </div>
        
        {/* Loading state */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <i className="fas fa-spinner fa-spin" style={{ fontSize: '3rem', color: 'var(--secondary-blue)' }}></i>
            <p style={{ marginTop: '1rem' }}>Memuat koleksi sepatu...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <i className="fas fa-shoe-prints" style={{ fontSize: '3rem', color: 'var(--medium-gray)' }}></i>
            <p style={{ marginTop: '1rem' }}>Tidak ada produk ditemukan.</p>
            {products.length === 0 && (
              <p style={{ fontSize: '0.9rem', color: 'var(--dark-gray)', marginTop: '0.5rem' }}>
                Produk sedang dalam persiapan. Silakan hubungi kami untuk informasi lebih lanjut.
              </p>
            )}
          </div>
        ) : (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2.5rem'
          }}>
            {filteredProducts.map(product => {
              // Debug setiap produk
              console.log('Rendering product:', product)
              console.log('Product deskripsi:', product.deskripsi, 'type:', typeof product.deskripsi)
              
              const safeName = getSafeName(product.nama)
              const safeDescription = getSafeDescription(product.deskripsi)
              const truncatedDescription = safeDescription.length > 100 
                ? `${safeDescription.substring(0, 100)}...` 
                : safeDescription
              
              return (
                <div key={product.id} style={{ 
                  backgroundColor: 'var(--white)',
                  borderRadius: 'var(--border-radius-lg)',
                  overflow: 'hidden',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)'
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)'
                }}
                >
                  {/* Gambar produk */}
                  <div style={{ 
                    height: '220px', 
                    overflow: 'hidden',
                    backgroundColor: 'var(--light-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {product.gambar ? (
                      <img 
                        src={product.gambar} 
                        alt={safeName} 
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.parentElement.innerHTML = '<i class="fas fa-shoe-prints" style="font-size: 4rem; color: var(--medium-gray)"></i>'
                        }}
                      />
                    ) : (
                      <i className="fas fa-shoe-prints" style={{ fontSize: '4rem', color: 'var(--medium-gray)' }}></i>
                    )}
                  </div>
                  
                  {/* Detail produk */}
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '1rem'
                    }}>
                      <h3 style={{ marginBottom: '0.5rem' }}>{safeName}</h3>
                      <span style={{ 
                        backgroundColor: 'var(--light-blue)',
                        color: 'var(--secondary-blue)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '50px',
                        fontSize: '0.9rem',
                        fontWeight: '600'
                      }}>
                        {product.jenis || 'Regular'}
                      </span>
                    </div>
                    
                    <p style={{ 
                      color: 'var(--dark-gray)', 
                      marginBottom: '1rem',
                      minHeight: '60px'
                    }}>
                      {truncatedDescription}
                    </p>
                    
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1.5rem'
                    }}>
                      <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary-blue)' }}>
                          {formatPrice(product.harga)}
                        </div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--dark-gray)' }}>
                          <i className="fas fa-ruler" style={{ marginRight: '5px' }}></i>
                          Ukuran: {getSafeSizes(product.ukuran)}
                        </div>
                      </div>
                      
                      {product.kategori && (
                        <div style={{ 
                          fontSize: '0.9rem',
                          color: 'var(--dark-gray)'
                        }}>
                          <i className="fas fa-tag" style={{ marginRight: '5px' }}></i>
                          {product.kategori}
                        </div>
                      )}
                    </div>
                    
                    <a 
                      href={`https://wa.me/62895386778070?text=Halo,%20saya%20tertarik%20dengan%20sepatu%20${encodeURIComponent(safeName)}%20dari%20Man%20Run.%20Bisa%20dibantu%20untuk%20pembeliannya?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={{ width: '100%' }}
                    >
                      <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i>
                      Pesan Sekarang
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        )}
        
        {/* CTA kecil di bawah produk */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '4rem',
          padding: '2rem',
          borderTop: '2px solid var(--light-blue)'
        }}>
          <h3>Tidak Menemukan yang Anda Cari?</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Hubungi kami untuk konsultasi personal tentang kebutuhan sepatu Anda.
          </p>
          <a 
            href="https://wa.me/62895386778070?text=Halo%20Man%20Run,%20saya%20ingin%20konsultasi%20tentang%20sepatu%20yang%20sesuai%20dengan%20kebutuhan%20saya."
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ backgroundColor: 'var(--primary-blue)' }}
          >
            <i className="fas fa-comments" style={{ marginRight: '10px' }}></i>
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProductList