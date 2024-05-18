import { Footer, Form, Header } from './components'
import Dashboard from './assets/images/illustration-dashboard.png'

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-content w-full flex flex-col justify-center items-center pt-20 pb-[49px] tablet:max-w-[90%]">
        <Header />
        <main className="mb-[72px] tablet:mb-[120px]">
          <Form />
          <img
            src={Dashboard}
            alt="Dashboard"
            className="max-w-content max-h-[383px] tablet:max-w-[100%]"
          />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
