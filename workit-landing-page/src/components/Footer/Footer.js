import logoFacebook from "../../assets/icon-facebook.svg";
import logoTwitter from "../../assets/icon-twitter.svg";
import logoInstagram from "../../assets/icon-instagram.svg";
import logoDark from "../../assets/logo-dark.svg";
import styles from "./Footer.module.css";
import "../../globalStyles.css";

export const Footer = () => {
    const linksData = [
        { icon: logoFacebook, iconName: "Facebook" },
        { icon: logoTwitter, iconName: "Twitter" },
        { icon: logoInstagram, iconName: "Instagram" },
    ];

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
                                        alt={`Picture of network logo ${item.iconName}`}
                                    />
                                </a>
                            </li>
                        );
                    })}
                    {/* <li>
                        <a href="#">
                            <img
                                src={logoDark}
                                alt="Picture of Logo in dark color"
                            />
                        </a>
                    </li>
                    <li></li>
                    <li></li> */}
                </ul>
            </div>
        </footer>
    );
};
