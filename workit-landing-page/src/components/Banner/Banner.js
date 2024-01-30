import iPhone from "../../assets/image-hero.webp";
import styles from "./Banner.module.css";

export const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className="container">
                <h1>
                    Data <span>tailored</span> to your needs.
                </h1>
                <a href="#">Learn more</a>
                <img src={iPhone} alt="iPhone" />
            </div>
        </section>
    );
};
