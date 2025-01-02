import { createContext, useState } from "react"

export const PetsContext = createContext({})
export const PetsProvider = ({children}) => {

    const [petInfoModal, setPetInfoModal] = useState([])
    const [showModal, setShowModal] = useState(false)
    
    
    const getPetInfo = (pet) => {        
        setPetInfoModal(pet)
        setShowModal(true)
    }

    const closeModal = () =>{
        setPetInfoModal('')
        setShowModal(false)
    }



    return(
        <PetsContext.Provider value={{petInfoModal, getPetInfo, setPetInfoModal, closeModal, showModal}}>
            {children}
        </PetsContext.Provider>
    )
}