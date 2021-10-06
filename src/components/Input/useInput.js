import React, {useEffect, useState} from "react";

const useInput = (value) => {
    const [input, setInput] = useState(value);

    const changeInput = (value) => {
        setInput(value);
    }

    return [input, changeInput];
};

export default useInput;