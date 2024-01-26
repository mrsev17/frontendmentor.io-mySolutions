import { nutritionData } from "../../data/dataStorage";
import "../../globalStyles.css";
import styles from "./Nutrition.module.css";

export const Nutrition = () => {
    return (
        <div className={`${styles.nutrition} adaptive-section`}>
            <h2 className="title-section">Nutrition</h2>
            <p>
                The table below shows nutritional values per serving without the
                additional fillings.
            </p>
            <table>
                <tbody>
                    {nutritionData.map((data, i) => {
                        return (
                            <tr key={i}>
                                <td className={styles.title}>{data.title}</td>
                                <td className={styles.value}>{data.value}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
