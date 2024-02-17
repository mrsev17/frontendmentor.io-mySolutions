import { Step } from "components/Step/Step";
import { useAppSelector } from "../../hooks";
import { widgetData } from "utils/data";
import { GetProgressProps } from "utils/types";
import s from "./StepsWidget.module.scss";

export const StepsWidget: React.FC = () => {
    const getProgress: GetProgressProps = useAppSelector(
        (state) => state.multiStep.progress
    );
    const arrayFromProgress: boolean[] = Object.values(getProgress);
    return (
        <div className={s.stepsWidget}>
            <div className={s.stepsWidgetWrapper}>
                {widgetData.map((step, i) => {
                    return (
                        <Step
                            key={i}
                            index={i}
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
