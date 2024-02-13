import s from "./InfoAboutStep.module.scss";

export const InfoAboutStep = () => {
    return (
        <div className={s.infoAboutStep}>
            <h2>Personal info</h2>
            <p>Please provide your name, email address, and phone number.</p>
        </div>
    );
};
