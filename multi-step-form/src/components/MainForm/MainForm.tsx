import { InfoAboutStep } from "components/InfoAboutStep";
import s from "./MainForm.module.scss";
import { FirstForm } from "components/FirstForm";

export const MainForm = () => {
    return (
        <div className={s.mainForm}>
            <InfoAboutStep />
            <FirstForm />
        </div>
    );
};
