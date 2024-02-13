import { Step } from "components/Step/Step";
import s from "./StepsWidget.module.scss";
import { useAppSelector } from "../../hooks";

export const StepsWidget = () => {
    const getProgress = useAppSelector((state) => state.multiStep.progress);
    const arrayFromProgress = Object.values(getProgress);
    const widgetData = [
        {
            step: 1,
            text: "your info",
        },
        {
            step: 2,
            text: "select plan",
        },
        {
            step: 3,
            text: "add-ons",
        },
        {
            step: 4,
            text: "summary",
        },
    ];
    return (
        <div className={s.stepsWidget}>
            <div className={s.stepsWidgetWrapper}>
                {widgetData.map((step, i) => {
                    return (
                        <Step
                            key={i}
                            step={step.step}
                            text={step.text}
                            active={arrayFromProgress[i] ? true : false}
                        />
                    );
                })}
            </div>
        </div>
    );
};
