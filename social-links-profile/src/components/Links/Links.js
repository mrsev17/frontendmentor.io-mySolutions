import { linksData } from "../../utils/data";
import { LinkItem } from "../LinkItem/LinkItem";
import styles from "./Links.module.css";

export const Links = () => {
    return (
        <div className={styles.links}>
            {linksData.map((link, i) => {
                return <LinkItem key={i} linkName={link} />;
            })}
        </div>
    );
};
