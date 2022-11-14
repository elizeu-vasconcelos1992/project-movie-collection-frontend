import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledFormCreateMovie } from "./style";
import { schemaCreateMovie } from "../../schemas";
import { ICreateMovie } from "../../interfaces/movie";
import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";

export default function FormCreateMovie() {
  const { createMovie } = useContext(MoviesContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateMovie>({
    resolver: yupResolver(schemaCreateMovie),
  });

  function formCreateMovie(data: ICreateMovie) {
    createMovie(data);
  }

  return (
    <StyledFormCreateMovie onSubmit={handleSubmit(formCreateMovie)}>
      <h3>Adicionar filme</h3>
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

      <label>
        Categoria
        <input
          type='text'
          placeholder='Ex: assistir, comédia, terror, pesquisar'
          {...register("category")}
        />
        <p>{errors.category?.message}</p>
      </label>

      <button type='submit'>Adicionar filme</button>
    </StyledFormCreateMovie>
  );
}
