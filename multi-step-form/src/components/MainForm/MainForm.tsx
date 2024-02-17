import s from "./MainForm.module.scss";
import {
    FirstForm,
    FourthForm,
    SecondForm,
    ThankYou,
    ThirdForm,
} from "components";
import { useAppSelector } from "hooks";

interface GetProgressProps {
    first: boolean;
    second: boolean;
    third: boolean;
    fourth: boolean;
    thankYou: boolean;
}

export const MainForm: React.FC = () => {
    const getProgress: GetProgressProps = useAppSelector(
        (state) => state.multiStep.progress
    );
    return (
        <div className={s.mainForm}>
            {getProgress.first ? <FirstForm /> : ""}
            {getProgress.second ? <SecondForm /> : ""}
            {getProgress.third ? <ThirdForm /> : ""}
            {getProgress.fourth ? <FourthForm /> : ""}
            {getProgress.thankYou ? <ThankYou /> : ""}
        </div>
    );
};
