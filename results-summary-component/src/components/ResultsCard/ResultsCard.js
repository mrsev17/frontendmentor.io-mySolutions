import { LeftPart } from "../LeftPart/LeftPart";
import { RightPart } from "../RightPart";
import s from "./ResultsCard.module.css";

export const ResultsCard = () => {
    return (
        <section className={s.resultsCard}>
            <LeftPart />
            <RightPart />
        </section>
    );
};
