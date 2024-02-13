import { useState } from "react";
import s from "./SecondForm.module.scss";
import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advancedIcon from "../../assets/images/icon-advanced.svg";
import proIcon from "../../assets/images/icon-pro.svg";
import { useAppDispatch, useAppSelector } from "hooks";
import {
    setSecondFormPlan,
    setBilling,
    goBackFromSecondForm,
} from "../../redux/multiStepSlice/multiStepSlice";

export const SecondForm = () => {
    const dispatch = useAppDispatch();
    const getPlan = useAppSelector((state) => state.multiStep.formTwo.plan);
    const getBilling = useAppSelector(
        (state) => state.multiStep.formTwo.option
    );
    console.log(getBilling);
    const [isToggled, setIsToggled] = useState(false);
    const onToggle = () => {
        setIsToggled(!isToggled);
        dispatch(setBilling(isToggled));
    };
    const planData = [
        {
            option: "Arcade",
            value: "$9/mo",
            icon: arcadeIcon,
            selected() {
                return this.option === getPlan;
            },
        },
        {
            option: "Advanced",
            value: "$12/mo",
            icon: advancedIcon,
            selected() {
                return this.option === getPlan;
            },
        },
        {
            option: "Pro",
            value: "$15/mo",
            icon: proIcon,
            selected() {
                return this.option === getPlan;
            },
        },
    ];
    return (
        <form className={s.secondForm}>
            <div>
                <div className={s.infoAboutSecondStep}>
                    <h2>Select your plan</h2>
                    <p>You have the option of monthly or yearly billing.</p>
                </div>

                <div className={s.options}>
                    {planData.map((card, i) => {
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
                                    <span>{card.value}</span>
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
                            checked={isToggled}
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
                <button className={s.next} type="button">
                    next step
                </button>
            </div>
        </form>
    );
};
