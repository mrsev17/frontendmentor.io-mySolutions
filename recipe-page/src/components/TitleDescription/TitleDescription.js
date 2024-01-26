import "../../globalStyles.css";
import styles from "./TitleDescription.module.css";

export const TitleDescription = () => {
    return (
        <div className={`${styles.titleDescription} adaptive-section`}>
            <h1>Simple Omelette Recipe</h1>
            <p>
                An easy and quick dish, perfect for any meal. This classic
                omelette combines beaten eggs cooked to perfection, optionally
                filled with your choice of cheese, vegetables, or meats.
            </p>
        </div>
    );
};
