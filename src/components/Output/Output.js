import React from "react";
import styles from './output.module.scss';

const Output = () => {
    return(
    <div className={styles.outputarea}>
        <h2>Output</h2>
        <textarea defaultValue='11' />
    </div>
    );
};

export default Output;