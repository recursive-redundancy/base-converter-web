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
            <Button className={styles.convertbutton}>
                Convert
            </Button>
        </div>
    );
};

export default App;