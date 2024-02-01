import { CopyIcon } from "components/CopyIcon";
import copy from "clipboard-copy";
import styles from "./Clipboard.module.scss";
import { useAppSelector } from "hook";

export const Clipboard: React.FC = () => {
    const textClipboard: string = useAppSelector(
        (state) => state.password.result
    );
    const handleCopyClick = async () => {
        try {
            await copy(textClipboard);
            alert("Copied to clipboard!");
        } catch (error) {
            console.error("Error copying to clipboard:", error);
            alert("Failed to copy to clipboard. See console for details.");
        }
    };
    return (
        <div className={styles.clipboard}>
            <h2>{textClipboard}</h2>
            <button onClick={handleCopyClick}>
                <CopyIcon />
            </button>
        </div>
    );
};
