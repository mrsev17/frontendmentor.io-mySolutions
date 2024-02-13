import { InfoAboutStep } from "components/InfoAboutStep";
import s from "./MainForm.module.scss";
import { FirstForm } from "components/FirstForm";
import { useAppSelector } from "hooks";

export const MainForm = () => {
    const firstStep: boolean = useAppSelector(
        (state) => state.multiStep.formOne.status
    );
    return (
        <div className={s.mainForm}>
            {!firstStep ? (
                <>
                    <InfoAboutStep />
                    <FirstForm />
                </>
            ) : (
                ""
            )}
        </div>
    );
};
