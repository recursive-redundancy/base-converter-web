import React, { useLayoutEffect } from 'react';
import { useResizeDetector } from 'react-resize-detector';

const useResizeRoot = (groundRef, snakeRef) => {
    const { width, height, ref } = useResizeDetector();
    useLayoutEffect(() => {
        document.getElementById('root').style.height = `${window.innerHeight}px`;
    }, [width, height]);

    return {ref};
};

export default useResizeRoot;