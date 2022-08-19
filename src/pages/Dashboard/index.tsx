import { useContext, useEffect, useState } from "react"
import AddModal from "../../components/AddModal"
import Tech from "../../components/Tech"
import TechsContainer from "../../components/TechsContainer"
import { AuthContext } from "../../contexts/AuthContext"
import TechProvider, { Itech } from "../../contexts/TechContext"
import DashboardDiv from "./styles"

const Dashboard = () => {

    const {user, handleLogout} = useContext(AuthContext)

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const [techs, setTechs] = useState<Itech[]>(user.techs)


    useEffect(()=> {
        const addTech = () => setTechs(user.techs)
        addTech()
    })

    return (
        <TechProvider>

                <DashboardDiv>
                    {modalIsOpen === true && (<AddModal setModalIsOpen={setModalIsOpen}/>)}
                    
                    <div className="dashboard-header">
                        <h2>Kenzie Hub</h2>
                        <button onClick={handleLogout} >Sair</button>
                    </div>
                    <div className="user-infos">
                        <h3>Olá, {user.name}</h3>
                        <span>{user.course_module}</span>
                    </div>
                    <div className="dashboard-infos">
                        <TechsContainer setModalIsOpen={setModalIsOpen}>
                            {
                                techs && techs.map(tech => {
                                    return <Tech key={tech.id} name={tech.title} id={tech.id} experience={tech.status} setModalIsOpen={setModalIsOpen}/>
                                })
                            }
                            
                        </TechsContainer>
                    </div>    
                </DashboardDiv>


        </TechProvider>
    )
}

export default Dashboard