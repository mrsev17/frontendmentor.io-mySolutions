import { Header, Banner, Advantages, Founder, Footer } from "./components";
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
            <Footer />
        </div>
    );
}

export default App;
