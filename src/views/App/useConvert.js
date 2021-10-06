import React, {useEffect, useState} from "react";

const useConvert = (defaultState) => {
    const [isConverting, setIsConverting] = useState(defaultState);

    const handleConvert = (value) => {
        setIsConverting(true);
        setTimeout(() => { setIsConverting(false) }, 2000);
    };

    return [isConverting, handleConvert];
};

export default useConvert;