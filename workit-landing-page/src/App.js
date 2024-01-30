import { Header, Banner, Advantages, Founder } from "./components";
import "./App.css";

function App() {
    return (
        <div className="app">
            <div className="header-banner">
                <Header />
                <Banner />
            </div>
            <main>
                <Advantages />
                <Founder />
            </main>
        </div>
    );
}

export default App;
