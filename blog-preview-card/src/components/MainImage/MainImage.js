import article from "../../assets/illustration-article.svg";
import styles from "./MainImage.module.css";

export const MainImage = () => {
    return <img className={styles.articleImage} src={article} alt="Article" />;
};
