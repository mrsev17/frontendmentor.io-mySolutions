import s from "./RightPart.module.css";
import { InfoItem } from "../InfoItem/InfoItem";

export const RightPart = ({ info }) => {
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
