import { linksData } from "../../utils/data";
import logoDark from "../../assets/logo-dark.svg";
import styles from "./Footer.module.css";
import "../../globalStyles.css";

export const Footer = () => {
    return (
        <footer>
            <div className="container d-flex flex-col flex-center flex-aic gap-footer">
                <img
                    className={styles.companyLogo}
                    src={logoDark}
                    alt="Picture of Logo in dark color"
                />
                <ul className="d-flex">
                    {linksData.map((item, i) => {
                        return (
                            <li key={i}>
                                <a href="#">
                                    <img
                                        className={styles.networkIcon}
                                        src={item.icon}
                                        alt={`Link of network ${item.iconName}`}
                                    />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </footer>
    );
};
