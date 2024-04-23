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
    <div className="App min-h-screen bg-mainBg flex flex-col items-center justify-center">
      <Container className="flex flex-col w-full justify-center items-center gap-[88px]">
        <Logo />
        <Container className="max-w-[920px] w-full min-h-[481px] bg-white rounded-mainWrapper p-8 shadow-accent flex justify-between">
          <Container className="max-w-[379px] flex flex-col justify-between min-h-[388px] h-full">
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
          <Container className="bg-deepGreen min-h-[417px] h-full w-[50%] rounded-result p-10 flex flex-col justify-between">
            <Container className="flex flex-col gap-10">
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
