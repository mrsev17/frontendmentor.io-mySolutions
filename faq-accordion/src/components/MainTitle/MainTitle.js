import faqicon from "../../assets/icon-star.svg";
import styles from "./MainTitle.module.css";

export const MainTitle = () => {
    return (
        <div className={styles.mainTitle}>
            <img src={faqicon} alt="Faq Logo" />
            <h1>FAQs</h1>
        </div>
    );
};
