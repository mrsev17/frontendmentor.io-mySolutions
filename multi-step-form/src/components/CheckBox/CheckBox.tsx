import { useAppSelector } from "hooks";
import { CheckBoxProps, FormThree } from "utils/types";
import s from "./CheckBox.module.scss";

export const CheckBox: React.FC<CheckBoxProps> = ({ serviceName }) => {
    const getStatusService: FormThree = useAppSelector(
        (state) => state.multiStep.formThree
    );
    const getTargetService = (service: string): boolean => {
        if (service === "Online Service") {
            return getStatusService.onlineService.status;
        }
        if (service === "Larger storage") {
            return getStatusService.largerStorage.status;
        }
        if (service === "Customizable Profile") {
            return getStatusService.customizableProfile.status;
        }
        return false;
    };
    return (
        <label className={s.checkbox}>
            <input
                className={s.checkboxChecked ? "checked" : ""}
                type="checkbox"
                checked={getTargetService(serviceName)}
                onChange={() => {}}
            />
        </label>
    );
};
