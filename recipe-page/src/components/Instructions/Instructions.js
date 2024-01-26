import { instructionsData } from "../../data/dataStorage";
import "../../globalStyles.css";
import styles from "./Instructions.module.css";

export const Instructions = () => {
    return (
        <div className={`${styles.instructions} adaptive-section`}>
            <h2 className="title-section">Instructions</h2>
            <ol>
                {instructionsData.map((item, i) => {
                    return (
                        <li key={i}>
                            <p>
                                <span>{item.action}</span>
                                {item.description}
                            </p>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};
