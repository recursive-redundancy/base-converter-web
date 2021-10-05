import React from "react";
import styles from './load-spinner.module.scss';

const LoadSpinner = ({className, label = "loading..."}) => {
    return (
        <div className={[styles.spinner,className].join(' ')}>
            <h1 className={styles.label}>{label}</h1>
            <div className={[styles.dotswrapper, className].join(' ')}>
                <div className={[styles.dot, styles.dot1].join(' ')} />
                <div className={[styles.dot, styles.dot2].join(' ')} />
                <div className={[styles.dot, styles.dot3].join(' ')} />
            </div>
        </div>
    );
};

export default LoadSpinner;