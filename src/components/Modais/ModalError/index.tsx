import { Container } from "./styles";
import { HiEmojiSad } from "react-icons/hi";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

function ModalError() {
  const { modalError } = useContext(UserContext);

  return (
    <Container>
      <div>
        <HiEmojiSad />
        <h3>
          {modalError === "This email is already registered" &&
            "Email já está registrado"}
          {modalError === "Invalid user or password" &&
            "Usuário ou senha inválido"}
        </h3>
      </div>
    </Container>
  );
}

export default ModalError;
