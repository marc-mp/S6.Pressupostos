import { useContext, useState } from "react"
import { DataContext } from "../context/DataContext"
import WebServiceSetting from './WebServiceSetting'
import InfoModal from '../components/InfoModal'


export default function ListServices() {
    
    const context = useContext(DataContext) 
    const { serviceData, setSelectedServices, selectedServices, showWebServiceSetting, setShowWebServiceSetting, setServiceData, setTotalPressupost, setNumPages, setNumLanguages  } = context
    const [ applyDiscount, setApplyDiscount ] = useState(true)

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


    const aplicarDescuentoAnual = () => {
        // reiniciamos valores y limpiamos datos cada vez que se cambia a pagament mensual o anual
        setSelectedServices([])
        setTotalPressupost(0)
        setNumPages(0)
        setNumLanguages(0)
        setShowWebServiceSetting(false)
        const checkboxes = document.querySelectorAll('input[type="checkbox"]')
        checkboxes.forEach(checkbox => checkbox.checked = false)
        
        const servicesWithDiscount = serviceData.map(service => {
            const discountService = { ...service }
            
            if (applyDiscount == true) {
                discountService.price = service.price * 0.8
            }else{
                discountService.price = service.price / 0.8
            }
            return discountService;
        })

        setServiceData(servicesWithDiscount)
        setApplyDiscount(!applyDiscount)
    }

    return (
        <>
        
        <div className="flex justify-center items-center my-4">
            <span className="mr-3 font-semibold">Pagament mensual</span>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="discountButton" className="sr-only peer" onChange={aplicarDescuentoAnual} />
                    <div className="w-11 h-6 bg-green-500 rounded-full peer peer-checked:bg-green-500 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 transition-all duration-300"></div>
                    {!applyDiscount && <span className="absolute right-1  bg-white w-5 h-5 rounded-full "></span>}
                    {applyDiscount && <span className="absolute left-1  bg-white w-5 h-5 rounded-full "></span>}

                </label>
            <span className="ml-3 font-semibold">Pagament anual</span>
        </div>
        {serviceData.map((service, index) => (
            <div className="grid grid-cols-3 gap-4 content-center justify-between mt-5 mx-48 p-10 rounded-xl shadow-xl" key={index}>
                <div className=" w-72 ms-10 ">
                        <h2 className="text-4xl font-bold mb-1">{service.title}</h2>
                        <p className="font-semibold">{service.description}</p> 
                </div>
                <div className="flex-col ms-24 justify-center self-center text-5xl font-extrabold ">
                        {!applyDiscount && <span className="text-xl text-red-200">Ahorra un 20%</span>}
                      <h1>{service.price}€ </h1>
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


