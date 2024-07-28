import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import { Modal,ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';

  export default function InfoModal() {
    const context = useContext(DataContext);
    const { modalOpen, setModalOpen, modalData} = context

    return (
      
        <div>
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
            <ModalContent className="bg-gray-500 m-48 size-96 rounded-3xl" >
              <div className="flex justify-end me-14 mt-9 text-2xl"> 
                <ModalCloseButton /> 
              </div>
              <ModalHeader className="flex justify-center items-center text-5xl font-bold mt-12 mb-10">
                {modalData.title}
                </ModalHeader>
              <ModalBody className="flex justify-center text-center items-center font-semibold mx-20 text-2xl">
              {modalData.text}
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
    )
  }


