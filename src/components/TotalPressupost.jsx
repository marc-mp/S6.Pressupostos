//import { useState } from "react"
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
//import ListServices from './components/ListServices'




export default function TotalPressupost(){


   //const [totalPressupost, setTotalPressupost] = useState(0)
   const context = useContext( DataContext ) 
   const { selectedServices } = context


    const totalPressupost = selectedServices.reduce((total, selected) => total + selected, 0)



    return (
        <div className='flex justify-end h-24 mt-5 mx-48 p-10 rounded-xl '>
            <h2 className="font-bold text-3xl">Preu pressupostat: { totalPressupost }€</h2>

        </div>
    )

}