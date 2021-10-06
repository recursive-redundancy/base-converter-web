import React from "react";
import styles from './input.module.scss';

const Input = ({defaultValue, handleInputChange}) => {
    return(
    <div className={styles.inputarea}>
        <h2>Input</h2>
        <textarea defaultValue={defaultValue} onChange={handleInputChange} />
    </div>
    );
};

export default Input;