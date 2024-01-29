import "./App.css";
import { ArticleDescr, MainImage, AuthorInfo } from "./components";

function App() {
    return (
        <div className="app">
            <div className="card-wrapper">
                <MainImage />
                <ArticleDescr />
                <AuthorInfo />
            </div>
        </div>
    );
}

export default App;
