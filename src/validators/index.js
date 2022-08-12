import * as yup from "yup"


export const schemaForm = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório")
            .email("Email inválido"),
    password: yup.string().required("Senha obrigatória")
            .min(8, "Mínimo de 8 caracteres"),
    bio: yup.string(),
    contact: yup.string(),
    course_module: yup.string()
})

export const schemaLogin = yup.object().shape({
    email: yup.string().required("Email não informado"),
    password: yup.string().required("Senha não informada")
})

export const schemaAddTech = yup.object().shape({
    title: yup.string().required("Informe um o nome da tecnologia"),
    status: yup.string().required("Adicione ")
})