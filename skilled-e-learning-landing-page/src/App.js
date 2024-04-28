import { Courses, Footer, Header } from './components'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="max-w-main w-full m-auto overflow-hidden relative min-h-[820px]">
        <Header />
        <Courses />
      </div>
      <Footer />
    </div>
  )
}

export default App
