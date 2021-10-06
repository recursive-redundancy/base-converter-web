import React, {useEffect, useState} from 'react';

const useResizeRoot = () => {
    useEffect(() => {
        const setRootHeight = () => {
            setTimeout(() => {
                document.getElementById('root').style.height = `${window.innerHeight}px`;
            }, 0);
        };

        setRootHeight();
        window.addEventListener('resize', setRootHeight);
        
        return(() => {
            window.removeEventListener('resize', setRootHeight);
        });
    }, []);

    return {};
};

export default useResizeRoot;