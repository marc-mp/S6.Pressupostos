// import { useContext } from 'react'
//import CheckBoxService from './components/CheckBoxService'
import './App.css'
// import { useState } from 'react'
import DataContextProvider from './context/DataContext'
import TituloCalculadora  from './components/TituloCalculadora'
import ListServices from './components/ListServices'
import TotalPressupost from './components/TotalPressupost'
//import WebServiceSetting from './components/WebServiceSetting'




export default function App() {
  

  return (
    <DataContextProvider>
      <div>
        <TituloCalculadora />
        <ListServices />
        <TotalPressupost/>


      </div>
    </DataContextProvider>
  )
}

 
