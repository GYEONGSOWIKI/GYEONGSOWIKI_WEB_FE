import React from "react";
import * as styles from "./style.css";

interface ToastifyProps {
    content: string;
}

const Toastify: React.FC<ToastifyProps> = ({ content }) => {
    return (
        <figure className={styles.container}>
            <img width={24} height={24} src="/src/assets/svg/info.svg" alt="INFO" className={styles.icon} />
            <figcaption className={styles.content}>{content}</figcaption>
        </figure>
    );
};

export default Toastify;
