import founderPic from "../../assets/image-founder.webp";
import circlesAsset from "../../assets/bg-pattern-3.svg";
import "../../globalStyles.css";
import styles from "./Founder.module.css";

export const Founder = () => {
    return (
        <section className={`${styles.founder} d-flex`}>
            <div className="container d-flex flex-end">
                <img
                    className={styles.founderPicture}
                    src={founderPic}
                    alt="Founder"
                />

                <div className={`${styles.founderInfo} d-flex flex-col`}>
                    <h3>Be the first to test</h3>
                    <p>
                        Hi, I'm Louis Graham, the founder of the company. Book a
                        demo call with me to become a beta tester for our app
                        and kickstart your company. Apply for access below and
                        I’ll be in touch to schedule a call.
                    </p>
                    <div className="d-flex flex-between">
                        <a className={styles.access} href="#">
                            Apply for access
                        </a>
                        <div className={styles.circleWrapper}>
                            <img
                                className={styles.circlesFigure}
                                src={circlesAsset}
                                alt="Circles Figure"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
