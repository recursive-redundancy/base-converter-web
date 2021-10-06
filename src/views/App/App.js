import React from 'react';
import BaseSelect from '../../components/BaseSelect';
import Button from '../../components/Button';
import Input from '../../components/Input';
import LoadSpinner from '../../components/LoadSpinner';
import Output from '../../components/Output';
import Titlebar from '../../components/Titlebar';
import useConvert from './useConvert';
import useInput from '../../components/Input/useInput';
import useOutput from '../../components/Output/useOutput';
import styles from './app.module.scss';


const App = ({handleInput, handleSolve, isSolving}) => {
    const [isConverting, handleConvert] = useConvert(false);
    const [input, changeInput] = useInput('hi');
    const [output, changeOutput] = useOutput('hi');
        
    return (
        <div className={styles.app}>
            <Titlebar />
            <Input changeInput={changeInput} />
            <BaseSelect />
            {(()=>{
                if (isConverting) {
                    return(
                        <LoadSpinner label='converting' />
                    );
                }
                return(
                    <>
                    <Output />
              
                    </>
                );
            })()
            }
            <Button className={styles.convertbutton} onClick={handleConvert}>
                Convert
            </Button>
        </div>
    );
};

export default App;