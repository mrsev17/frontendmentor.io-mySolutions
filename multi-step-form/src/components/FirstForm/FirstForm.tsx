import { useEffect, useState } from "react";
import s from "./FirstForm.module.scss";
import { useAppDispatch, useAppSelector } from "hooks";
import {
    setFirstStep,
    setInputName,
    setInputMail,
    setInputPhone,
} from "../../redux/multiStepSlice/multiStepSlice";
import { NextBtn } from "components/NextBtn";

export const FirstForm = () => {
    const dispatch = useAppDispatch();
    const inputName: string = useAppSelector(
        (state) => state.multiStep.formOne.fullName
    );
    const inputMail: string = useAppSelector(
        (state) => state.multiStep.formOne.mail
    );
    const inputPhone: string = useAppSelector(
        (state) => state.multiStep.formOne.phone
    );

    const [nameValid, setNameValid] = useState<boolean>(false);
    const [mailValid, setMailValid] = useState<boolean>(false);
    const [phoneValid, setPhoneValid] = useState<boolean>(false);

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setInputName(e.target.value));
    };
    const handleMail = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setInputMail(e.target.value));
    };
    const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setInputPhone(e.target.value));
    };

    const startNextStep = (): void => {
        if (inputName.length < 1) {
            setNameValid(true);
            setTimeout(() => setNameValid(false), 2500);
        }
        if (inputMail.length < 1) {
            setMailValid(true);
            setTimeout(() => setMailValid(false), 2500);
        }
        if (inputPhone.length < 1) {
            setPhoneValid(true);
            setTimeout(() => setPhoneValid(false), 2500);
        }
        if (inputName.length && inputMail.length && inputPhone.length) {
            dispatch(setFirstStep());
        }
    };

    useEffect(() => {}, []);

    return (
        <form className={s.universalForm}>
            <div>
                <div className={s.infoAboutUniversalStep}>
                    <h2>Personal info</h2>
                    <p>
                        Please provide your name, email address, and phone
                        number.
                    </p>
                </div>
                <div className={s.firstFormWrapper}>
                    <label>
                        <div className={s.firstFormLabel}>
                            <span>name</span>
                            {!nameValid ? (
                                ""
                            ) : (
                                <span className={s.firstFormCaution}>
                                    This field is required
                                </span>
                            )}
                        </div>
                        <input
                            className={nameValid ? s.wrongInput : ""}
                            type="text"
                            name="fullName"
                            value={inputName}
                            onChange={handleName}
                            placeholder="e.g. Stephen King"
                            maxLength={24}
                        />
                    </label>
                    <label>
                        <div className={s.firstFormLabel}>
                            <span>email address</span>
                            {!mailValid ? (
                                ""
                            ) : (
                                <span className={s.firstFormCaution}>
                                    This field is required
                                </span>
                            )}
                        </div>

                        <input
                            className={mailValid ? s.wrongInput : ""}
                            type="email"
                            name="email"
                            value={inputMail}
                            onChange={handleMail}
                            placeholder="e.g. stephenking@lorem.com"
                            maxLength={24}
                        />
                    </label>
                    <label>
                        <div className={s.firstFormLabel}>
                            <span>Phone Number</span>
                            {!phoneValid ? (
                                ""
                            ) : (
                                <span className={s.firstFormCaution}>
                                    This field is required
                                </span>
                            )}
                        </div>
                        <input
                            className={phoneValid ? s.wrongInput : ""}
                            type="text"
                            name="phoneNumber"
                            value={inputPhone}
                            onChange={handlePhone}
                            placeholder="e.g. +1 234 567 890"
                            maxLength={24}
                        />
                    </label>
                </div>
            </div>
            <div className={s.nextStepBtn}>
                <NextBtn func={startNextStep} text="next step" />
            </div>
        </form>
    );
};
