import styles from "./ArticleDescr.module.css";

export const ArticleDescr = () => {
    return (
        <article className={styles.articleDescr}>
            <div className={styles.articleArea}>
                <span>Learning</span>
            </div>
            <p className={styles.articlePublishedTime}>
                Published <time dateTime="2023-12-21">21 Dec 2023</time>
            </p>
            <a href="#" className={styles.articleSubject}>
                HTML & CSS foundations
            </a>
            <p className={styles.articleText}>
                <strong>
                    These languages are the backbone of every website, defining
                    structure, content, and presentation.
                </strong>
            </p>
        </article>
    );
};
