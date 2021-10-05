import React from "react";
import styles from './titlebar.module.scss';

const Titlebar = () => {
    return(
        <div className={styles.header}>
            <h1>Base Converter</h1>
        </div>
    );
};

export default Titlebar;
