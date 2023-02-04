import {useState} from "react";


const useCounter = (init: number = 0) => {
    const [value, setValue] = useState(init);
    return {
        next: () => {
            setValue(value => value + 1)
            return value;
        },
        current: value
    }
}

export default useCounter;