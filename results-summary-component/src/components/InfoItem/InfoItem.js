import { selectColorCategory } from "../../utils/functions";
import s from "./InfoItem.module.css";

export const InfoItem = ({ icon, category, score }) => {
    const option = selectColorCategory(category);
    return (
        <li className={s.infoItem} style={{ background: option.bg }}>
            <div>
                <img src={icon} alt={`Icon for ${category}`} />
                <span
                    className={s.categoryName}
                    style={{ color: option.nameCat }}
                >
                    {category}
                </span>
            </div>
            <div>
                <h4>
                    <span>{score}</span>
                    <span> / 100</span>
                </h4>
            </div>
        </li>
    );
};
