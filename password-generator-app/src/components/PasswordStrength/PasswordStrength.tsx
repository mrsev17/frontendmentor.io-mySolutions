import { useAppSelector } from "hook";
import styles from "./PasswordStrength.module.scss";

export const PasswordStrength: React.FC = () => {
    const strengthOfPassword: number = useAppSelector(
        (state) => state.password.strength
    );
    const strengthStyle = (strength: number) => {
        if (strength === 1) {
            return {
                style: styles.tooWeak,
                text: "too weak!",
            };
        }
        if (strength === 2) {
            return {
                style: styles.weak,
                text: "weak",
            };
        }
        if (strength === 3) {
            return {
                style: styles.medium,
                text: "medium",
            };
        }
        if (strength === 4) {
            return {
                style: styles.strong,
                text: "strong",
            };
        }
        return {
            style: "",
            text: "",
        };
    };
    const strengthStyleCheck = strengthStyle(strengthOfPassword);
    const getFadeForText = () => {
        if (strengthStyleCheck.text === "too weak!") {
            return styles.fadeInTooWeak;
        }
        if (strengthStyleCheck.text === "weak") {
            return styles.fadeInWeak;
        }
        if (strengthStyleCheck.text === "medium") {
            return styles.fadeInMedium;
        }
        if (strengthStyleCheck.text === "strong") {
            return styles.fadeInStrong;
        }
    };
    return (
        <div className={styles.passwordStrength}>
            <h4>STRENGTH</h4>
            <div className={styles.passwordRate}>
                <span className={getFadeForText()}>
                    {strengthStyleCheck.text}
                </span>
                <div
                    className={`${styles.passwordScale} ${strengthStyleCheck.style}`}
                >
                    <div className={styles.passwordScaleBar}></div>
                    <div className={styles.passwordScaleBar}></div>
                    <div className={styles.passwordScaleBar}></div>
                    <div className={styles.passwordScaleBar}></div>
                </div>
            </div>
        </div>
    );
};
