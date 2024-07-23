// import { useContext } from 'react'
//import CheckBoxService from './components/CheckBoxService'
//import './App.css'
// import { useState } from 'react'
import DataContextProvider from '../context/DataContext'
import TituloCalculadora  from '../components/TituloCalculadora'
import ListServices from '../components/ListServices'
import TotalPressupost from '../components/TotalPressupost'
import Menu from '../components/Menu'


export default function App() {
  
  return (
    <DataContextProvider>
      <div>
        <Menu />
        <TituloCalculadora />
        <ListServices />
        <TotalPressupost/>


      </div>
    </DataContextProvider>
  )
}

 
