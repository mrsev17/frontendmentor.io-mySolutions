import s from "./ThirdForm.module.scss";
import { CheckBox } from "components/CheckBox";
import { useAppDispatch, useAppSelector } from "hooks";
import { dataService } from "utils/data";
import {
    setThirdStep,
    goBackFromThirdForm,
} from "../../redux/multiStepSlice/multiStepSlice";

export const ThirdForm = () => {
    const dispatch = useAppDispatch();
    const getStatusService = useAppSelector(
        (state) => state.multiStep.formThree
    );
    const getTargetService = (service: string) => {
        if (service === "Online Service") {
            return getStatusService.onlineService.status;
        }
        if (service === "Larger storage") {
            return getStatusService.largerStorage.status;
        }
        if (service === "Customizable Profile") {
            return getStatusService.customizableProfile.status;
        }
    };

    return (
        <form className={s.thirdForm}>
            <div>
                <div className={s.infoAboutThirdStep}>
                    <h2>Pick add-ons</h2>
                    <p>Add-ons help enhance your gaming experience.</p>
                </div>
                <ul className={s.thirdFormWrapper}>
                    {dataService.map((service, i) => {
                        return (
                            <li
                                className={
                                    getTargetService(service.serviceName)
                                        ? s.selectedService
                                        : ""
                                }
                                key={i}
                            >
                                <div className={s.checkBoxSub}>
                                    <CheckBox
                                        serviceName={service.serviceName}
                                    />
                                    <div className={s.infoService}>
                                        <h3>{service.serviceName}</h3>
                                        <span>{service.description}</span>
                                    </div>
                                </div>
                                <span>+${service.price}/mo</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={s.nextStepBtn}>
                <button
                    className={s.previous}
                    type="button"
                    onClick={() => dispatch(goBackFromThirdForm())}
                >
                    Go Back
                </button>
                <button
                    className={s.next}
                    type="button"
                    onClick={() => dispatch(setThirdStep())}
                >
                    next step
                </button>
            </div>
        </form>
    );
};
