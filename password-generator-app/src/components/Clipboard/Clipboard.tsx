import { CopyIcon } from "components/CopyIcon";
import copy from "clipboard-copy";
import styles from "./Clipboard.module.scss";
import { useAppSelector } from "hook";
import { useState } from "react";

export const Clipboard: React.FC = () => {
    const [visibility, setVisibility] = useState<boolean>(false);
    const textClipboard: string = useAppSelector(
        (state) => state.password.result
    );
    const handleCopyClick = async () => {
        try {
            await copy(textClipboard);
            setVisibility(true);
            setTimeout(() => {
                setVisibility(false);
            }, 2000);
        } catch (error) {
            console.error("Error copying to clipboard:", error);
        }
    };
    return (
        <div className={styles.clipboard}>
            <h2>{textClipboard}</h2>
            <button onClick={handleCopyClick}>
                <span className={visibility ? styles.visShow : styles.visHide}>
                    copied
                </span>
                <CopyIcon />
            </button>
        </div>
    );
};
