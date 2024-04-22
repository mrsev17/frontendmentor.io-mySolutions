import { Container } from './components/Container'
import { Content } from './components/Content'
import PictureCard from './assets/image-header-desktop.png'
import './App.css'

const App = () => {
  return (
    <div className="App bg-main lg:h-screen flex flex-col justify-center items-center p-6">
      <Container>
        <Content />
        <img
          className="max-lg:rounded-lg lg:rounded-r-lg"
          src={PictureCard}
          alt="Peoples in work"
        />
      </Container>
    </div>
  )
}

export default App
