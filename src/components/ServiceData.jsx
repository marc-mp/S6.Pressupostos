import { useContext } from 'react'
import { serviceDataContext } from '../context/DataContextProvider'




export default function ServiceData (){

    const service = useContext(DataContext)


    return (
        
        [{
            title: "Seo",
            description: "Programació duna web responsive completa",
            price: "300€"
        },
        {
            title: "Ads",
            description: "Programació duna web responsive completa",
            price: "400€"
        },
        {
            title: "Web", 
            description: "Programació duna web responsive completa",
            price: "500€"
        }] 
    )
    
}

