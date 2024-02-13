import s from "./FirstForm.module.scss";

export const FirstForm = () => {
    return (
        <form className={s.firstForm}>
            <div className={s.firstFormWrapper}>
                <label>
                    <span>name</span>
                    <input type="text" placeholder="e.g. Stephen King" />
                </label>
                <label>
                    <span>email address</span>
                    <input
                        type="email"
                        placeholder="e.g. stephenking@lorem.com"
                    />
                </label>
                <label>
                    <span>Phone Number</span>
                    <input type="text" placeholder="e.g. +1 234 567 890" />
                </label>
            </div>
            <div className={s.nextStepBtn}>
                <button type="button">next step</button>
            </div>
        </form>
    );
};
