import React from 'react'

const SimpleProductList = ({ products }) => {
  console.log('SimpleProductList received:', products)
  
  if (!products || products.length === 0) {
    return (
      <section style={{ padding: '3rem', textAlign: 'center' }}>
        <h2>Produk Man Run</h2>
        <p>Belum ada produk yang tersedia.</p>
      </section>
    )
  }

  return (
    <section style={{ padding: '3rem', backgroundColor: '#f5f7fa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Produk Man Run</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
          {products.map(product => {
            // Pastikan deskripsi adalah string
            const description = String(product.deskripsi || 'Tidak ada deskripsi')
            
            return (
              <div key={product.id} style={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                padding: '1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3>{String(product.nama || 'Produk tanpa nama')}</h3>
                <p>{description.substring(0, 50)}...</p>
                <p><strong>Harga:</strong> Rp {Number(product.harga || 0).toLocaleString('id-ID')}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SimpleProductList