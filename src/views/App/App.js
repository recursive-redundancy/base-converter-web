import React from 'react';
// import BaseSelect from '../../components/BaseSelect';
import Button from '../../components/Button';
import styles from './app.module.scss';

const App = ({handleInput, handleSolve, isSolving}) => {
    return (
        <div className={styles.app}>
            <div className={styles.header}>
                <h1>Base Converter</h1>
            </div>
            <div className={styles.inputarea}>
                <h2>Input</h2>
                <textarea defaultValue='1011' />
                        

                {/* <BaseSelect /> */}
                

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