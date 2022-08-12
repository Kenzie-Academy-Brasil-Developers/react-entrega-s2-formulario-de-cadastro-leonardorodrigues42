import TechsDiv, { TechsHeader } from "./styles"
import btnPlus from "./image/ButtonPlus.png"

const TechsContainer = ({children, setModalIsOpen}) => {
    
    return (
        <>
            <TechsHeader className="container-header">
                <h3>Tecnologias</h3>
                <img onClick={() => setModalIsOpen(true)} src={btnPlus} alt="" ></img> 
            </TechsHeader>
            <TechsDiv>
                {children}
            </TechsDiv>
        </>
    )
}

export default TechsContainer