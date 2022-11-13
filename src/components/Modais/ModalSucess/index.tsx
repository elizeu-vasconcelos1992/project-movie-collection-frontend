import { Container } from "./styles";
import { FaGrinWink } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

function ModalSucess() {
  const { modalSuccess } = useContext(UserContext);

  return (
    <Container>
      <div>
        <FaGrinWink />
        <h3>{modalSuccess}</h3>
      </div>
    </Container>
  );
}

export default ModalSucess;
