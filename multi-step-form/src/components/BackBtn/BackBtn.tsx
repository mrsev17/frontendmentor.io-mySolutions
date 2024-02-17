import s from "./BackBtn.module.scss";
import { BackBtnProps } from "utils/types";

export const BackBtn: React.FC<BackBtnProps> = ({ func }) => {
    return (
        <button className={s.previous} type="button" onClick={func}>
            Go Back
        </button>
    );
};
