import React, {useEffect, useState} from "react";

const useOutput= (value) => {
    const [output, setOutput] = useState(value);

    const changeOutput = (value) => {
        setOutput(value);
    }

    return [output, changeOutput];
};

export default useOutput;