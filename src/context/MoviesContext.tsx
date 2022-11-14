import { createContext, useContext, useState } from "react";
import {
  ICreateMovie,
  IEditMovie,
  IMoviesContext,
  IMoviesProps,
} from "../interfaces/movie";
import api from "../services";
import { UserContext } from "./UserContext";

export const MoviesContext = createContext({} as IMoviesContext);

export default function MoviesProvider({ children }: IMoviesProps) {
  const {
    control,
    setControl,
    setModal,
    setModalSuccess,
    setModalError,
    closeModal,
  } = useContext(UserContext);
  const [modalCreateMovie, setModalCreateMovie] = useState<boolean>(false);
  const [modalEditMovie, setModalEditMovie] = useState<boolean>(false);
  const [movieId, setMovieId] = useState<string>("");
  const [category, setCategory] = useState<string>("all");

  function createMovie(data: ICreateMovie) {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("userId");

    if (token) {
      setModal("load");
      api
        .post(`/users/movies/${id}`, data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(res => {
          setModal("success");
          setModalSuccess("Filme criado com sucesso");
          closeModal();
          setModalCreateMovie(false);
          setControl(!control);
        })
        .catch(err => {
          setModalError(err.response.data.message);
          setModal("error");
          closeModal();
        });
    }
  }

  function editMovie(data: IEditMovie) {
    const token = localStorage.getItem("token");

    if (token) {
      setModal("load");
      api
        .patch(`/users/movies/${movieId}`, data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(res => {
          setModal("success");
          setModalSuccess("Filme editado com sucesso");
          closeModal();
          setModalEditMovie(false);
          setControl(!control);
        })
        .catch(err => {
          setModalError(err.response.data.message);
          setModal("error");
          closeModal();
        });
    }
  }

  function deleteMovie() {
    const token = localStorage.getItem("token");

    if (token) {
      setModal("load");
      api
        .delete(`/users/movies/${movieId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(res => {
          setModal("success");
          setModalSuccess("Filme deletado com sucesso");
          closeModal();
          setModalEditMovie(false);
          setControl(!control);
        })
        .catch(err => {
          setModalError(err.response.data.message);
          setModal("error");
          closeModal();
        });
    }
  }

  return (
    <MoviesContext.Provider
      value={{
        modalCreateMovie,
        setModalCreateMovie,
        modalEditMovie,
        setModalEditMovie,
        createMovie,
        movieId,
        setMovieId,
        editMovie,
        deleteMovie,
        category,
        setCategory,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
