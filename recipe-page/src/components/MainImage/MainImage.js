import mainPicture from "../../assets/images/top-image.png";
import styles from "./MainImage.module.css";

export const MainImage = () => {
    return <img className={styles.mainPicture} src={mainPicture} alt="Food" />;
};
