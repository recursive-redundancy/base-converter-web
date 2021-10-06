import React from 'react';
import styles from './baseselect.module.scss';

const BaseSelect = ({handleFromBaseChange, handleToBaseChange}) => {
    return (
        <div className={styles.baseselect}>
            <div>
                <div>
                    <h2>From Base</h2>
                </div>
                <select defaultValue='bin' onChange={handleFromBaseChange}>
                    <option value='bin'>Binary</option>
                    <option value='oct'>Octal</option>
                    <option value='dec'>Decimal</option>
                    <option value='hex'>Hex</option>
                </select>
            </div>
            <div>
                <div>
                    <h2>To Base</h2>
                </div>
                <select defaultValue='dec' onChange={handleToBaseChange}>
                    <option value='bin'>Binary</option>
                    <option value='oct'>Octal</option>
                    <option value='dec'>Decimal</option>
                    <option value='hex'>Hex</option>
                </select>
            </div>
        </div>
    );
};

export default BaseSelect;