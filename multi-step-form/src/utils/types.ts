export interface MultiStepFormSlice {
    priceListPlans: {
        arcade: 9;
        advanced: 12;
        pro: 15;
    };
    progress: {
        first: boolean;
        second: boolean;
        third: boolean;
        fourth: boolean;
        thankYou: boolean;
    };
    formOne: {
        fullName: string;
        mail: string;
        phone: string;
    };
    formTwo: {
        plan: string;
        option: string;
        price: number;
        statusOption: boolean;
    };
    formThree: {
        onlineService: {
            status: boolean;
            value: number;
            serviceName: "Online service";
        };
        largerStorage: {
            status: boolean;
            value: number;
            serviceName: "Larger storage";
        };
        customizableProfile: {
            status: boolean;
            value: number;
            serviceName: "Customizable Profile";
        };
    };
}

export interface CheckBoxProps {
    serviceName: string;
}

export interface FormThreeArray {
    key: string;
    value: {
        status: boolean;
        value: number;
        serviceName:
            | "Online service"
            | "Larger storage"
            | "Customizable Profile";
    };
}

export interface FormThree {
    onlineService: {
        status: boolean;
        value: number;
        serviceName: "Online service";
    };
    largerStorage: {
        status: boolean;
        value: number;
        serviceName: "Larger storage";
    };
    customizableProfile: {
        status: boolean;
        value: number;
        serviceName: "Customizable Profile";
    };
}

export interface StepProps {
    step: number;
    text: string;
    active: boolean;
    index: number;
}

export interface GetProgressProps {
    first: boolean;
    second: boolean;
    third: boolean;
    fourth: boolean;
}

export interface FormThreeService {
    onlineService: {
        status: boolean;
        value: number;
    };
    largerStorage: {
        status: boolean;
        value: number;
    };
    customizableProfile: {
        status: boolean;
        value: number;
    };
}

export interface NextBtnProps {
    func: () => void;
    text: string;
}

export interface BackBtnProps {
    func: () => void;
}
