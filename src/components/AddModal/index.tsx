import { ChangeEvent, useContext, useEffect, useRef } from "react"
import { TechContext } from "../../contexts/TechContext"
import { yupResolver } from "@hookform/resolvers/yup"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import AddModalDiv from "./styles"
import { schemaAddTech } from "../../validators"

export interface IAddModalProps {
    setModalIsOpen: (is: boolean) => void
}

const AddModal = ({setModalIsOpen}: IAddModalProps) => {

    const {addTech} = useContext(TechContext)

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schemaAddTech)
    })

    const modalRef = useRef<HTMLFormElement>(null)

    useEffect(() => {
        const modalClick = (e: MouseEvent) => {
            if (!modalRef.current?.contains(e.target as HTMLFormElement)) {
                setModalIsOpen(false)
            }
        }

        document.addEventListener("mousedown", modalClick)

        return () => {
            document.removeEventListener("mousedown", modalClick)
        }
    })


    return (
        <AddModalDiv>

            <form onSubmit={handleSubmit(addTech)} ref={modalRef} >
                <button className="btn-close" onClick={() => setModalIsOpen(false)} type="button">Cancelar</button>
                <h3>Adicionar Tecnologia</h3>

                <div className="inputArea">
                    <label htmlFor="title">Tech</label>
                    <input type="text" {...register("title")} />
                </div>

                <div className="inputArea">
                    <select {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                </div>

                <button className="submit">Adicionar</button>
            </form>
        </AddModalDiv>
    )
}

export default AddModal