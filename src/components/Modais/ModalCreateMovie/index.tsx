import FormCreateMovie from "../../FormCreateMovie";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { StyledModalCreateMovie } from "./style";
import { MoviesContext } from "../../../context/MoviesContext";
import { useContext } from "react";

export default function ModalCreateMovie() {
  const { setModalCreateMovie } = useContext(MoviesContext);

  return (
    <StyledModalCreateMovie>
      <div className='div-container'>
        <div className='div-header'>
          <AiOutlineCloseCircle
            size={22}
            onClick={() => setModalCreateMovie(false)}
          />
        </div>
        <FormCreateMovie />
      </div>
    </StyledModalCreateMovie>
  );
}
