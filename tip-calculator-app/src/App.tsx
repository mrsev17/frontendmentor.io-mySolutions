import './App.css'
import { Container, InputTip } from './components'
import { ResetBtn } from './components/ResetBtn'
import { ResultItem } from './components/ResultItem'
import { Dollar } from './components/SVGs/Dollar'
import { Logo } from './components/SVGs/Logo'
import { Person } from './components/SVGs/Person'
import { TipOptions } from './components/TipOptions'

const App = () => {
  return (
    <div className="App min-h-screen max-lg:min-h-full max-lg:pt-[50px] bg-mainBg flex flex-col items-center justify-center">
      <Container className="flex flex-col w-full justify-center items-center gap-[88px] max-lg:gap-10">
        <Logo />
        <Container className="max-w-[920px] w-full bg-white rounded-mainWrapper max-lg:rounded-b-none p-8 shadow-accent flex justify-between max-lg:flex-col max-lg:justify-center max-lg:gap-8">
          <Container className="max-w-[379px] flex flex-col justify-between min-h-[388px] h-full max-lg:max-w-full max-lg:gap-8">
            <InputTip
              label="Bill"
              placeholder="0"
              value="0"
              onChange={() => ''}
            >
              <Dollar />
            </InputTip>
            <TipOptions />
            <InputTip
              label="Number of People"
              placeholder="0"
              value="0"
              onChange={() => ''}
            >
              <Person />
            </InputTip>
          </Container>
          <Container className="bg-deepGreen min-h-[417px] max-lg:min-h-full  h-full w-[50%] max-lg:w-full rounded-result p-10 flex flex-col justify-between max-lg:gap-[35px]">
            <Container className="flex flex-col gap-10 max-lg:gap-[21px]">
              <ResultItem title="Tip Amount" value={4.27} />
              <ResultItem title="Total" value={32.79} />
            </Container>
            <ResetBtn />
          </Container>
        </Container>
      </Container>
    </div>
  )
}

export default App
