import { MainContainer } from './components/MainContainer'
import { ProductInfo } from './components/ProductInfo'
import desktopImg from './assets/image-product-desktop.jpg'
import './App.css'

const productData = {
  picture: desktopImg,
  category: 'PERFUME',
  title: 'Gabrielle Essence Eau De Parfum',
  description:
    'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
  price: 169.99,
  discountPrice: 149.99,
}

const App = () => {
  return (
    <div className="App flex flex-col justify-center items-center h-screen">
      <MainContainer>
        <img
          className="max-w-[350px] max-h-[450px] rounded-l-[10px]"
          src={productData.picture}
          alt={`Product ${productData.title}`}
        />
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
