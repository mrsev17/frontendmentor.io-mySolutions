import './App.css'
import { Header, Banner, Designer } from './components'

const App = () => {
  return (
    <div className="App">
      <Header width={32} height={32} />
      <main>
        <Banner />
        <Designer />
      </main>
    </div>
  )
}

export default App
