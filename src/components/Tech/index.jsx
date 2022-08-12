import { useContext } from "react"
import { TechContext } from "../../contexts/TechContext"
import TechDiv from "./styles"

const Tech = ({name, experience, id, setModalIsOpen}) => {

    const { deleteTech } = useContext(TechContext)
    return (
        <TechDiv className="tech-container">
            <span className="tech-name"><b>{name}</b></span>
            <div className="container-right">
                <span className="experience">{experience}</span>
                <button onClick={() => deleteTech(id)} className="trash">🗑</button>
            </div>        
        </TechDiv>
    )
}

export default Tech