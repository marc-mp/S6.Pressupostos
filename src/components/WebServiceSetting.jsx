
import { useContext} from 'react'
import { DataContext } from '../context/DataContext'


export default function WebServiceSetting(){

    const context = useContext( DataContext ) 
    const {numPages, setNumPages, numLanguages, setNumLanguages, setModalOpen, setModalData} = context

    function selectModal(id) {
      if (id === 'modal1') {
        setModalData({ title: 'Número de pàgines', text: 'Afegeix les pàgines que necessitis per a dur a terme el teu projecte. El cost de cada pàgina es de 30€' })
      } else if (id === 'modal2') {
        setModalData({ title: 'Número de llenguatges', text: 'Afegeix les llenguatges que tindrà el teu projecte. El cost de cada llenguatge és de 30€' })
      }
      setModalOpen(true)
    }

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
                <button className="flex items-center justify-center rounded-full me-2 w-4 h-4 text-xs  border-2 border-black" id="modal1" onClick={() => selectModal("modal1")}>i</button>
                <div className='ms-7 me-9'>
                    <p>Nombre de pagines</p>
                </div>
                <div className="flex items-center justify-center rounded-full w-5 h-5 text-gray-600 border-2 border-gray-200 me-1" >
                    <button onClick={disminuirPagines}>-</button>
                </div>
                <span className="border-2 border-gray-200 w-16 h-10 rounded-lg me-1 flex items-center justify-center font-bold"> {numPages} </span> 
                <div className="flex items-center justify-center rounded-full w-5 h-5 text-gray-600 border-2 border-gray-200" >
                    <button  onClick={incrementarPagines}>+</button>
                </div>
            </div>
            <div className='inline-flex w-96 items-center '>
                <button className="flex items-center justify-center rounded-full me-2 w-4 h-4 text-xs  border-2 border-black" id="modal2" onClick={() => selectModal("modal2")}>i</button>
                <div className='me-9'>
                    <p>Nombre de llenguatges</p>
                </div>
                <div className="flex items-center justify-center rounded-full w-5 h-5 text-gray-600 border-2 border-gray-200 me-1" >
                    <button onClick={disminuirLlenguatges}>-</button>
                </div>
                <span className="border-2 border-gray-200 w-16 h-10 rounded-lg me-1 flex items-center justify-center font-bold"> {numLanguages} </span> 
                <div className="flex items-center justify-center rounded-full w-5 h-5 text-gray-600 border-2 border-gray-200">
                    <button  onClick={incrementarLlenguatges}>+</button>
                </div>
            </div>
        </div>
    )
}

