import { Step } from "components/Step/Step";
import { useAppSelector } from "../../hooks";
import { widgetData } from "utils/data";
import s from "./StepsWidget.module.scss";

export const StepsWidget = () => {
    const getProgress = useAppSelector((state) => state.multiStep.progress);
    const arrayFromProgress = Object.values(getProgress);
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
