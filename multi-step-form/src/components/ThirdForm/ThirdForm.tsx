import s from "./ThirdForm.module.scss";
import { FormThreeService, FormThree } from "utils/types";
import { CheckBox } from "components/CheckBox";
import { useAppDispatch, useAppSelector } from "hooks";
import {
    setThirdStep,
    goBackFromThirdForm,
    setService,
} from "../../redux/multiStepSlice/multiStepSlice";
import { NextBtn } from "components/NextBtn";
import { BackBtn } from "components/BackBtn";

export const ThirdForm = () => {
    const dispatch = useAppDispatch();
    const getStatusService: FormThreeService = useAppSelector(
        (state) => state.multiStep.formThree
    );
    const getTargetService = (service: string): boolean => {
        if (service === "Online Service") {
            return getStatusService.onlineService.status;
        }
        if (service === "Larger storage") {
            return getStatusService.largerStorage.status;
        }
        if (service === "Customizable Profile") {
            return getStatusService.customizableProfile.status;
        }
        return false;
    };

    const getAddons: FormThree = useAppSelector(
        (state) => state.multiStep.formThree
    );

    const dataService = [
        {
            serviceName: "Online Service",
            description: "Access to multiplayer games",
            price: getAddons.onlineService.value,
        },
        {
            serviceName: "Larger storage",
            description: "Extra 1TB of cloud save",
            price: getAddons.largerStorage.value,
        },
        {
            serviceName: "Customizable Profile",
            description: "Custom theme on your profile",
            price: getAddons.customizableProfile.value,
        },
    ];
    return (
        <form className={s.universalForm}>
            <div>
                <div className={s.infoAboutUniversalStep}>
                    <h2>Pick add-ons</h2>
                    <p>Add-ons help enhance your gaming experience.</p>
                </div>
                <ul className={s.thirdFormWrapper}>
                    {dataService.map((service, i) => {
                        return (
                            <li
                                onClick={() =>
                                    dispatch(setService(service.serviceName))
                                }
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
                <BackBtn func={() => dispatch(goBackFromThirdForm())} />
                <NextBtn
                    func={() => dispatch(setThirdStep())}
                    text="next step"
                />
            </div>
        </form>
    );
};
