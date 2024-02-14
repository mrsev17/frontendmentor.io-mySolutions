import { useAppSelector, useAppDispatch } from "hooks";
import { setService } from "../../redux/multiStepSlice/multiStepSlice";
import s from "./CheckBox.module.scss";

interface CheckBoxProps {
    serviceName: string;
}

export const CheckBox: React.FC<CheckBoxProps> = ({ serviceName }) => {
    const dispatch = useAppDispatch();
    const getStatusService = useAppSelector(
        (state) => state.multiStep.formThree
    );
    const getTargetService = (service: string) => {
        if (service === "Online Service") {
            return getStatusService.onlineService.status;
        }
        if (service === "Larger storage") {
            return getStatusService.largerStorage.status;
        }
        if (service === "Customizable Profile") {
            return getStatusService.customizableProfile.status;
        }
    };
    return (
        <label className={s.checkbox}>
            <input
                className={s.checkboxChecked ? "checked" : ""}
                type="checkbox"
                checked={getTargetService(serviceName)}
                onChange={() => dispatch(setService(serviceName))}
            />
        </label>
    );
};
