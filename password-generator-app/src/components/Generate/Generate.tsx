import { useAppDispatch } from "hook";
import { setGeneratePassword } from "../../redux/passwordSlice/passwordSlice";
import styles from "./Generate.module.scss";

export const Generate = () => {
    const dispatch = useAppDispatch();

    return (
        <button
            onClick={() => dispatch(setGeneratePassword())}
            className={styles.generate}
        >
            <span>generate</span>
            <svg
                width="11.105408"
                height="12.000000"
                viewBox="0 0 11.1054 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                    id="Shape"
                    d="M5.10547 12L11.1054 6.00002L5.10547 0L3.84045 1.26501L7.68094 5.10547L0 5.10547L0 6.89459L7.68094 6.89459L3.84045 10.735L5.10547 12Z"
                    fill="#24232C"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                />
            </svg>
        </button>
    );
};
