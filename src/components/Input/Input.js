import React from "react";
import styles from './input.module.scss';

const Input = () => {
    return(
    <div className={styles.inputarea}>
        <h2>Input</h2>
        <textarea defaultValue='1011' />
    </div>
    );
};

export default Input;