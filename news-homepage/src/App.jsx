import './App.css'
import { Banner, Header, ImportantNews } from './components'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="flex flex-col">
        <Banner />
        <ImportantNews />
      </main>
    </div>
  )
}

export default App
