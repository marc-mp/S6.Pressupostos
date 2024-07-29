import { useContext, useState } from "react"
import { DataContext } from "../context/DataContext"


export default function ListPressupostos() {

    const context = useContext(DataContext) 
    const {listadoPressupoestos, setListadoPressupoestos, originalList } = context
    const [sortedName, setSortedName] = useState(false)
    const [sortedPrice, setSortedPrice] = useState(false)
    // const [nameButtonState, setNameButtonState] = useState(false)
    // const [importButtonState, setImportButtonState] = useState(false)
    // const [dataButtonState, setdataButtonState] = useState(false)
    const [searchName, setSearchName] = useState('')


    const ordenarPorNombre = () => {
        if (sortedName === false) {
            const sortedList = [...listadoPressupoestos].sort((a, b) => a.personalData.nom.localeCompare(b.personalData.nom));
            setListadoPressupoestos(sortedList)
            setSortedName (true)
        }else{
            const sortedList = [...listadoPressupoestos].sort((a, b) => b.personalData.nom.localeCompare(a.personalData.nom))
            setListadoPressupoestos(sortedList)
            setSortedName (false)
        }
    }
  
    const ordenarPorPrecio = () => {
        if (sortedPrice === false) {
            const sortedList = [...listadoPressupoestos].sort((a, b) => a.total - b.total)
            setListadoPressupoestos(sortedList)
            setSortedPrice (true)
        }else{
            const sortedList = [...listadoPressupoestos].sort((a, b) => b.total - a.total)
            setListadoPressupoestos(sortedList)
            setSortedPrice (false)
        }
    }
  
    const reiniciarOrden = () => {
        const sortedList = [...originalList]
        setListadoPressupoestos(sortedList)
    }

    const searchPressupost = (e) => {
        const palabraToSearch = e.target.value.toLowerCase()
        setSearchName(palabraToSearch)
    
        if (palabraToSearch === '') {
          setListadoPressupoestos([...originalList])
        } else {
          const filteredList = originalList.filter(presupuesto => presupuesto.personalData.nom.toLowerCase().includes(palabraToSearch))
          setListadoPressupoestos(filteredList)
        }
    }


    return (
        <div className="mt-10 mb-10 mx-40 p-10">
            <div>
                <h2 className="flex content-start text-4xl font-bold mb-5">Pressupostos en curs:</h2>
                <div className="sortButtons flex justify-end items-center text-2xl">
                    <input type="text" name="searchPressupost" className="ms-4  size-auto border-2" placeholder=" search..." value={searchName} onChange={searchPressupost} />
                    <button className="mx-4 font-semibold" onClick={reiniciarOrden}>Data</button>
                    <button className="mx-4 font-semibold" onClick={ordenarPorPrecio}>Import</button>
                    {sortedPrice === false && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>)}
                    {sortedPrice === true && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>)}
                    <button className="mx-4 font-semibold" onClick={ordenarPorNombre}>Nom</button>
                    {sortedName === false && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>)}
                    {sortedName === true && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>)}
                </div>
            </div>
            <div>
            {listadoPressupoestos.length > 0 ? (
                listadoPressupoestos.map((presupuesto, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 content-center items-center mt-5  p-10 rounded-xl shadow-xl">
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
                                            `(${presupuesto.numPages} pàgines, ${presupuesto.numLanguages} llenguatges)`
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
                ))
            ) : (
              <p className="text-center text-2xl mt-5">No se han encontrado resultados</p>
            )}
            </div>
        </div>    
    )
}

