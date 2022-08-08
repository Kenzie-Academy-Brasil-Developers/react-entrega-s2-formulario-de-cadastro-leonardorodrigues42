import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import api from "../../services/api"
import { Link, useNavigate } from "react-router-dom"
import RegisterDiv from "./styles"

const Register = () => {

    const schemaForm = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        email: yup.string().required("Email obrigatório")
                .email("Email inválido"),
        password: yup.string().required("Senha obrigatória")
                .min(8, "Mínimo de 8 caracteres"),
        bio: yup.string(),
        contact: yup.string(),
        course_module: yup.string()
    })

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schemaForm)
    })

    
    const navigate = useNavigate()

    const onSubmit = (data) => {

        api.post("/users", data)
            .then(res => console.log(res))
            .then(() => navigate("/login", {replace: true}))
            .catch(err => console.log(err))

    }

    return (
        <RegisterDiv>

            <div className="container-title">
                <h2>Kenzie Hub</h2>
                <button type="button"><Link to={"/login"} >Voltar</Link></button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} action="">

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