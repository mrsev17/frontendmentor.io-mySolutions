import s from "./MainForm.module.scss";
import { FirstForm, SecondForm, ThirdForm } from "components";
import { useAppSelector } from "hooks";

export const MainForm = () => {
    const getProgress = useAppSelector((state) => state.multiStep.progress);
    return (
        <div className={s.mainForm}>
            {getProgress.first ? <FirstForm /> : ""}
            {getProgress.second ? <SecondForm /> : ""}
            {getProgress.third ? <ThirdForm /> : ""}
        </div>
    );
};
