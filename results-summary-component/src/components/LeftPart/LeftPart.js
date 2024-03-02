import s from "./LeftPart.module.css";

export const LeftPart = () => {
    return (
        <div className={s.leftPart}>
            <div className={s.leftPartWrapper}>
                <h2>Your Result</h2>
                <div className={s.leftPartCircle}>
                    <h1>76</h1>
                    <span>of 100</span>
                </div>
                <h3>Great!</h3>
                <p>
                    Your performance exceed 65% of the people conducting the
                    test here!
                </p>
            </div>
        </div>
    );
};
