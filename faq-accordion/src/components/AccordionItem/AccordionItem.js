import { useState } from "react";
import plus from "../../assets/icon-plus.svg";
import minus from "../../assets/icon-minus.svg";
import styles from "./AccordionItem.module.css";

export const AccordionItem = ({
    title,
    content,
    demonstrateOpen,
    lastItemOrNot,
}) => {
    const [isActive, setIsActive] = useState(!demonstrateOpen ? false : true);
    return (
        <>
            <div className={styles.accordion}>
                <div
                    className={styles.accordionTitle}
                    onClick={() => setIsActive(!isActive)}
                >
                    <h2>{title}</h2>

                    <img
                        src={isActive ? minus : plus}
                        alt={isActive ? "Close" : "Open"}
                    />
                </div>
                {isActive && (
                    <div className={styles.accordionContent}>
                        <p>{content}</p>
                    </div>
                )}
            </div>
            {!lastItemOrNot && <div className={styles.accentLine}></div>}
        </>
    );
};
