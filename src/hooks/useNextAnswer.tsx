import React from 'react';
import useCounter from "./useCounter";

const useNextAnswer = (answer: string = "", init: number= 0) => {
    const {next, current} = useCounter(init);
    return {
        next: () => answer + next(),
        current: answer + current
    }
};

export default useNextAnswer;