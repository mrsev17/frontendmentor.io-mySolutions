import { useAppSelector } from "hooks";
import s from "./Step.module.scss";

interface StepProps {
    step: number;
    text: string;
    active: boolean;
    index: number;
}

export const Step: React.FC<StepProps> = ({ step, text, active, index }) => {
    const getThankYou = useAppSelector(
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
