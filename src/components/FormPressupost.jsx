import { useContext} from "react"
import { DataContext } from "../context/DataContext"
import { useForm } from "react-hook-form"


export default function FormPressupost() {

    const context = useContext(DataContext) 
    const {personalDataForm, setPersonalDataForm, newPressupost, listadoPressupoestos, setListadoPressupoestos, totalPressupost, selectedServices, numPages, numLanguages, setSelectedServices, setTotalPressupost, setNumPages, setNumLanguages, setShowWebServiceSetting,} = context

    const {register, handleSubmit, reset } = useForm()

    const generatePressupost = (dataForm) => {
        console.log(dataForm)

        if(totalPressupost === 0){
            alert("si us plau, seleccioni un servei per generar el pressupost")
        }else{
            const newPressupost = {
                personalData: dataForm,
                services: selectedServices,
                total: totalPressupost,
                numPages: selectedServices.some(service => service.id === "3") ? numPages : null,
                numLanguages: selectedServices.some(service => service.id === "3") ? numLanguages : null,
            }

            setPersonalDataForm (dataForm)
            setListadoPressupoestos([...listadoPressupoestos, newPressupost])
            
            // limpiamos datos formulario y checkbox
            setSelectedServices([])
            setTotalPressupost(0)
            setNumPages(0)
            setNumLanguages(0)
            setShowWebServiceSetting(false)
            reset() 

            const checkboxes = document.querySelectorAll('input[type="checkbox"]')
            checkboxes.forEach(checkbox => checkbox.checked = false)
        }
    }

    console.log(personalDataForm)
    console.log(newPressupost)
    console.log(listadoPressupoestos)

    return (
        <div className="mt-10  mb-10 mx-48 p-10 rounded-xl shadow-xl">
            <div className="flex content-start text-3xl font-bold mb-5">
                <h2>Demanar Pressupost</h2>
            </div>
            <form onSubmit={handleSubmit(generatePressupost)} className="flex self-center  justify-around form-control me-2" >
                <input type="text" required className="border-2 border-gray-200 rounded-lg" placeholder=" Nom" {...register("nom")} />
                <input type="tel"  required className="border-2 border-gray-200 rounded-lg" placeholder=" Telefon" {...register("telefon")}/>
                <input type="email" required className="border-2 border-gray-200 rounded-lg" placeholder=" Email" {...register("email")}/>
                <input type="submit" className='ms-5 flex items-center border-2 border-gray-200 text-white  bg-emerald-600 h-8 w-52 rounded-lg' value="Sol·licitar pressupost" />
            </form>
        </div>
    )
}