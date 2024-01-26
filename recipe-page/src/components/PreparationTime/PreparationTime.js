import { preparationTimeInfo } from "../../data/dataStorage";
import styles from "./PreparationTime.module.css";

export const PreparationTime = () => {
    return (
        <div className={styles.preparationTime}>
            <h2>Preparation time</h2>
            <ul>
                {preparationTimeInfo.map((item, i) => {
                    return (
                        <li key={i}>
                            <span>
                                <b>{item.title}</b>
                                {item.value}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
