import { useContext } from 'react'
import { serviceDataContext } from '../context/DataContextProvider'
// import { useState } from 'react'


const serviceData = [
    {
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
    }
]




export default function CheckBoxService(){

    // const [serviceDataPosition, setServiceDataPosition] = useState(0);

    const service = useContext(DataContext) 


    return (
        <div className="flex items-center justify-between h-44 mt-5 mx-48 p-10 rounded-xl shadow-xl">
            <div className=" w-72 ">
                    <h2 className="text-4xl font-bold mb-1">{serviceData[service].title}</h2>
                    <p className="font-semibold">{serviceData[service].description}</p> 
            </div>
            <div className="flex justify-center text-5xl font-extrabold ">
                <h1>{serviceData[service].price}€</h1>
            </div>

            <div className="flex justify-end  form-control">
                <label className="label cursor-pointer">
                    <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                    <span className="label-text text-xl font-semibold"> Afegir</span>
                </label>
            </div>
        </div>
    )
}

