import React from 'react';
import styles from './app.module.scss';

const App = ({handleInput, handleSolve, isSolving}) => {
    return (
        <div className={styles.app}>
            <div className={styles.header}>
                <h1>Base Converter</h1>
            </div>
            <div className={styles.inputarea}>
                <h2>Input</h2>
                <textarea>1011</textarea>
                        
                <div>
                    <h2>From Base</h2>
                </div>
                <select>
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

                <div id='cell-convert' class='cell'>
                    <button id='btn-convert' ontouchstart=''>Convert</button>
                </div>
            </div>
        </div>
    );
};

export default App;




//     </div>
// </div>
// </div>
// </div>

// <div class='row label'>
// <div class='cell label'>
// <h2>Output</h2>
// </div>
// </div>
// <div class='row text'>
// <div class='cell in-out'>
// <div class='wrap-text'>
//     <textarea id='txt-output' class='txt-base'></textarea>
// </div>
// </div>
// </div>