import React, {useEffect, useState} from "react";

const useBases = (defaultFromBase, DefaultToBase) => {
    const [fromBase, setFromBase] = useState(defaultFromBase);
    const [toBase, setToBase] = useState(DefaultToBase);

    const handleFromBaseChange = (e) => {
        setFromBase(e.target.value);
    }

    const handleToBaseChange = (e) => {
        setToBase(e.target.value);
    }

    return {fromBase, toBase, handleFromBaseChange, handleToBaseChange};
};

export default useBases;