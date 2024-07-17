import React from "react";
import { useState } from "react";
//import { createContext } from "react"
// import ListServices from './components/ListServices'


export const DataContext = React.createContext({})

const DataContextProvider = ( {children} ) => {


    //const [service, setService] = useState(0);
    //const [totalPressupost, setTotalPressupost] = useState(0)
    const [selectedServices, setSelectedServices ] = useState ([])
    const [totalPressupost, setTotalPressupost] = useState(0)

    


            // para usar provider dentro de DataContext.provider indicar value={{prop, prop,...}}
    return (
            <DataContext.Provider value= {{selectedServices, setSelectedServices, totalPressupost, setTotalPressupost}}>

                {children} 
            </DataContext.Provider> 
    )
} 

export default DataContextProvider