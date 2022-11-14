import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import { StyledMovieAdd } from "./style";

export default function MovieAdd() {
  const { setModalCreateMovie } = useContext(MoviesContext);

  return (
    <StyledMovieAdd>
      <button onClick={() => setModalCreateMovie(true)}>Adicionar filme</button>
    </StyledMovieAdd>
  );
}
