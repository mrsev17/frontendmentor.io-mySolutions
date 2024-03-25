import './App.scss'
import { Advices, Means } from './components'

const App: React.FC = () => {
  return (
    <div className="App">
      <header></header>
      <main>
        <Means />
        <Advices />
      </main>
    </div>
  )
}

export default App
