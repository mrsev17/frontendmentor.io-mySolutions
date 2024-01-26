import {
    MainImage,
    PreparationTime,
    TitleDescription,
    Ingredients,
} from "./components";
import "./App.css";

function App() {
    return (
        <div className="app">
            <div className="recipe-wrapper">
                <div className="main-image-container">
                    <MainImage />
                </div>
                <div className="title-description-wrapper">
                    <TitleDescription />
                </div>
                <div className="preparation-time">
                    <PreparationTime />
                </div>
                <div className="ingredients">
                    <Ingredients />
                </div>
            </div>
        </div>
    );
}

export default App;
