import { ingredientsData } from "../../data/dataStorage";
import "../../globalStyles.css";
import styles from "./Ingredients.module.css";

export const Ingredients = () => {
    return (
        <div className={styles.ingredients}>
            <h2 className="title-section">Ingredients</h2>
            <ul>
                {ingredientsData.map((text, i) => {
                    return <li key={i}>{text}</li>;
                })}
            </ul>
        </div>
    );
};
