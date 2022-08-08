import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../services/api"
import DashboardDiv from "./styles"

const Dashboard = () => {

    const [user, setUser] = useState({})

    const navigate = useNavigate()
   
    
    useEffect(()=> {

        if (!localStorage.getItem("userId")) {
            navigate("/login", {replace: true})
        } else {
            api.get(`/users/${localStorage.getItem("userId")}`)
                        .then(resp => setUser(resp.data))
        }

    })

    const handleLogout = () => {
        localStorage.clear()
    }

    return (
        <DashboardDiv>
            <div className="dashboard-header">
                <h2>Kenzie Hub</h2>
                <button onClick={handleLogout} >Sair</button>
            </div>
            <hr />
            <div className="user-infos">
                <h3>Olá, {user.name}</h3>
                <span>{user.course_module}</span>
            </div>
            <hr />
            <div className="dashboard-infos">
                <h3>Que pena! Estamos em desenvolvimento :&#40;</h3>
                <span>Nossa aplicação está em desenvolvimento, em breve teremos novidades</span>
            </div>    

        </DashboardDiv>

    )
}

export default Dashboard