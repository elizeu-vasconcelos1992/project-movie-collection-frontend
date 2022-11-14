import { Dispatch, ReactNode } from "react";
import { ICategory, IMovie } from "./movie";

export interface IUser {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  userMovies: IMovie[];
  userMoviesCategories: ICategory[];
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserResponseLogin {
  id: string;
  token: string;
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
  closeModal: () => void;
  setControl: React.Dispatch<React.SetStateAction<boolean>>;
  control: boolean;
  logout: () => void;
  user: IUser;
}

export interface IUserProps {
  children: ReactNode;
}
