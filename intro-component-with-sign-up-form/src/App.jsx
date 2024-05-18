import { Form } from './components'
import { MainInfo } from './components/MainInfo'

const App = () => {
  // const validateEmail = (email) => {
  //   console.log('test')
  //   return /\S+@\S+\.\S+/.test(email)
  // }
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-salmon">
      <section className="max-w-main w-full min-h-[800px] bg-hero-pattern">
        <div className="max-w-content w-full h-[800px] flex justify-center items-center mx-auto">
          <MainInfo />
          <Form />
        </div>
      </section>
    </div>
  )
}

export default App
