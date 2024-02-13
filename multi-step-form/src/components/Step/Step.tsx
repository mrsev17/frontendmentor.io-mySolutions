import s from "./Step.module.scss";

interface StepProps {
    step: number;
    text: string;
    active: boolean;
}

export const Step: React.FC<StepProps> = ({ step, text, active }) => {
    return (
        <div className={s.stepWidgetWrapper}>
            <div
                className={
                    active
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
