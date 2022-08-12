import { createContext } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

export const TechContext = createContext({})

const TechProvider = ({children}) => {

    
    const addTech = (data) => {
        
        toast.promise(
            api.post("/users/techs", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
             },),
             {
                pending : 'Aguarde' , 
                success : 'Tech adicionada 👌' , 
                error : 'Promessa rejeitada 🤯' 
             }
        )
    }

    const deleteTech = (id) => {

        toast.promise(
            api.delete(`/users/techs/${id}`, {
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
            }),

            {
                pending : 'Aguarde' , 
                success : 'Tech removida 👌' , 
                error : 'Operação rejeitada 🤯'
            }
            
        )
    }

    return (
        <TechContext.Provider value={{addTech, deleteTech}} >
            {children}
        </TechContext.Provider>
    )

}

export default TechProvider