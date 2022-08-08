import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import * as yup from "yup"
import api from "../../services/api"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LoginDiv from "./styles"

const Login = () => {

    const schemaLogin = yup.object().shape({
        email: yup.string().required("Email não informado"),
        password: yup.string().required("Senha não informada")
    })

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schemaLogin)
    })

    const navigate = useNavigate()
    const notify = () => {
        toast("Login realizado!")
    }

    const onSubmit = (data) => {
        
        api.post("/sessions", data)
            .then(res => {
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("userId", res.data.user.id)
                notify()
                navigate("/dashboard", {replace: true})
            }).catch(err => console.error(err))

    }

    return (
        <LoginDiv>
            <h2>Kenzie Hub</h2>

            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <h3>Login</h3>

                <div className="inputArea">
                    <label htmlFor="email">Email</label>
                    <input type="text" {...register("email")} />
                </div>

                <div className="inputArea">
                    <label htmlFor="password">Senha</label>
                    <input type="password" {...register("password")} />
                </div>

                <button className="submit">Entrar</button>

                <span>Ainda não possui conta?</span>

                <button type="button" onClick={() => navigate("/register", {replace : true})}>Cadastrar</button>
            </form>

        </LoginDiv>
    )
}

export default Login