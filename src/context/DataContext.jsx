import React from "react";
import { useState } from "react";
//import { createContext } from "react"
// import ListServices from './components/ListServices'


export const DataContext = React.createContext({})

const DataContextProvider = ( {children} ) => {


    const [selectedServices, setSelectedServices] = useState ([])
    const [totalPressupost, setTotalPressupost] = useState(0)
    const [numPages, setNumPages] = useState(0)
    const [numLanguages, setNumLanguages] = useState(0)
    const [showWebServiceSetting, setShowWebServiceSetting] = useState(false);





            // para usar provider dentro de DataContext.provider indicar value={{prop, prop,...}}
    return (
            <DataContext.Provider value= {{ selectedServices, 
                                            setSelectedServices, 
                                            totalPressupost, 
                                            setTotalPressupost, 
                                            numPages, 
                                            setNumPages, 
                                            numLanguages,
                                            setNumLanguages,
                                            showWebServiceSetting,
                                            setShowWebServiceSetting

                                        
                                        }}>

                {children} 
            </DataContext.Provider> 
    )
} 

export default DataContextProvider