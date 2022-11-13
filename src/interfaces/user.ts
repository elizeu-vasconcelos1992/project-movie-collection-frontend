import { Dispatch, ReactNode } from "react";

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
}

export interface IUserContext {
  Page: ReactNode;
  dispatch: Dispatch<string>;
  apiRegister: (data: IUserRegister) => void;
  apiLogin: (data: IUserLogin) => void;
  modal: string;
  setModal: Dispatch<React.SetStateAction<string>>;
  modalError: string;
  setModalError: React.Dispatch<React.SetStateAction<string>>;
  modalSuccess: string;
  setModalSuccess: React.Dispatch<React.SetStateAction<string>>;
}

export interface IUserProps {
  children: ReactNode;
}
