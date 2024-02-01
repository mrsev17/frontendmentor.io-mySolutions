import { Clipboard, RangeSlider } from "components";
import globalStyles from "./globalStyles.module.scss";
import styles from "./App.module.scss";

const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <h1>Password Generator</h1>
            <main>
                <section className={styles.resultClipboard}>
                    <div className={globalStyles.container}>
                        <Clipboard />
                    </div>
                </section>
                <section className={styles.passwordControl}>
                    <div className={globalStyles.container}>
                        <RangeSlider min={0} max={20} step={1} />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default App;
