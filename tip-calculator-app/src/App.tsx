import './App.css'
import { Container, TipForm } from './components'
import { ResetBtn, ResultItem } from './components'
import { Logo } from './components/SVGs/Logo'
import { useAppSelector } from './hooks/hooks'

const App = () => {
  const getAmountTip = useAppSelector((state) => state.calculatorTip.tipAmount)
  const getTotal = useAppSelector((state) => state.calculatorTip.total)
  return (
    <div className="App min-h-screen max-lg:min-h-full max-lg:pt-[50px] bg-mainBg flex flex-col items-center justify-center">
      <Container className="flex flex-col w-full justify-center items-center gap-[88px] max-lg:gap-10">
        <Logo />
        <Container className="max-w-[920px] w-full bg-white rounded-mainWrapper max-lg:rounded-b-none p-8 shadow-accent flex justify-between max-lg:flex-col max-lg:justify-center max-lg:gap-8">
          <TipForm />
          <Container className="bg-deepGreen min-h-[417px] max-lg:min-h-full  h-full w-[50%] max-lg:w-full rounded-result p-10 flex flex-col justify-between max-lg:gap-[35px]">
            <Container className="flex flex-col gap-10 max-lg:gap-[21px]">
              <ResultItem title="Tip Amount" value={getAmountTip} />
              <ResultItem title="Total" value={getTotal} />
            </Container>
            <ResetBtn />
          </Container>
        </Container>
      </Container>
    </div>
  )
}

export default App
