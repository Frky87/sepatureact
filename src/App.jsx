import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import WhySection from './components/WhySection'
import ProductList from './components/ProductList'
import CTA from './components/CTA'
import SocialProof from './components/SocialProof'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('App mounted, using static data...')
    
    // Data statis saja untuk sekarang
    const staticProducts = [
      {
        id: '1',
        nama: 'Man Run Explorer',
        deskripsi: 'Sepatu eksplorasi dengan desain adventurous untuk petualang kota modern. Nyaman untuk jalan-jalan panjang.',
        harga: 450000,
        kategori: 'Outdoor',
        ukuran: ['40', '41', '42', '43', '44'],
        jenis: 'Adventure',
        gambar: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80'
      },
      {
        id: '2',
        nama: 'Urban Walker',
        deskripsi: 'Sepatu kasual untuk gaya urban yang stylish. Cocok untuk kegiatan sehari-hari di perkotaan.',
        harga: 380000,
        kategori: 'Casual',
        ukuran: ['39', '40', '41', '42', '43'],
        jenis: 'Urban',
        gambar: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80'
      },
      {
        id: '3',
        nama: 'Man Run Performance',
        deskripsi: 'Sepatu performa tinggi untuk aktivitas fisik. Dengan teknologi cushioning terbaru untuk kenyamanan maksimal.',
        harga: 550000,
        kategori: 'Sport',
        ukuran: ['41', '42', '43', '44', '45'],
        jenis: 'Performance',
        gambar: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80'
      }
    ]
    
    setTimeout(() => {
      setProducts(staticProducts)
      setLoading(false)
      console.log('Products set:', staticProducts)
    }, 500)
    
  }, [])

  return (
    <div className="App">
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      <ErrorBoundary>
        <WhySection />
      </ErrorBoundary>
      <ErrorBoundary>
        <ProductList products={products} loading={loading} />
      </ErrorBoundary>
      <ErrorBoundary>
        <SocialProof />
      </ErrorBoundary>
      <ErrorBoundary>
        <CTA />
      </ErrorBoundary>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  )
}

export default App