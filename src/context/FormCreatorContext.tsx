import React, {createContext, useContext, useState} from 'react';
import FormCreatorStore from "../store/FormCreatorStore";

const context = createContext<FormCreatorStore | null>(null);

interface ProviderProps {
    children: React.ReactNode
}

export const FormCreatorContextProvider = ({children}: ProviderProps) => {
    const [store] = useState(() => new FormCreatorStore());
    return (
        <context.Provider value={store}>
            {children}
        </context.Provider>
    );
};

export const useCreatorStore = () : FormCreatorStore => {
    return useContext(context)!;
};

