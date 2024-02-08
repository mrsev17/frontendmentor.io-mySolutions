import { useAppDispatch, useAppSelector } from "hook";
import { setOptionsRegister } from "../../redux/passwordSlice/passwordSlice";
import styles from "./CheckBox.module.scss";

interface CheckBoxProps {
    label: string;
}

export const CheckBox: React.FC<CheckBoxProps> = ({ label }) => {
    const checkboxChecked: boolean = useAppSelector((state) => {
        if (label === "Include Uppercase Letters") {
            return state.password.passwordOptions.includeUppercaseLetters;
        }
        if (label === "Include Lowercase Letters") {
            return state.password.passwordOptions.includeLowerCaseLetters;
        }
        if (label === "Include Numbers") {
            return state.password.passwordOptions.includeNumbers;
        }
        if (label === "Include Symbols") {
            return state.password.passwordOptions.includeSymbols;
        }
        return false;
    });
    const dispatch = useAppDispatch();
    return (
        <div className={styles.checkboxWrapper}>
            <label>
                <input
                    className={checkboxChecked ? "checked" : ""}
                    type="checkbox"
                    checked={checkboxChecked}
                    onChange={() => dispatch(setOptionsRegister(label))}
                />
                <span>{label}</span>
            </label>
        </div>
    );
};
