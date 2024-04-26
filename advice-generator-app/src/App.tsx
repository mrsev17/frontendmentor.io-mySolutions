import { Container, BtnAdvice, Divider } from './components'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { useEffect } from 'react'
import { fetchAdvice } from './redux/adviceSlice'
import './App.css'

const App = () => {
  const dispatch = useAppDispatch()
  const getAdvice = useAppSelector((state) => state.advices.adviceInfo)
  const getError = useAppSelector((state) => state.advices.error)

  useEffect(() => {
    dispatch(fetchAdvice())
  }, [dispatch])

  return (
    <div className="App min-h-screen flex flex-col justify-center items-center bg-darkBlue">
      <Container className="relative bg-grayishBlue w-full max-w-[540px] rounded-15 px-12 pt-12 pb-[72px] text-center max-[567px]:mx-4 max-[567px]:max-w-auto max-[567px]:w-auto max-[567px]:px-6">
        <h1 className="text-13 leading-[18px] tracking-[4px] font-extrabold text-neonGreen mb-6">
          ADVICE #{getAdvice.id}
        </h1>
        <p className="text-28 leading-[38px] font-extrabold text-lightCyan mb-10">
          {getError ? getError : getAdvice.advice}
        </p>
        <Divider />
        <BtnAdvice />
      </Container>
    </div>
  )
}

export default App
