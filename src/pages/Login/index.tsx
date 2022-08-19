import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { AuthContext, IUserLogin } from "../../contexts/AuthContext"
import { useContext } from "react"
import { schemaLogin } from "../../validators"
import 'react-toastify/dist/ReactToastify.css'
import LoginDiv from "./styles"



const Login = () => {

    const { register, handleSubmit } = useForm<IUserLogin>({
        resolver: yupResolver(schemaLogin)
    })

    const navigate = useNavigate()

    const { onSubmitLogin } = useContext(AuthContext)

    return (
        <LoginDiv>
            
            <h2>Kenzie Hub</h2>

            <form action="" onSubmit={handleSubmit(onSubmitLogin)}>
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