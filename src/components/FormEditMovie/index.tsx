import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledFormEditMovie } from "./style";
import { schemaEditMovie } from "../../schemas";
import { IEditMovie } from "../../interfaces/movie";
import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";

export default function FormEditMovie() {
  const { editMovie, deleteMovie } = useContext(MoviesContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditMovie>({
    resolver: yupResolver(schemaEditMovie),
  });

  function formEditMovie(data: IEditMovie) {
    editMovie(data);
  }

  return (
    <StyledFormEditMovie onSubmit={handleSubmit(formEditMovie)}>
      <h3>Editar filme</h3>
      <label>
        Nome
        <input type='text' placeholder='Nome do filme' {...register("name")} />
        <p>{errors.name?.message}</p>
      </label>

      <label>
        Url imagem
        <input
          type='url'
          placeholder='https://example.com.jpg'
          pattern='https://.*'
          {...register("image")}
        />
        <p>{errors.image?.message}</p>
      </label>

      <label>
        Data de lançamento
        <input type='date' {...register("release")} />
        <p>{errors.release?.message}</p>
      </label>

      <label>
        Sinopse
        <input
          type='text'
          placeholder='Breve descrição do filme'
          {...register("sinopse")}
        />
        <p>{errors.sinopse?.message}</p>
      </label>

      <button type='submit'>Editar filme</button>
      <button
        className='button-delete'
        onClick={e => {
          e.preventDefault();
          deleteMovie();
        }}
      >
        Deletar filme
      </button>
    </StyledFormEditMovie>
  );
}
