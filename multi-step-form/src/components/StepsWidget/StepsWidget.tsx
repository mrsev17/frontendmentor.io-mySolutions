import { Step } from "components/Step/Step";
import s from "./StepsWidget.module.scss";

export const StepsWidget = () => {
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
                            active={i === 0 ? true : false}
                        />
                    );
                })}
            </div>
        </div>
    );
};
