import React, { useState, createContext, useContext } from 'react';

type AppContextTypes = {
    searchIsVisible: boolean
    setSearchIsVisible: (newState: boolean) => void
}

type AppContextProps = {
    children: React.ReactNode
}

const InitialValue = {
    searchIsVisible: false,
    setSearchIsVisible: () => { }
}

export const appContext = createContext<AppContextTypes>(InitialValue);

export default function AppContext({ children }: AppContextProps) {

    const [searchIsVisible, setSearchIsVisible] = useState(InitialValue.searchIsVisible);// Controla a visibilidade do modal

    return (
        <appContext.Provider value={{
            searchIsVisible,
            setSearchIsVisible,
        }
        }>
            {children}
        </appContext.Provider>
    )
}

export const useAppContext = () => useContext(appContext);
