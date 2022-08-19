import { AxiosPromise } from "axios";
import { createContext, ReactNode } from "react";
import { FieldValue, FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../services/api";
import { IAxiosResponse } from "./AuthContext";


interface ITechProviderProps {
    children: ReactNode
}

export interface Itech {
    title: string
    status: string
    id: string
}

interface ITechContext {
    addTech: any
    deleteTech: (id: string) => void
}

export const TechContext = createContext<ITechContext>({} as ITechContext)

const TechProvider = ({children}: ITechProviderProps) => {

    
    const addTech = (data: Itech) => {
        
        toast.promise(
            api.post<IAxiosResponse>("/users/techs", data, {
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

    const deleteTech = (id: string) => {

        toast.promise(
            api.delete<IAxiosResponse>(`/users/techs/${id}`, {
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