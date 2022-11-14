import { AiOutlineCloseCircle } from "react-icons/ai";
import { StyledModalEditMovie } from "./style";
import FormEditMovie from "../../FormEditMovie";
import { MoviesContext } from "../../../context/MoviesContext";
import { useContext } from "react";

export default function ModalEditMovie() {
  const { setModalEditMovie } = useContext(MoviesContext);

  return (
    <StyledModalEditMovie>
      <div className='div-container'>
        <div className='div-header'>
          <AiOutlineCloseCircle
            size={22}
            onClick={() => setModalEditMovie(false)}
          />
        </div>
        <FormEditMovie />
      </div>
    </StyledModalEditMovie>
  );
}
