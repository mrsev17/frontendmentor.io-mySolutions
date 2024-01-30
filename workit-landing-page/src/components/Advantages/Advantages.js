import "../../globalStyles.css";
import styles from "./Advantages.module.css";

const advantagesData = [
    {
        order: "1",
        title: "Actionable insights",
        text: " Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.",
    },
    {
        order: "2",
        title: "Data-driven decisions",
        text: "Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.",
    },
    {
        order: "3",
        title: "Always affordable",
        text: "Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.",
    },
];

export const Advantages = () => {
    return (
        <section className={styles.advantages}>
            <div className="container d-flex flex-between">
                {advantagesData.map((item, i) => {
                    return (
                        <div key={i} className={styles.advantagesItem}>
                            <div className={styles.advantagesOrder}>
                                <span>{item.order}</span>
                            </div>
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
