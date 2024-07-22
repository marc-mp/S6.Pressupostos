
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'

//Calcular el cost del pressupost total i el cost total del web seguint la següent fórmula:  ( Nombre de pàgines + el nombre d'idiomes ) * 30€.

export default function WebServiceSetting(){

    const context = useContext( DataContext ) 
    const {numPages, setNumPages, numLanguages, setNumLanguages } = context

    function incrementarPagines() {
        setNumPages (numPages + 1)
    }

    function disminuirPagines(){
        if(numPages > 0) {
            setNumPages (numPages - 1)
        }
    }

    function incrementarLlenguatges() {
        setNumLanguages (numLanguages + 1)
    }

    function disminuirLlenguatges(){
        if(numLanguages > 0) {
            setNumLanguages (numLanguages - 1)
        }
    }


 
    return (
        <div className="font-semibold ms-56">
            <div className='inline-flex w-96 items-center mb-1 '>
                <div className='ms-7 me-9'>
                    <p>Nombre de pagines</p>
                </div>
                <div className="flex items-center justify-center rounded-full w-5 h-5 text-gray-600 border-2 border-gray-500 me-1" >
                    <button onClick={disminuirPagines}>-</button>
                </div>
                <span className="border-2 border-gray-500 w-16 h-10 rounded-lg me-1 flex items-center justify-center font-bold"> {numPages} </span> 
                <div className="flex items-center justify-center rounded-full w-5 h-5 text-gray-600 border-2 border-gray-500" >
                    <button  onClick={incrementarPagines}>+</button>
                </div>
            </div>
            <div className='inline-flex w-96 items-center '>
                <div className='me-9'>
                    <p>Nombre de llenguatges</p>
                </div>
                <div className="flex items-center justify-center rounded-full w-5 h-5 text-gray-600 border-2 border-gray-500 me-1" >
                    <button onClick={disminuirLlenguatges}>-</button>
                </div>
                <span className="border-2 border-gray-500 w-16 h-10 rounded-lg me-1 flex items-center justify-center font-bold"> {numLanguages} </span> 
                <div className="flex items-center justify-center rounded-full w-5 h-5 text-gray-600 border-2 border-gray-500">
                    <button  onClick={incrementarLlenguatges}>+</button>
                </div>
            </div>
        </div>
    )
}

