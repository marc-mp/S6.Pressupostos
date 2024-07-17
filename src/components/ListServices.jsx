// import CheckBoxService from './components/CheckBoxService'
// import ServiceData from './components/ServiceData'
import { useContext } from "react"
import { DataContext } from "../context/DataContext"
//import { useState } from "react"

export default function ListServices() {

    const serviceData = [
        {
            title: "Seo",
            description: "Programació duna web responsive completa",
            price: 300
        },
        {
            title: "Ads",
            description: "Programació duna web responsive completa",
            price: 400
        },
        {
            title: "Web", 
            description: "Programació duna web responsive completa",
            price: 500
        }
    ]
    

    //const [selectedServices, setSelectedServices ] = useState ([])

    const context = useContext(DataContext) 
    const {setSelectedServices, selectedServices } = context

    function checkboxHandler(event){
        //console.log(event.target.checked) // si checked true sino false 
        //console.log(event.target.value) // encontravos value que es el valor de service.
        const { value, checked } = event.target

        if(checked){
            setSelectedServices ([...selectedServices, parseInt(value)])
        }else{
            setSelectedServices (selectedServices.filter((e) => e !== value))
        }
    }

    console.log(selectedServices)


    // function TotalPressu(selectedServices){

    //     const totalpressupost = selectedServices.reduce((total, selected) => total + selected, 0)
    //     console.log(totalpressupost)

    // }



  
    return (
      <div>
        {serviceData.map((service, index) => (
                  <div className="flex items-center justify-between h-32 mt-5 mx-48 p-10 rounded-xl shadow-xl" key={index}>
                  <div className=" w-72 ">
                          <h2 className="text-4xl font-bold mb-1">{service.title}</h2>
                          <p className="font-semibold">{service.description}</p> 
                  </div>
                  <div className="flex justify-center text-5xl font-extrabold ">
                      <h1>{service.price}€</h1>
                  </div>
                  <div className="flex justify-end  form-control">
                      <label className="label cursor-pointer">
                          <input type="checkbox"  className="checkbox checkbox-primary" id={`${index}`} value={service.price} onChange={checkboxHandler}/>
                          <span className="label-text text-xl font-semibold"> Afegir</span>
                      </label>
                  </div>
              </div>
      
        ))}
      </div>
    )
  
}

