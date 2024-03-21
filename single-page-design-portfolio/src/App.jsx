import './App.css'
import { Header, Banner, Designer, MyWork } from './components'
import { CallWithMe } from './components/CallWithMe/CallWithMe'
import { StyleSheetManager } from 'styled-components'

const App = () => {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isRTL'}>
      <div className="App">
        <header>
          <Header width={32} height={32} />
        </header>
        <main>
          <Banner />
          <Designer />
          <MyWork />
          <CallWithMe />
        </main>
        <footer>
          <Header width={32} height={32} />
        </footer>
      </div>
    </StyleSheetManager>
  )
}

export default App
