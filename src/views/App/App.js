import React from 'react';
import BaseSelect from '../../components/BaseSelect';
import Button from '../../components/Button';
import Input from '../../components/Input';
import LoadSpinner from '../../components/LoadSpinner';
import Output from '../../components/Output';
import Titlebar from '../../components/Titlebar';
import useBases from '../../components/BaseSelect/useBases';
import useConverter from './useConverter';
import useInput from '../../components/Input/useInput';
import styles from './app.module.scss';
import { useEffect } from 'react/cjs/react.development';

const defaultInput = '1011',
      defaultOutput = '13';

const App = () => {
    const {fromBase, toBase, handleFromBaseChange, handleToBaseChange} = useBases('bin', 'dec');
    const {isConverting, handleConvert, solution} = useConverter(false);
    const {input, handleInputChange} = useInput(defaultInput);
        
    return (
        <div className={styles.app}>
            <Titlebar />
            <Input defaultValue={defaultInput} handleInputChange={handleInputChange} />
            <BaseSelect handleFromBaseChange={handleFromBaseChange} 
                        handleToBaseChange={handleToBaseChange} />
            {
            (isConverting) 
            ?
                <LoadSpinner label='converting' />
            :
                <Output value={solution} />
            }
            <Button className={styles.convertbutton} onClick={()=>{handleConvert(input, fromBase, toBase)}}>
                Convert
            </Button>
        </div>
    );
};

export default App;