import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledFormRegister } from "./style";
import { ImEyePlus } from "react-icons/im";
import { ImEyeMinus } from "react-icons/im";
import { IUserRegister } from "../../interfaces/user";
import { schemaRegister } from "../../schemas";
import { UserContext } from "../../context/UserContext";

export default function FormRegister() {
  const [inputType, setInputType] = useState<string>("password");
  const { dispatch, apiRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(schemaRegister),
  });

  function formRegister(data: IUserRegister) {
    apiRegister(data);
  }

  return (
    <StyledFormRegister onSubmit={handleSubmit(formRegister)}>
      <h2>Cadastro</h2>
      <label>
        Name
        <input type='text' {...register("name")} />
        <p>{errors.name?.message}</p>
      </label>

      <label>
        Email
        <input type='email' {...register("email")} />
        <p>{errors.email?.message}</p>
      </label>

      <label>
        Senha
        <div className='div-password'>
          <input
            type={inputType}
            className='input-password'
            {...register("password")}
          />
          {inputType === "password" ? (
            <ImEyePlus size={20} onClick={() => setInputType("text")} />
          ) : (
            <ImEyeMinus size={20} onClick={() => setInputType("password")} />
          )}
        </div>
        <p>{errors.password?.message}</p>
      </label>
      <button type='submit'>Cadastrar</button>

      <p className='direct-to-login'>
        Voltar para o{" "}
        <span className='button-register' onClick={e => dispatch("login")}>
          Login
        </span>
      </p>
    </StyledFormRegister>
  );
}
