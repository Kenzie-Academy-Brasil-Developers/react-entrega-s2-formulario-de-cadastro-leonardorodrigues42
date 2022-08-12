import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import RegisterDiv from "./styles"
import { schemaForm } from "../../validators"

const Register = () => {
  
    const { onSubmitRegister } = useContext(AuthContext)

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schemaForm)
    })

    return (
        <RegisterDiv>

            <div className="container-title">
                <h2>Kenzie Hub</h2>
                <button type="button"><Link to={"/login"} >Voltar</Link></button>
            </div>

            <form onSubmit={handleSubmit(onSubmitRegister)} action="">

                <div className="container-register">
                    <h3>Crie sua conta</h3>
                    <span>Rápido e grátis, vamos nessa</span>
                </div>

                <div className="inputArea">
                    <label htmlFor="name">Nome</label>
                    <input type="text" {...register("name")}/>
                </div>

                <div className="inputArea">
                    <label htmlFor="email">Email</label>
                    <input type="text" {...register("email")}/>
                </div>

                <div className="inputArea">
                    <label htmlFor="password">Senha</label>
                    <input type="password" {...register("password")}/>
                </div>

                <div className="inputArea">
                    <label htmlFor="bio">Bio</label>
                    <input type="text" {...register("bio")}/>
                </div>

                <div className="inputArea">
                    <label htmlFor="contact">Contato</label>
                    <input type="text" {...register("contact")}/>
                </div>

                <div className="inputArea">
                    <label htmlFor="course_module">Selecionar módulo</label>
                    <select name="course_module" {...register("course_module")}>
                        <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro</option>
                        <option value="Segundo módulo (Frontend Avançado)">Segundo</option>
                        <option value="Terceiro Módulo (Introdução ao Backend)">Terceiro</option>
                        <option value="Quarto Módulo (Backend Avançado)">Quarto</option>
                    </select>
                </div>

                <button type="submit">Cadastrar</button>
                
            </form>
        </RegisterDiv>
    )
}

export default Register