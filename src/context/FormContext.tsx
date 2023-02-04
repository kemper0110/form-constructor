import React, {useContext, useState} from "react";


interface IElementsContext {
    elements: Element[],
    setElements: (elements: Element[]) => void
}


const Context = React.createContext<IElementsContext>({
    elements: Array<Element>(),
    setElements: (elements) => {}
});

interface FormContextProps {
    children: React.ReactNode
}

export const FormContextProvider = ({children}: FormContextProps) => {
    const [elements, setElements] = useState<Element[]>(Array<Element>());

    return (
        <Context.Provider value={{elements, setElements}}>
            {children}
        </Context.Provider>
    )
};


export const useElements = () => {
    return useContext(Context);
};