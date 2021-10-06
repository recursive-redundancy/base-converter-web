import React, {useEffect, useState} from "react";

const useConverter = (defaultIsConverting) => {
    const [isConverting, setIsConverting] = useState(false);
    const [solution, setSolution] = useState('');

    const handleConvert = (value, fromBase, toBase) => {
        setIsConverting(true);
        import('../../js/doConversion').then(({doConversion}) => {
            setTimeout(() => { 
                const result = doConversion(value, fromBase, toBase);            
                setSolution(result);
                setIsConverting(false);
            }, 0);
        });
    };

    return {isConverting, handleConvert, solution};
};

export default useConverter;