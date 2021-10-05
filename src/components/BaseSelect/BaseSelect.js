import React from 'react';
import styles from './baseselect.module.scss';

const BaseSelect = () => {
    return (
        <div className={styles.baseselect}>
            <select>

                <div>
                    <h2>From Base</h2>
                </div>
                <option value='bin' selected>Binary</option>
                <option value='oct'>Octal</option>
                <option value='dec'>Decimal</option>
                <option value='hex'>Hex</option>
                </select>

                <div>
                    <h2>To Base</h2>
                </div>
                <select>
                    <option value='bin'>Binary</option>
                    <option value='oct'>Octal</option>
                    <option value='dec' selected>Decimal</option>
                    <option value='hex'>Hex</option>
                </select>
        </div>
    );
};

export default BaseSelect;