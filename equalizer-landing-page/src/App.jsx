import { Header } from './components/Header'
import { PremiumEq } from './components/PremiumEq'
import { BgPatternOne } from './components/SVGs/BgPatternOne'

const App = () => {
  return (
    <div className="bg-hero-pattern bg-50-25 min-h-[1832px]">
      <div className="max-w-[1440px] mx-auto pt-[62px] pb-[91px] relative">
        <div className="max-w-[1110px] mx-auto">
          <Header />
          <PremiumEq />
        </div>
        <div className="absolute top-[-40px] right-0 z-[-1]">
          <BgPatternOne />
        </div>
      </div>
    </div>
  )
}

export default App
