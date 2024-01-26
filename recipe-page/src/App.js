import {
    MainImage,
    PreparationTime,
    TitleDescription,
    Ingredients,
    Instructions,
    Nutrition,
} from "./components";
import "./App.css";

function App() {
    return (
        <div className="app">
            <div className="recipe-wrapper">
                <section className="main-image-wrapper">
                    <MainImage />
                </section>
                <section className="title-description-wrapper">
                    <TitleDescription />
                </section>
                <section className="preparation-time-wrapper">
                    <PreparationTime />
                </section>
                <section className="ingredients-wrapper">
                    <Ingredients />
                </section>
                <section className="instructions-wrapper">
                    <Instructions />
                </section>
                <section className="nutrition-wrapper">
                    <Nutrition />
                </section>
            </div>
        </div>
    );
}

export default App;
