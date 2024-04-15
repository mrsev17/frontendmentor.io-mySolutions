import { useState, useEffect } from 'react'
import { MainContainer } from './components/MainContainer'
import { ProductInfo } from './components/ProductInfo'
import desktopImg from './assets/image-product-desktop.jpg'
import mobileImg from './assets/image-product-mobile.jpg'
import './App.css'

const productData = {
  picture: desktopImg,
  mobilePicture: mobileImg,
  category: 'PERFUME',
  title: 'Gabrielle Essence Eau De Parfum',
  description:
    'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
  price: 169.99,
  discountPrice: 149.99,
}

const App = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 567)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="App flex flex-col justify-center items-center h-screen mx-4">
      <MainContainer>
        {isMobile ? (
          <img
            className="w-full max-h-[240px] rounded-t-[10px]"
            src={productData.mobilePicture}
            alt={`Product ${productData.title}`}
          />
        ) : (
          <img
            className="max-w-[350px] max-h-[450px] rounded-l-[10px]"
            src={productData.picture}
            alt={`Product ${productData.title}`}
          />
        )}
        <ProductInfo
          category={productData.category}
          title={productData.title}
          description={productData.description}
          price={productData.price}
          priceDiscount={productData.discountPrice}
        />
      </MainContainer>
    </div>
  )
}

export default App
