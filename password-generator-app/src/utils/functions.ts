interface OptionsInter {
    useUpperCase: boolean;
    useLowerCase: boolean;
    useNumbers: boolean;
    useSymbols: boolean;
    length: number;
}

export const generatePassword = (options: OptionsInter): string => {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numberCase = "1234567890";
    const symbolCase = "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/";

    const { useUpperCase, useLowerCase, useNumbers, useSymbols, length } =
        options;

    if (length < 1) {
        return "Select Length";
    }
    let characterSet = "";
    let password = "";

    if (useUpperCase) characterSet += upperCase;
    if (useLowerCase) characterSet += lowerCase;
    if (useNumbers) characterSet += numberCase;
    if (useSymbols) characterSet += symbolCase;

    if (characterSet.length === 0) {
        return "P4$5W0rD!";
    }

    if (!useUpperCase && !useLowerCase && !useNumbers && !useSymbols) {
        return "Select option";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    return password;
};
