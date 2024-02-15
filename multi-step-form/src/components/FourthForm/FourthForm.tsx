import { useAppDispatch, useAppSelector } from "hooks";
import {
    setBackToSecondFromFourth,
    setGoBackFromFourth,
    setThankYouPage,
} from "../../redux/multiStepSlice/multiStepSlice";
import s from "./FourthForm.module.scss";
import { NextBtn } from "components/NextBtn";

export const FourthForm = () => {
    const dispatch = useAppDispatch();
    const getPlan = useAppSelector((state) => state.multiStep.formTwo.plan);
    const getTerm = useAppSelector((state) => state.multiStep.formTwo.option);
    const getPricePlan = useAppSelector(
        (state) => state.multiStep.formTwo.price
    );
    const getThirdForm = useAppSelector((state) => state.multiStep.formThree);
    const formThreeArray = Object.entries(getThirdForm).map(([key, value]) => ({
        key: key,
        value: value,
    }));
    console.log(formThreeArray);
    const calcFullPrice = () => {
        const getPriceForAddons = () => {
            return formThreeArray.reduce((acc, addon) => {
                if (addon.value.status) {
                    acc += addon.value.value;
                }
                return acc;
            }, 0);
        };
        return getPriceForAddons() + getPricePlan;
    };
    //
    const checkAbr = (term: string): string => {
        if (term === "Monthly") {
            return "mo";
        } else {
            return "yr";
        }
    };

    const confirm = () => dispatch(setThankYouPage());

    return (
        <form className={s.universalForm}>
            <div>
                <div className={s.infoAboutUniversalStep}>
                    <h2>Finishing up</h2>
                    <p>Double-check everything looks OK before confirming.</p>
                </div>
                <div className={s.fourthFormWrapper}>
                    <div className={s.fourthFormMainInfo}>
                        <div>
                            <h5>
                                {getPlan} ({getTerm})
                            </h5>
                            <button
                                onClick={() =>
                                    dispatch(setBackToSecondFromFourth())
                                }
                                type="button"
                            >
                                Change
                            </button>
                        </div>
                        <span>
                            ${getPricePlan}/{checkAbr(getTerm)}
                        </span>
                    </div>
                    <div className={s.fourthFormDivideLine}></div>
                    <ul className={s.fourthFormOptions}>
                        {formThreeArray.map((addon) => {
                            if (addon.value.status) {
                                return (
                                    <li key={addon.key}>
                                        <span className={s.formFourthAddonName}>
                                            {addon.value.serviceName}
                                        </span>
                                        <span
                                            className={s.formFourthAddonPrice}
                                        >
                                            +${addon.value.value}/
                                            {checkAbr(getTerm)}
                                        </span>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </div>
                <div className={s.fourthFormTotalInfo}>
                    <span className={s.fourthFormTotalTitle}>
                        Total(per{" "}
                        {checkAbr(getTerm) === "mo" ? "month" : "yearly"})
                    </span>
                    <span className={s.fourthFormTotalPrice}>
                        +${calcFullPrice()}/{checkAbr(getTerm)}
                    </span>
                </div>
            </div>
            <div className={s.nextStepBtn}>
                <button
                    className={s.previous}
                    type="button"
                    onClick={() => dispatch(setGoBackFromFourth())}
                >
                    Go Back
                </button>
                <NextBtn func={confirm} text="confirm" />
            </div>
        </form>
    );
};
