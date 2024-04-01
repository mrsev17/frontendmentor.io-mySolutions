import { Advices, Banner, Means } from './components'
import logoIcon from './assets/images/logo.svg'
import './App.scss'

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="nested-container">
        <img src={logoIcon} alt="Logo" />
        <Banner />
      </header>
      <main>
        <Means />
        <Advices />
      </main>
    </div>
  )
}

export default App
