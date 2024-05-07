import './App.css'
import { MainCard } from './components/MainCard'

const App = () => {
  return (
    <div className="h-screen max-sm:h-auto flex flec-col justify-center items-center bg-light-blue bg-main-pattern-desktop max-sm:bg-main-pattern-mobile bg-contain bg-no-repeat">
      <MainCard />
    </div>
  )
}

export default App
