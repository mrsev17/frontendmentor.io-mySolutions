import { MainCard } from './components'

const App = () => {
  return (
    <div className="h-screen  bg-ocean bg-pattern-top bg-no-repeat bg-49% bg-10-200 iphone:bg-40-60 iphone:bg-60%">
      <div className="h-screen bg-pattern-bottom bg-no-repeat bg-140-500 iphone:bg-0-500 flex flex-col justify-center items-center">
        <MainCard />
      </div>
    </div>
  )
}

export default App
