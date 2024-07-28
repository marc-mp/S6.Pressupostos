import React from "react";
import { useState } from "react";


export const DataContext = React.createContext({})

const DataContextProvider = ( {children} ) => {

    const [serviceData, setServiceData] = useState ([  
    {
        id: "1",
        title: "Seo",
        description: "Programació duna web responsive completa",
        price: 300
    },
    {
        id: "2",
        title: "Ads",
        description: "Programació duna web responsive completa",
        price: 400
    },
    {
        id: "3",
        title: "Web", 
        description: "Programació duna web responsive completa",
        price: 500
    }])
    
    const [selectedServices, setSelectedServices] = useState ([])
    const [totalPressupost, setTotalPressupost] = useState (0)
    const [numPages, setNumPages] = useState (0)
    const [numLanguages, setNumLanguages] = useState (0)
    const [showWebServiceSetting, setShowWebServiceSetting] = useState (false);
    const [personalDataForm, setPersonalDataForm] = useState ({})
    const [newPressupost, setNewpressupost] = useState ({})
    const [listadoPressupoestos, setListadoPressupoestos] = useState ([])
    const [modalOpen, setModalOpen] = useState(false)
    const [modalData, setModalData] = useState({ title: "", text: "" })



    // para usar provider dentro de DataContext.provider indicar value={{prop, prop,...}}
    return (
            <DataContext.Provider value= {{ serviceData,
                                            setServiceData,
                                            selectedServices, 
                                            setSelectedServices, 
                                            totalPressupost, 
                                            setTotalPressupost, 
                                            numPages, 
                                            setNumPages, 
                                            numLanguages,
                                            setNumLanguages,
                                            showWebServiceSetting,
                                            setShowWebServiceSetting,
                                            personalDataForm,
                                            setPersonalDataForm,
                                            newPressupost,
                                            setNewpressupost,
                                            listadoPressupoestos, 
                                            setListadoPressupoestos,
                                            modalOpen, 
                                            setModalOpen,
                                            modalData, 
                                            setModalData
                                            
                                         
                                        }}>

                {children} 
            </DataContext.Provider> 
    )
} 

export default DataContextProvider