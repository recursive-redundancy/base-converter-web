import React, {useEffect, useState} from "react";

const useConverter = (defaultIsConverting) => {
    const [isConverting, setIsConverting] = useState(false);
    const [solution, setSolution] = useState('');

    const handleConvert = (value, fromBase, toBase) => {
        setIsConverting(true);
        import('../../js/doConversion').then(({doConversion}) => {
            doConversion();            
            setTimeout(() => { 
                setSolution('dnai');
                setIsConverting(false);
            }, 2000);
        });
    };

    return {isConverting, handleConvert, solution};
};

export default useConverter;