import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import api from "../services/api"

export const AuthContext = createContext({})

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({})

    const navigate = useNavigate()
   
    useEffect(()=> {

        if (!localStorage.getItem("userId")) {
            navigate("/login", {replace: true})
        } else {
            api.get(`/users/${localStorage.getItem("userId")}`)
                        .then(resp => setUser(resp.data))
                        .catch(() => localStorage.clear())
        }

    }, [user])

    const handleLogout = () => {
        localStorage.clear()
        navigate("/login", { replace: true })
    }

    const onSubmitRegister = (data) => {

        api.post("/users", data)
            .then(res => console.log(res))
            .then(() => navigate("/login", {replace: true}))
            .catch(err => console.log(err))

    }

    const notify = () => {
        toast.success("Login realizado!")
    }

    const onSubmitLogin = (data) => {

        api.post("/sessions", data)
            .then(res => {
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("userId", res.data.user.id)
                setUser(res.data.user)
                notify()
                navigate("/dashboard", {replace: true})
            }).catch(err => console.error(err))

    }

    return (
        <AuthContext.Provider value={{
            user, 
            setUser, 
            handleLogout, 
            onSubmitRegister, 
            onSubmitLogin
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider