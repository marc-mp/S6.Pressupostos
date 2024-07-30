import fondoTituloCalc from '/fondoTituloCalc.jpg'
import { useState } from 'react'

export default function TituloCalculadora(){
    
    const [tituloCalculadora, setTituloCalculadora] = useState("Aconsegueix la millor qualitat")

    return (
        
        <div className="flex items-center justify-center rounded-xl text-center shadow-2xl h-40 mt-10 mb-10 sm:mx-5 md-mx-28 lg:mx-36 xl:mx-40" 
             style={{backgroundImage: `url(${fondoTituloCalc})`}} 
             alt= "fondo titulo calculadora">
            <h1 className='text-5xl font-bold'>{tituloCalculadora}</h1>    
        </div> 
    )
}
