import { Footer, Header, Premium } from './components'
import { BgPatternOne } from './components/SVGs/BgPatternOne'

const App = () => {
  return (
    <div className="bg-hero-pattern bg-50-25 iphone:bg-main-mobile iphone:bg-20-20">
      <div className="max-w-main mx-auto pt-[62px] iphone:pt-10 pb-[91px] iphone:pb-20 relative z-20 overflow-hidden">
        <Header />
        <Premium />
        <Footer />
        <BgPatternOne />
      </div>
    </div>
  )
}

export default App
