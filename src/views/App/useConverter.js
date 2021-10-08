import React, {useEffect, useState} from "react";

const useConverter = (defaultIsConverting) => {
    const [isConverting, setIsConverting] = useState(false);
    const [solution, setSolution] = useState('');

    const handleConvert = (value, fromBase, toBase) => {
        setIsConverting(true);
        import('../../js/doConversion').then(({doConversion}) => {
            setTimeout(() => { 
                doConversion(value, fromBase, toBase).then((res) => {
                    setIsConverting(false);
                    if (!res) {
                        setSolution('INVALID INPUT!');
                        return;
                    };
                    setSolution(res);
                }, 0);
                });
        });
    };

    return {isConverting, handleConvert, solution};
};

export default useConverter;