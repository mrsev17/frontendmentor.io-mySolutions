import { useState } from "react";
import { useAppDispatch, useAppSelector } from "hook";
import { setLengthPassword } from "../../redux/passwordSlice/passwordSlice";
import styles from "./RangeSlider.module.scss";

interface CustomRangeSliderProps {
    min: number;
    max: number;
    step: number;
}

export const RangeSlider: React.FC<CustomRangeSliderProps> = ({
    min,
    max,
    step,
}) => {
    const dispatch = useAppDispatch();
    const length = useAppSelector((state) => state.password.length);
    const calcBackgroundSlider: number = (length / max) * 100;
    const controlBackgroundSlider = {
        backgroundSize: `${calcBackgroundSlider}%`,
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const rangeSlider = Number(event.target.value);
        dispatch(setLengthPassword(rangeSlider));
    };
    return (
        <div className={styles.rangeSlider}>
            <div className={styles.rangeInfo}>
                <h3>Character length</h3>
                <span>{length}</span>
            </div>
            <div className={styles.sliderWrapper}>
                <input
                    style={controlBackgroundSlider}
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={length}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};
