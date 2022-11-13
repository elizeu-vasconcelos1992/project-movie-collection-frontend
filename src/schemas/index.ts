import * as yup from "yup";

export const schemaLogin = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(4, "A senha deve ter no mínimo quatro caracteres"),
});

export const schemaRegister = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório.")
    .min(3, "O nome dever no mínino três caracteres"),
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(4, "A senha deve ter no mínimo quatro caracteres"),
});
