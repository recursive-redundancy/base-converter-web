import React from "react";
import styles from './output.module.scss';

const Output = ({value}) => {
    return(
    <div className={styles.outputarea}>
        <h2>Output</h2>
        <textarea value={value} readOnly />
    </div>
    );
};

export default Output;