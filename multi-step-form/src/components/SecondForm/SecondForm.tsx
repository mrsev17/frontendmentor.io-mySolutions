import { useState } from "react";
import s from "./SecondForm.module.scss";
import { planData } from "utils/data";
import { useAppDispatch, useAppSelector } from "hooks";
import {
    setSecondFormPlan,
    setBilling,
    goBackFromSecondForm,
    setSecondStep,
} from "../../redux/multiStepSlice/multiStepSlice";

export const SecondForm = () => {
    const dispatch = useAppDispatch();
    const getPlan: string = useAppSelector(
        (state) => state.multiStep.formTwo.plan
    );
    const getBilling: string = useAppSelector(
        (state) => state.multiStep.formTwo.option
    );
    const getStatusToogle = useAppSelector(
        (state) => state.multiStep.formTwo.statusOption
    );

    const [isToggled, setIsToggled] = useState(getStatusToogle);
    const onToggle = () => {
        setIsToggled(!isToggled);
        dispatch(setBilling(isToggled));
    };
    return (
        <form className={s.secondForm}>
            <div>
                <div className={s.infoAboutSecondStep}>
                    <h2>Select your plan</h2>
                    <p>You have the option of monthly or yearly billing.</p>
                </div>

                <div className={s.options}>
                    {planData(getPlan).map((card, i) => {
                        return (
                            <div
                                key={i}
                                className={
                                    card.selected()
                                        ? `${s.card} ${s.cardSelected}`
                                        : s.card
                                }
                                onClick={() =>
                                    dispatch(setSecondFormPlan(card.option))
                                }
                            >
                                <img src={card.icon} alt={card.option} />
                                <div className={s.cardSub}>
                                    <h4>{card.option}</h4>
                                    <span>
                                        $
                                        {getBilling === "Yearly"
                                            ? card.value * 10 + "/yr"
                                            : card.value + "/mo"}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className={s.optionToggle}>
                    <span
                        className={
                            getBilling === "Monthly" ? s.selectedBilling : ""
                        }
                    >
                        Monthly
                    </span>
                    <label className={s.toggleSwitch}>
                        <input
                            type="checkbox"
                            checked={getStatusToogle}
                            onChange={onToggle}
                        />
                        <span className={s.switch} />
                    </label>
                    <span
                        className={
                            getBilling === "Yearly" ? s.selectedBilling : ""
                        }
                    >
                        Yearly
                    </span>
                </div>
            </div>
            <div className={s.nextStepBtn}>
                <button
                    className={s.previous}
                    type="button"
                    onClick={() => dispatch(goBackFromSecondForm())}
                >
                    Go Back
                </button>
                <button
                    className={s.next}
                    type="button"
                    onClick={() => dispatch(setSecondStep())}
                >
                    next step
                </button>
            </div>
        </form>
    );
};
