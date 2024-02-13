// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./globalStyles.module.scss";
import s from "./App.module.scss";
import { StepsWidget } from "components";
import { MainForm } from "components/MainForm";

const App: React.FC = () => {
    return (
        <div className={s.app}>
            <main>
                <section className={s.multiStepSection}>
                    <div className="container d-flex">
                        <StepsWidget />
                        <MainForm />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default App;
