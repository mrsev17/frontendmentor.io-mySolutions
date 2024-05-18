import { MainInfo, Price, WhyUs } from './components'

const App = () => {
  return (
    <div className="h-screen bg-sky flex flex-col justify-center items-center tablet:h-auto">
      <section className="max-w-content w-full h-[475px] bg-white rounded-lg flex flex-col justify-between tablet:h-auto">
        <MainInfo />
        <div className="flex tablet:flex-col">
          <Price />
          <WhyUs />
        </div>
      </section>
    </div>
  )
}

export default App
