import { Gallery, Header, Modern, Footer, Step } from './components'

const App = () => {
  return (
    <div className="max-w-main m-auto">
      <Header />
      <Step step="01" className="mb-16" />
      <Gallery />
      <Modern />
      <Footer />
    </div>
  )
}

export default App
