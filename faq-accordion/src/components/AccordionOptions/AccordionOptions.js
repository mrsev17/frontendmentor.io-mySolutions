import { AccordionItem } from "../AccordionItem/AccordionItem";
import { accordionData } from "../../utils/data";
import styles from "./AccordionOptions.module.css";

export const AccordionOptions = () => {
    return (
        <div className={styles.accordionWrapper}>
            {accordionData.map((item, i) => {
                return (
                    <AccordionItem
                        key={i}
                        title={item.title}
                        content={item.content}
                        demonstrateOpen={i === 0 ? true : false}
                    />
                );
            })}
        </div>
    );
};
