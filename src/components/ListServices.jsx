import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import WebServiceSetting from './WebServiceSetting'
import InfoModal from '../components/InfoModal'


export default function ListServices() {
    
    const context = useContext(DataContext) 
    const {serviceData, setSelectedServices, selectedServices, showWebServiceSetting, setShowWebServiceSetting} = context


    function checkboxHandler(event) {
        const { checked, id } = event.target

        if(checked){
            setSelectedServices ([...selectedServices, serviceData[id-1]]) 
            if (id === "3") {
                setShowWebServiceSetting(true)
            }
        }else{
            setSelectedServices (selectedServices.filter((e) => e !== serviceData[id-1]))
            if (id === "3") {
                setShowWebServiceSetting(false)
            }
        }
    }

    console.log(selectedServices)

    return (
        <>
        {serviceData.map((service, index) => (
            <div className="grid grid-cols-3 gap-4 content-center justify-between mt-5 mx-48 p-10 rounded-xl shadow-xl" key={index}>
                <div className=" w-72 ms-10 ">
                        <h2 className="text-4xl font-bold mb-1">{service.title}</h2>
                        <p className="font-semibold">{service.description}</p> 
                </div>
                <div className="flex justify-center self-center text-5xl font-extrabold ">
                    <h1>{service.price}€</h1>
                </div>
                <div className="flex justify-end self-center form-control me-10">
                    <label className="label cursor-pointer">
                        <input type="checkbox"  className="checkbox checkbox-primary" id={service.id} value={service.price} onChange={checkboxHandler}/>
                        <span className="label-text text-xl font-semibold"> Afegir </span>
                    </label> 
                     
                </div>
                <div className="grid grid-cols-subgrid gap-2 col-start-2 col-span-2">
                        {showWebServiceSetting && service.id === "3" && <WebServiceSetting />}       
                </div>
            </div>
        ))}
        <InfoModal />  

        </>
    )
}

