import { useAppSelector } from "hooks";
import { StepProps } from "utils/types";
import s from "./Step.module.scss";

export const Step: React.FC<StepProps> = ({ step, text, active, index }) => {
    const getThankYou: boolean = useAppSelector(
        (state) => state.multiStep.progress.thankYou
    );
    return (
        <div className={s.stepWidgetWrapper}>
            <div
                className={
                    active || (index === 3 && getThankYou)
                        ? `${s.stepWidgetStep} ${s.stepWidgetStepActive}`
                        : s.stepWidgetStep
                }
            >
                <span>{step}</span>
            </div>
            <div className={s.stepWidgetInfo}>
                <span className={s.stepWidgetInfoStep}>step {step}</span>
                <span className={s.stepWidgetInfoTitle}>{text}</span>
            </div>
        </div>
    );
};
