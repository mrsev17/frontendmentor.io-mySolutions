import { Form, Success } from './components'
import { useAppSelector } from './hooks/hooks'

const App = () => {
  const getSuccess = useAppSelector((state) => state.form.success)
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-salad relative mobile:h-auto mobile:py-6">
      {getSuccess && <Success />}
      <Form />
    </div>
  )
}

export default App
