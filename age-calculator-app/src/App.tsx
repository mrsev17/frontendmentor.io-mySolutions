import { InputsWrap, Result, Submit } from './components'
import './App.css'

const App = () => {
  return (
    <main className="App">
      <div className="app-wrapper">
        <InputsWrap />
        <Submit />
        <Result />
      </div>
    </main>
  )
}

export default App
