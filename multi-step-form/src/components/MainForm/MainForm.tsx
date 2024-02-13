import s from "./MainForm.module.scss";
import { FirstForm } from "components/FirstForm";
import { SecondForm } from "components/SecondForm";
import { useAppSelector } from "hooks";

export const MainForm = () => {
    const getProgress = useAppSelector((state) => state.multiStep.progress);
    return (
        <div className={s.mainForm}>
            {getProgress.first ? <FirstForm /> : ""}
            {getProgress.second ? <SecondForm /> : ""}
        </div>
    );
};
