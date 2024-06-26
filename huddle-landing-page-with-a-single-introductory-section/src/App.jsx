import { Header, Main, Footer } from './components'

const App = () => {
  return (
    <div className="h-screen tablet:h-auto bg-purple flex flex-col justify-center items-center bg-pattern-desktop bg-no-repeat bg-contain tablet:bg-pattern-mobile">
      <div className="max-w-main h-[800px] tablet:h-full  flex flex-col justify-center items-center">
        <div className="max-w-content w-full h-full flex flex-col justify-between max-h-[700px] tablet:max-w-[96%] tablet:py-[38px] tablet:max-h-[100%]">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
