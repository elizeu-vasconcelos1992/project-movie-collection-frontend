import { createContext, ReactNode, useReducer, useState } from "react";
import FormLogin from "../components/FormLogin";
import FormRegister from "../components/FormRegister";
import {
  IUserContext,
  IUserLogin,
  IUserProps,
  IUserRegister,
} from "../interfaces/user";
import api from "../services";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({} as IUserContext);

export default function UserProvider({ children }: IUserProps) {
  const navigate = useNavigate();
  const [Page, dispatch] = useReducer(reducerPage, <FormLogin />);
  const [modal, setModal] = useState<string>("null");
  const [modalError, setModalError] = useState<string>("");
  const [modalSuccess, setModalSuccess] = useState<string>("");

  function reducerPage(state: ReactNode, action: string) {
    switch (action) {
      case "login":
        return <FormLogin />;

      case "register":
        return <FormRegister />;

      default:
        <FormLogin />;
    }
  }

  function apiRegister(data: IUserRegister) {
    setModal("load");
    api
      .post("/users", data)
      .then(res => {
        setModal("success");
        setModalSuccess("Cadastro realizado com sucesso");
        closeModal();
        dispatch("login");
      })
      .catch(err => {
        setModalError(err.response.data.message);
        setModal("error");
        closeModal();
      });
  }

  function apiLogin(data: IUserLogin) {
    setModal("load");
    api
      .post("/login", data)
      .then(res => {
        setModal("success");
        setModalSuccess("Login realizado com sucesso");
        closeModal();
        setTimeout(() => {
          navigate("/dashboard", { replace: true });
        }, 2500);
      })
      .catch(err => {
        setModalError(err.response.data.message);
        setModal("error");
        closeModal();
      });
  }

  function closeModal() {
    setTimeout(() => {
      setModal("null");
    }, 3000);
  }

  return (
    <UserContext.Provider
      value={{
        Page,
        dispatch,
        apiRegister,
        apiLogin,
        modal,
        setModal,
        modalError,
        setModalError,
        modalSuccess,
        setModalSuccess,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
