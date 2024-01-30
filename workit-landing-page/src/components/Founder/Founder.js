import founderPic from "../../assets/image-founder.webp";
import "../../globalStyles.css";
import styles from "./Founder.module.css";

export const Founder = () => {
    return (
        <section className={styles.founder}>
            <div className="container">
                <img src={founderPic} alt="Founder" />
                <div className={styles.founderInfo}>
                    <h3>Be the first to test</h3>
                    <p>
                        Hi, I'm Louis Graham, the founder of the company. Book a
                        demo call with me to become a beta tester for our app
                        and kickstart your company. Apply for access below and
                        I’ll be in touch to schedule a call.
                    </p>
                    <a href="#">Apply for access</a>
                </div>
            </div>
        </section>
    );
};
