// import { useContext } from 'react'
//import './App.css'
// import { useState } from 'react'
import DataContextProvider from '../context/DataContext'
import TituloCalculadora  from '../components/TituloCalculadora'
import ListServices from '../components/ListServices'
import TotalPressupost from '../components/TotalPressupost'
import Menu from '../components/Menu'
import FormPressupost from '../components/FormPressupost'
import ListPressupostos from '../components/ListPressupostos'


export default function App() {
  
  return (
    <DataContextProvider>
      <div>
        <Menu />
        <TituloCalculadora />
        <ListServices />
        <TotalPressupost/>
        <FormPressupost />
        <ListPressupostos />


      </div>
    </DataContextProvider>
  )
}

 
