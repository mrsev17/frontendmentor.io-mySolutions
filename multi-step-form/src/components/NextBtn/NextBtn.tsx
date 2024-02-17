import { NextBtnProps } from "utils/types";
import s from "./NextBtn.module.scss";

export const NextBtn: React.FC<NextBtnProps> = ({ func, text }) => {
    return (
        <button
            className={`${s.btn} ${text === "confirm" ? s.confirmBtn : ""}`}
            type="button"
            onClick={func}
        >
            {text}
        </button>
    );
};
