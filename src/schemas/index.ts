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

export const schemaCreateMovie = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório.")
    .min(3, "O nome dever no mínino três caracteres")
    .max(50, "Máximo permitido são 50 caracteres"),
  image: yup.string().required("Imagem obrigatória"),
  release: yup.string().required("Data obrigatória"),
  sinopse: yup
    .string()
    .required("Sinopse obrigatória")
    .max(400, "Máximo permitido são 400 caracteres"),
  category: yup.string().required("Categoria Obrigatória"),
});

export const schemaEditMovie = yup.object().shape({
  name: yup.string().max(50, "Máximo permitido são 50 caracteres"),
  image: yup.string().max(120, "Máximo permitido são 120 caracteres"),
  release: yup.string(),
  sinopse: yup.string().max(400, "Máximo permitido são 400 caracteres"),
});
