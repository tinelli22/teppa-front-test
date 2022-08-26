import * as yup from "yup";

const validationPlayerSchema = yup.object().shape({
    name: yup.string()
    .required("Campo obrigatório")
    .min(4, "Mínimo 4 caracteres"),
    age: yup.number()
    .required("Campo obrigatório"),
    image: yup.mixed()
    .required("Adicione uma imagem"),
    isInjured: yup.boolean()
    .required()
})

export default validationPlayerSchema