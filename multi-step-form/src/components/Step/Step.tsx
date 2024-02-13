import s from "./Step.module.scss";

interface StepProps {
    step: number;
    text: string;
}

export const Step: React.FC<StepProps> = ({ step, text }) => {
    return (
        <div className={s.stepWidgetWrapper}>
            <div className={s.stepWidgetStep}>
                <span>{step}</span>
            </div>
            <div className={s.stepWidgetInfo}>
                <span className={s.stepWidgetInfoStep}>step {step}</span>
                <span className={s.stepWidgetInfoTitle}>{text}</span>
            </div>
        </div>
    );
};
