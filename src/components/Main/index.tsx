import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import ControllerApp from "../ControllerApp";
import ModalCreateMovie from "../Modais/ModalCreateMovie";
import ModalEditMovie from "../Modais/ModalEditMovie";
import MovieList from "../MovieList";
import { StyledMain } from "./style";

export default function Main() {
  const { modalCreateMovie, modalEditMovie } = useContext(MoviesContext);
  return (
    <StyledMain>
      <ControllerApp />
      <MovieList />
      {modalCreateMovie && <ModalCreateMovie />}
      {modalEditMovie && <ModalEditMovie />}
    </StyledMain>
  );
}
