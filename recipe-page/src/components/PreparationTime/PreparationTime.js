import styles from "./PreparationTime.module.css";

const preparationTimeInfo = [
    { Total: "Approximately 10 minutes" },
    { Preparation: "5 minutes" },
    { Total: "5 minutes" },
];

export const PreparationTime = () => {
    return (
        <div className={styles.preparationTime}>
            <h2>Preparation time</h2>
            <ul>
                {preparationTimeInfo.map((item, i) => {
                    const keyItem = Object.keys(item)[0];
                    const value = item[keyItem];
                    return (
                        <li key={i}>
                            <span>
                                <b>{keyItem}</b>
                                {value}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
