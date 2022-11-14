import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import { UserContext } from "../../context/UserContext";
import { StyledMovieCard } from "./style";

export default function MovieCard() {
  const { setModalEditMovie, setMovieId, category } = useContext(MoviesContext);
  const { user } = useContext(UserContext);

  return (
    <>
      {user.userMovies?.length > 0 ? (
        category === "all" ? (
          user.userMovies?.map(movie => (
            <StyledMovieCard key={movie.id}>
              <div className='front-card'>
                <h3>{movie.name}</h3>
                <img src={movie.image} alt={`Imagem do filme ${movie.name}`} />
              </div>
              <div className='back-card'>
                <p className='name'>
                  <strong>Nome:</strong> {movie.name}
                </p>
                <p>
                  <strong>Lançamento:</strong>{" "}
                  {`${movie.release.split("-")[2]}/${
                    movie.release.split("-")[1]
                  }/${movie.release.split("-")[0]}`}
                </p>
                <p>
                  <strong>Categoria:</strong> {movie.category.name}
                </p>
                <p className='sinopse'>
                  <strong>Sinopse:</strong> {movie.sinopse}
                </p>
                <button
                  onClick={() => {
                    setModalEditMovie(true);
                    setMovieId(movie.id);
                  }}
                >
                  Editar filme
                </button>
              </div>
            </StyledMovieCard>
          ))
        ) : (
          user.userMovies?.map(
            movie =>
              movie.category.name === category && (
                <StyledMovieCard key={movie.id}>
                  <div className='front-card'>
                    <h3>{movie.name}</h3>
                    <img
                      src={movie.image}
                      alt={`Imagem do filme ${movie.name}`}
                    />
                  </div>
                  <div className='back-card'>
                    <p className='name'>
                      <strong>Nome:</strong> {movie.name}
                    </p>
                    <p>
                      <strong>Lançamento:</strong>{" "}
                      {`${movie.release.split("-")[2]}/${
                        movie.release.split("-")[1]
                      }/${movie.release.split("-")[0]}`}
                    </p>
                    <p>
                      <strong>Categoria:</strong> {movie.category.name}
                    </p>
                    <p className='sinopse'>
                      <strong>Sinopse:</strong> {movie.sinopse}
                    </p>
                    <button
                      onClick={() => {
                        setModalEditMovie(true);
                        setMovieId(movie.id);
                      }}
                    >
                      Editar filme
                    </button>
                  </div>
                </StyledMovieCard>
              )
          )
        )
      ) : (
        <StyledMovieCard>Você ainda não cadastrou nenhum filme</StyledMovieCard>
      )}
    </>
  );
}
