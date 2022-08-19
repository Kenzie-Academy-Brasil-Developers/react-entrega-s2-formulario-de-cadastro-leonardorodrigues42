import { createContext, ReactNode, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import api from "../services/api"
import { Itech } from "./TechContext"

interface IAuthContextProps {
    children: ReactNode
}

export interface IAxiosResponse {
    user: IUser
    token: string
}

export interface IUserRegister {
    bio: string
    contact: string
    course_module: string
    name: string
    email: string
    password: string
}

export interface IUserLogin {
    email: string
    password: string
}

interface User extends IUserRegister {
    avatar_url: string | null
    techs: Itech[] | []
    works: string[] | []
    id: string
    update_at: string
    created_at: string
}

export type IUser = Omit<User, "password">

interface IAuthContext {
    user: IUser
    handleLogout: () => void
    onSubmitLogin: (data: IUserLogin) => void
    onSubmitRegister: (data: IUserRegister) => void
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider = ({children}: IAuthContextProps) => {

    const [user, setUser] = useState<IUser>({} as IUser)

    const navigate = useNavigate()
    
    useEffect(()=> {

        if (!localStorage.getItem("userId")) {
            navigate("/login", {replace: true})
        } else {
            api.get<IUser>(`/users/${localStorage.getItem("userId")}`)
                        .then(resp => setUser(resp.data))
                        .catch(() => localStorage.clear())
        }

    }, [user, navigate])

    const handleLogout = () => {
        localStorage.clear()
        navigate("/login", { replace: true })
    }

    const onSubmitRegister = (data: IUserRegister) => {

        api.post<IAxiosResponse>("/users", data)
            .then(() => navigate("/login", {replace: true}))
            .catch(err => console.error(err))
    }

    const notify = () => {
        toast.success("Login realizado!")
    }

    const onSubmitLogin = (data: IUserLogin) => {

        api.post<IAxiosResponse>("/sessions", data)
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
            handleLogout, 
            onSubmitRegister, 
            onSubmitLogin
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider