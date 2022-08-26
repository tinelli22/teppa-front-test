import * as yup from "yup";

const validationPlayerSchema = yup.object().shape({
    name: yup.string()
    .required("Campo obrigatório")
    .min(4, "Mínimo 4 caracteres")
    .matches(/^[a-zA-Zà-úÀ-Ú\s]*$/, "Somente letras"),
    age: yup.number()
    .required("Campo obrigatório")
    .min(16, "Mínimo 16 anos")
    .max(99, "Máximo 99 anos"),
    image: yup.mixed()
    .required("Adicione uma imagem"),
    isInjured: yup.boolean()
    .required()
})

export default validationPlayerSchema