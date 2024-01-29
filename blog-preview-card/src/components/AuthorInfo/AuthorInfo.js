import authorPhoto from "../../assets/image-avatar.webp";
import styles from "./AuthorInfo.module.css";

export const AuthorInfo = () => {
    return (
        <div className={styles.authorInfo}>
            <img src={authorPhoto} alt="Author" />
            <h2>Greg Hooper</h2>
        </div>
    );
};
