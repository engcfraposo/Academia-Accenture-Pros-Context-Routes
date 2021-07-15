import { createContext, useContext, useState } from 'react';

const ToogleContext = createContext()

const ToogleProvider = ({children}) => {
    const [estadoPai, setEstadoPai] = useState(false)
    const [estadoFilho, setEstadoFilho] = useState(false)

    const handleClickPai = () =>{
        setEstadoPai(!estadoPai)
    }

    const handleClickFilho = () =>{
        setEstadoFilho(!estadoFilho)
    }
    
    return (
    <ToogleContext.Provider 
        value={{
            estadoPai, 
            estadoFilho, 
            handleClickPai, 
            handleClickFilho
        }}
    >
        {children}
    </ToogleContext.Provider>
    )
}

function useToogle() {
    const context = useContext(ToogleContext)
  return context;
}

export { ToogleProvider, useToogle};