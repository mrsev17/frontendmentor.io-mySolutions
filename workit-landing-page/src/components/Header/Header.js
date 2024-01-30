import logoLight from "../../assets/logo-light.svg";
import "../../globalStyles.css";
import styles from "./Header.module.css";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container d-flex flex-aic flex-between">
                <img src={logoLight} alt="Logo" />
                <a href="#">Apply for access</a>
            </div>
        </header>
    );
};
