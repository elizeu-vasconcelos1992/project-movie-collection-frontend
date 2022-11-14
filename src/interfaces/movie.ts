import { ReactNode } from "react";

export interface ICategory {
  id: string;
  name: string;
}

export interface IMovie {
  id: string;
  name: string;
  image: string;
  release: string;
  sinopse: string;
  createdAt: string;
  updatedAt: string;
  category: ICategory;
}

export interface ICreateMovie {
  name: string;
  image: string;
  release: string;
  sinopse: string;
  category: string;
}

export interface IEditMovie {
  name?: string;
  image?: string;
  release?: string;
  sinopse?: string;
}

export interface IMoviesContext {
  modalCreateMovie: boolean;
  setModalCreateMovie: React.Dispatch<React.SetStateAction<boolean>>;
  modalEditMovie: boolean;
  setModalEditMovie: React.Dispatch<React.SetStateAction<boolean>>;
  movieId: string;
  setMovieId: React.Dispatch<React.SetStateAction<string>>;
  createMovie: (data: ICreateMovie) => void;
  editMovie: (data: IEditMovie) => void;
  deleteMovie: () => void;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  category: string;
}

export interface IMoviesProps {
  children: ReactNode;
}
