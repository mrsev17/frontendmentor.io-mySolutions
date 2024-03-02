import { useState, useEffect } from "react";
import { getData } from "../../utils/functions";
import s from "./RightPart.module.css";
import { InfoItem } from "../InfoItem/InfoItem";

export const RightPart = () => {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        const requestData = async () => {
            const data = await getData("data.json");
            setInfo(data);
        };
        requestData();
    }, []);
    return (
        <div className={s.rightPart}>
            <h3>Summary</h3>
            <ul className={s.rightPartInfoList}>
                {info.map((item, i) => {
                    return (
                        <InfoItem
                            key={i}
                            category={item.category}
                            icon={item.icon}
                            score={item.score}
                        />
                    );
                })}
            </ul>
            <button>Continue</button>
        </div>
    );
};
