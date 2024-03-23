import './App.css'
import { Card } from './components'

const App: React.FC = () => {
  return (
    <div className="app">
      <main className="h-screen flex justify-center items-center">
        <Card />
      </main>
    </div>
  )
}

export default App
