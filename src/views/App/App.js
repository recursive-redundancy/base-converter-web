import React from 'react';
import styles from './app.module.scss';

const App = ({handleInput, handleSolve, isSolving}) => {
    return (
        <div className={styles.app}>
            <div className={styles.header}>
                <h1>Base Converter</h1>
            </div>
            <div className={styles.inputarea}>
                <h2 id='input-label'>Input</h2>
                <textarea />
            </div>

        </div>  
    );
};

export default App;


// <div class='row label'>
// <div class='cell label'>
// <h2 id='input-label'>Input</h2>
// </div>
// </div>
// <div class='row text'>
// <div class='cell in-out'>
// <div class='wrap-text'>
//     <textarea id='txt-input' class='txt-base'>0</textarea>
// </div>
// </div>
// </div>

// <div id='area-select' class='row'>
// <div class='cell'>
// <div class='table select'>
//     <div class='row labels'>
//     <div class='cell'>
//         <h2>From Base</h2>
//     </div>
//     <div class='cell'>
//         <h2>To Base</h2>
//     </div>
//     <div class='cell'>
//     </div>
//     </div>
//     <div class='row controls'>
//     <div class='cell'>
//         <select id='sel-from'>
//         <option value='bin' selected>Binary</option>
//         <option value='oct'>Octal</option>
//         <option value='dec'>Decimal</option>
//         <option value='hex'>Hex</option>
//         </select>
//     </div>
//     <div class='cell'>
//         <select id='sel-to'>
//             <option value='bin'>Binary</option>
//             <option value='oct'>Octal</option>
//             <option value='dec' selected>Decimal</option>
//             <option value='hex'>Hex</option>
//         </select>
//     </div>
//     <div id='cell-convert' class='cell'>
//         <button id='btn-convert' ontouchstart=''>Convert</button>
//     </div>
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