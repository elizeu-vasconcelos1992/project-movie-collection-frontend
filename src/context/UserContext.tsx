import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import FormLogin from "../components/FormLogin";
import FormRegister from "../components/FormRegister";
import {
  IUser,
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
  const [user, setUser] = useState<IUser>({} as IUser);
  const [control, setControl] = useState<boolean>(false);

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
        setModalSuccess("Cadastro realizado com sucesso, faça Login");
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
        }, 3100);
        localStorage.clear();
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("userId", res.data.data.id);
        setControl(!control);
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

  useEffect(() => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("userId");

    if (token) {
      api
        .get(`/users/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(res => {
          setUser(res.data.data);
        })
        .catch(err => localStorage.clear());
    }
  }, [control]);

  function logout() {
    setModal("success");
    setModalSuccess("Até a próxima");
    closeModal();
    setTimeout(() => {
      localStorage.clear();
      navigate("/", { replace: true });
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
        closeModal,
        logout,
        user,
        control,
        setControl,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
