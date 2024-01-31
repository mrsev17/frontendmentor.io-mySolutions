import { advantagesData } from "../../utils/data";
import "../../globalStyles.css";
import styles from "./Advantages.module.css";

export const Advantages = () => {
    return (
        <section className={styles.advantages}>
            <div className="container d-flex flex-between flex-md-col">
                {advantagesData.map((item, i) => {
                    return (
                        <div key={i} className={styles.advantagesItem}>
                            <div className={styles.advantagesOrder}>
                                <div>
                                    <span>{item.order}</span>
                                </div>
                            </div>
                            <div className="w-md-80">
                                <h2>{item.title}</h2>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
