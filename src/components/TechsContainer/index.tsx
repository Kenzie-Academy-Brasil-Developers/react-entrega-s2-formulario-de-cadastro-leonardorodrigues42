import TechsDiv, { Img, TechsHeader } from "./styles"
import btnPlus from "../../images/ButtonPlus.png"
import { ReactNode } from "react"

interface ITechContainerProps {
    children: ReactNode
    setModalIsOpen: (is: boolean) => void
}

const TechsContainer = ({children, setModalIsOpen}: ITechContainerProps) => {
    
    return (
        <>
            <TechsHeader className="container-header">
                <h3>Tecnologias</h3>
                <Img className="img-addTech" onClick={() => setModalIsOpen(true)} src={btnPlus} alt="" ></Img> 
            </TechsHeader>
            <TechsDiv>
                {children}
            </TechsDiv>
        </>
    )
}

export default TechsContainer