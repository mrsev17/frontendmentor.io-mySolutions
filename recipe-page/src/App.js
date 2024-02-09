import {
    MainImage,
    PreparationTime,
    TitleDescription,
    Ingredients,
    Instructions,
    Nutrition,
} from "./components";

import "./globalStyles.css";
import "./App.css";

function App() {
    return (
        <div className="app">
            <div className="recipe-wrapper">
                <MainImage />
                <TitleDescription />
                <PreparationTime />
                <Ingredients />
                <div className="accent-line"></div>
                <Instructions />
                <Nutrition />
            </div>
        </div>
    );
}

export default App;
