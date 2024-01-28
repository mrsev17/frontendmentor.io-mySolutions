import styles from "./LinkItem.module.css";
export const LinkItem = ({ linkName }) => {
    return (
        <a className={styles.linkItem} href={linkName} alt="">
            {linkName}
        </a>
    );
};
