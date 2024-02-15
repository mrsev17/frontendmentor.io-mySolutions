import { setRestartForm } from "../../redux/multiStepSlice/multiStepSlice";
import tyIcon from "../../assets/images/icon-thank-you.svg";
import s from "./ThankYou.module.scss";
import { useAppDispatch } from "hooks";
import { useEffect } from "react";

export const ThankYou = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch(setRestartForm());
        }, 4000);
    });
    return (
        <section className={s.thankYou}>
            <div className={s.thankYouWrapper}>
                <img src={tyIcon} alt={`Picture of Check mark`} />
                <h5>Thank you!</h5>
                <p>
                    Thanks for confirming your subscription! We hope you have
                    fun using our platform. If you ever need support, please
                    feel free to email us at support@loremgaming.com.
                </p>
            </div>
        </section>
    );
};
