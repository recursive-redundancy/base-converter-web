import React, {useEffect,useRef, useState} from 'react';
import App from './App';

const AppContainer = () => {
  const [isSolving, setIsSolving] = useState(false);
  const [inputExpression, setInputExpression] = useState('');
  const [solveQueueLength, setSolveQueueLength] = useState(0);
  const solveQueueLengthRef = useRef(solveQueueLength);
  useEffect(() => {
    solveQueueLengthRef.current = solveQueueLength;
    if (solveQueueLengthRef.current == 0) {
      setIsSolving(false);
    }
  }, [solveQueueLength]);

  const [solveExpression, setSolveExpression] = useState('');
  useEffect(() => {
      console.log('solveExpression changed');
  }, [solveExpression]);

  useEffect(() => {
    setRootHeight();
    window.addEventListener('resize', setRootHeight);

    return(() => {
      window.removeEventListener('resize', setRootHeight);
    });
  }, []);
  
  const handleInput = (e) => {
    console.log('handleInput', e.target.value);
  };

  const handleSolve = (e) => {
    setIsSolving(true);
    setSolveQueueLength(solveQueueLengthRef.current + 1);
    setTimeout(() => {
      setSolveQueueLength(solveQueueLengthRef.current - 1);
    }, 1500);
  }

  const setRootHeight = () => {
    setTimeout(() => {
        document.getElementById('root').style.minHeight = `${window.innerHeight}px`;
    }, 0);
  };

  return(
    <App handleInput={handleInput} handleSolve={handleSolve} isSolving={isSolving} />
  );
};

export default AppContainer;