import { useAppDispatch, useAppSelector } from "hook";
import { setOptionsRegister } from "../../redux/passwordSlice/passwordSlice";
import styles from "./CheckBox.module.scss";

interface CheckBoxProps {
    label: string;
}

export const CheckBox: React.FC<CheckBoxProps> = ({ label }) => {
    const checkboxChecked = useAppSelector((state) => {
        if (label === "Include Uppercase Letters") {
            return state.password.includeUppercaseLetters;
        }
        if (label === "Include Lowercase Letters") {
            return state.password.includeLowerCaseLetters;
        }
        if (label === "Include Numbers") {
            return state.password.includeNumbers;
        }
        if (label === "Include Symbols") {
            return state.password.includeSymbols;
        }
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
