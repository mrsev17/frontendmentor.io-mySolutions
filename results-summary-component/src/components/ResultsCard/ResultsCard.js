import { useEffect, useState } from "react";
import { LeftPart, RightPart } from "../../components";
import { getData } from "../../utils/functions";
import s from "./ResultsCard.module.css";

export const ResultsCard = () => {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const requestData = async () => {
            const data = await getData("data.json");
            setInfo(data);
            setLoading(false);
        };
        requestData();
    }, []);
    const calcAverage = Math.floor(
        info.reduce((acc, item) => {
            return acc + item.score;
        }, 0) / info.length
    );
    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <section className={s.resultsCard}>
            <LeftPart average={calcAverage} />
            <RightPart info={info} />
        </section>
    );
};
