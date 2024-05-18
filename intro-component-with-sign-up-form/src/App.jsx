import { Form } from './components'
import { MainInfo } from './components/MainInfo'

const App = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-salmon tablet:h-auto">
      <section className="max-w-main w-full min-h-[800px] bg-hero-pattern tablet:max-w-[94%] tablet:mt-16 tablet:pb-[68px]">
        <div className="max-w-content w-full h-[800px] flex justify-center items-center mx-auto tablet:flex-col tablet:h-auto tablet:gap-16">
          <MainInfo />
          <Form />
        </div>
      </section>
    </div>
  )
}

export default App
