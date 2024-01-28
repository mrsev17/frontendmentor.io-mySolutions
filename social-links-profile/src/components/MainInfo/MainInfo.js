import { userInfo } from "../../utils/data";
import styles from "./MainInfo.module.css";

export const MainInfo = () => {
    return (
        <div className={styles.mainInfo}>
            <img
                className={styles.avatar}
                src={userInfo.avatar}
                alt="Profile Avatar"
            />
            <div>
                <h1>{userInfo.fullName}</h1>
                <h2>{userInfo.location}</h2>
            </div>
            <p>{userInfo.sub}</p>
        </div>
    );
};
