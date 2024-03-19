import './App.css'
import { Header, Banner } from './components'

const App = () => {
  return (
    <div className="App">
      <Header width={32} height={32} />
      <main>
        <Banner />
      </main>
    </div>
  )
}

export default App
