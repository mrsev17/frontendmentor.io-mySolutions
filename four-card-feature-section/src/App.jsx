import { MainInfo, CardsWrapper } from './components'

const App = () => {
  return (
    <div className="h-screen tablet:h-auto w-full bg-app flex flex-col justify-center items-center">
      <section className="max-w-main w-full flex flex-col gap-16 tablet:py-16">
        <MainInfo />
        <CardsWrapper />
      </section>
    </div>
  )
}

export default App
