import { useAppDispatch, useAppSelector } from "hooks";
import { NextBtn, BackBtn } from "components";
import { checkAbr, calcFullPrice } from "utils/functions";
import {
    setBackToSecondFromFourth,
    setGoBackFromFourth,
    setThankYouPage,
} from "../../redux/multiStepSlice/multiStepSlice";
import { FormThreeArray, FormThree } from "utils/types";
import s from "./FourthForm.module.scss";

export const FourthForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const getPlan: string = useAppSelector(
        (state) => state.multiStep.formTwo.plan
    );
    const getTerm: string = useAppSelector(
        (state) => state.multiStep.formTwo.option
    );
    const getPricePlan: number = useAppSelector(
        (state) => state.multiStep.formTwo.price
    );
    const getThirdForm: FormThree = useAppSelector(
        (state) => state.multiStep.formThree
    );
    const formThreeArray: FormThreeArray[] = Object.entries(getThirdForm).map(
        ([key, value]) => ({
            key: key,
            value: value,
        })
    );
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
                        +${calcFullPrice(getPricePlan, formThreeArray)}/
                        {checkAbr(getTerm)}
                    </span>
                </div>
            </div>
            <div className={s.nextStepBtn}>
                <BackBtn func={() => dispatch(setGoBackFromFourth())} />
                <NextBtn
                    func={() => dispatch(setThankYouPage())}
                    text="confirm"
                />
            </div>
        </form>
    );
};
