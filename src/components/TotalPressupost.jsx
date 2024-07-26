//import { useState } from "react"
import { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'


export default function TotalPressupost(){


   const context = useContext( DataContext ) 
   const {totalPressupost, setTotalPressupost, selectedServices, setSelectedServices, numPages, numLanguages } = context

    useEffect (() =>  {  // si se usa setSelectedServices quieres decir que hay cambios en selectServices por lo que se recalcula totalPressupost (usando setTotalPressupost)
        if(setSelectedServices){
            setTotalPressupost (selectedServices.reduce((total, selected) => total + selected.price, 0) + (( numPages + numLanguages ) * 30))
        }
    },)

    
    return (
        <div className='flex justify-end h-24 mt-5 mx-48 p-10 rounded-xl '>
            <h2 className="font-bold text-3xl">Preu pressupostat: { totalPressupost } € </h2>

        </div>
    )

}