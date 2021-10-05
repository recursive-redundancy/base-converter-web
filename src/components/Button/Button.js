import React from 'react';
import styles from './button.module.scss';

const Button = ({children, className, onClick, text}) => {
  const handleTouchStart = (e) => {};

  return(
    <button className={[className, styles.button].join(' ')} 
      onClick={onClick} onTouchStart={handleTouchStart}>
      {children}
    </button>
  );
}

export default Button;