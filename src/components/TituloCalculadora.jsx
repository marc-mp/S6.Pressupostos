import fondoTituloCalc from '/fondoTituloCalc.jpg'
import { useState } from 'react'
// import { useContext } from 'react'
// import { tituloCalcContext } from '../context/DataContextProvider'



export default function TituloCalculadora(){
    
    // const tituloCalculadora = useContext(tituloCalcContext)
    const [tituloCalculadora, setTituloCalculadora] = useState("Aconsegueix la millor qualitat");


    

    return (
        <div className="h-40 flex items-center justify-center mt-10 mb-10 mx-28 rounded-xl shadow-2xl" 
             style={{backgroundImage: `url(${fondoTituloCalc})`}} 
             alt= "fondo titulo calculadora">
            <h1 className='text-5xl font-bold'>{tituloCalculadora}</h1>    
        </div> 
    )
}
