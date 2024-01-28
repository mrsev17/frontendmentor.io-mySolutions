import { MainInfo, Links } from "./components";
import "./App.css";

function App() {
    return (
        <div className="app">
            <section className="profile-social-card">
                <div className="profile-wrapper">
                    <MainInfo />
                    <Links />
                </div>
            </section>
        </div>
    );
}

export default App;
