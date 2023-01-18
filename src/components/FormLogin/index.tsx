import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledFormLogin } from "./style";
import { ImEyePlus } from "react-icons/im";
import { ImEyeMinus } from "react-icons/im";
import { IUserLogin } from "../../interfaces/user";
import { schemaLogin } from "../../schemas";
import { UserContext } from "../../context/UserContext";

export default function FormLogin() {
  const [inputType, setInputType] = useState<string>("password");
  const { dispatch, apiLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(schemaLogin),
  });

  function formLogin(data: IUserLogin) {
    apiLogin(data);
  }

  return (
    <StyledFormLogin onSubmit={handleSubmit(formLogin)}>
      <h2>Login</h2>
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
      <button type='submit'>Entrar</button>

      <p className='direct-to-register'>
        Ainda não possui uma Conta? Então,{" "}
        <span className='button-register' onClick={e => dispatch("register")}>
          Cadastre-se
        </span>
      </p>
    </StyledFormLogin>
  );
}
