import React, {useEffect, useState} from "react";

const useInput = (value) => {
    const [input, setInput] = useState(value);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    return {input, handleInputChange};
};

export default useInput;