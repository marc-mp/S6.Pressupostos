import { useContext } from "react"
import { DataContext } from "../context/DataContext"


export default function ListPressupostos() {

    const context = useContext(DataContext) 
    const {listadoPressupoestos} = context
    


    return (
        <div className="mt-10 mb-10 mx-40 p-10 ">
            <div className="flex content-start text-3xl font-bold mb-5">
                <h2>Pressupostos en curs:</h2>
            </div>
            <div>
                {listadoPressupoestos.map((presupuesto, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 content-center items-center mt-5  p-10 rounded-xl shadow-xl">
                        {/* <h3 className="text-xl font-bold">{index + 1}</h3> */}
                        <div >
                            <p className="text-3xl font-bold mb-2"> {presupuesto.personalData.nom} </p>
                            <p className="font-semibold text-gray-600 mb-2"> {presupuesto.personalData.email} </p>
                            <p className="font-semibold text-gray-600 mb-2"> {presupuesto.personalData.telefon} </p>
                        </div>
                        <div className="font-bold">
                            <p className="font-extrabold">Serveis contractats:</p>
                            <ul>
                                {presupuesto.services.map((service, i) => (
                                    <li key={i}>
                                        · {service.title}
                                        {service.id === "3" && presupuesto.numPages !== null && presupuesto.numLanguages !== null &&
                                            ` (${presupuesto.numPages} pàgines, ${presupuesto.numLanguages} llenguatges)`
                                        }
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="ms-36">
                            <p className="ms-5 font-semibold text-gray-600 ">Total:</p>
                            <p className="text-4xl font-bold ">{presupuesto.total} €</p>     
                        </div>    
                    </div>
                ))}
            </div>
        </div>    
    )
}

