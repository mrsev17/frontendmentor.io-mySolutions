import "./App.css";
import { AccordionOptions } from "./components/AccordionOptions/AccordionOptions";
import { MainTitle } from "./components/MainTitle/MainTitle";

function App() {
    return (
        <div className="app">
            <section className="faq">
                <MainTitle />
                <AccordionOptions />
            </section>
        </div>
    );
}

export default App;
