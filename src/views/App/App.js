import React from 'react';
import BaseSelect from '../../components/BaseSelect';
import Button from '../../components/Button';
import Titlebar from '../../components/Titlebar';
import Input from '../../components/Input';
import Output from '../../components/Output';
import styles from './app.module.scss';

const App = ({handleInput, handleSolve, isSolving}) => {
    return (
        <div className={styles.app}>
            <Titlebar />
            <Input />
            <BaseSelect />
            <Output />
        

        {/* <div> */}
            <Button>
                Convert
            </Button>
        {/* </div> */}


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