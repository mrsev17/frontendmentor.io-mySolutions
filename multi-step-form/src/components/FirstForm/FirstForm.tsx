import { useState } from "react";
import s from "./FirstForm.module.scss";
import { useAppDispatch } from "hooks";
import { setFirstStep } from "../../redux/multiStepSlice/multiStepSlice";

export const FirstForm = () => {
    const dispatch = useAppDispatch();
    const [name, setName] = useState<string>("");
    const [nameValid, setNameValid] = useState<boolean>(false);
    const [mail, setMail] = useState<string>("");
    const [mailValid, setMailValid] = useState<boolean>(false);
    const [phone, setPhone] = useState<string>("");
    const [phoneValid, setPhoneValid] = useState<boolean>(false);

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleMail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMail(e.target.value);
        // Email validation regular expression
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if (emailRegex.test(value) || value === "") {
        //     setMail(value);
        // }
    };

    const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };

    const startNextStep = () => {
        if (name.length < 1) {
            setNameValid(true);
            setTimeout(() => setNameValid(false), 2500);
        }
        if (mail.length < 1) {
            setMailValid(true);
            setTimeout(() => setMailValid(false), 2500);
        }
        if (phone.length < 1) {
            setPhoneValid(true);
            setTimeout(() => setPhoneValid(false), 2500);
        }
        if (name.length && mail.length && phone.length) {
            dispatch(setFirstStep({ name, mail, phone }));
        }
    };

    return (
        <form className={s.firstForm}>
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
                        value={name}
                        onChange={handleName}
                        placeholder="e.g. Stephen King"
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
                        value={mail}
                        onChange={handleMail}
                        placeholder="e.g. stephenking@lorem.com"
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
                        value={phone}
                        onChange={handlePhone}
                        placeholder="e.g. +1 234 567 890"
                    />
                </label>
            </div>
            <div className={s.nextStepBtn}>
                <button type="button" onClick={startNextStep}>
                    next step
                </button>
            </div>
        </form>
    );
};
