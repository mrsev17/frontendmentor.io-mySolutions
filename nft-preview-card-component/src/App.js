import './App.css'
import { Container } from './components/Container'
import { Creator } from './components/Creator'
import { Divider } from './components/Divider'
import { ExtraInfo } from './components/ExtraInfo'
import { MainInfo } from './components/MainInfo'

const App = () => {
  return (
    <div className="App h-screen bg-deepBlue flex flex-col justify-center items-center">
      <Container>
        <MainInfo />
        <ExtraInfo />
        <Divider />
        <Creator />
      </Container>
    </div>
  )
}

export default App
