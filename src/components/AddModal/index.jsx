import { useContext, useEffect, useRef } from "react"
import { TechContext } from "../../contexts/TechContext"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import AddModalDiv from "./styles"
import { schemaAddTech } from "../../validators"

const AddModal = ({setModalIsOpen}) => {

    const {addTech} = useContext(TechContext)

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schemaAddTech)
    })

    const modalRef = useRef()

    useEffect(() => {
        const modalClick = (e) => {
            if (!modalRef.current.contains(e.target)) {
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
                    <select name="status" {...register("status")}>
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