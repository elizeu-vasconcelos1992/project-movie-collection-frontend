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
        <h3>{modalError}</h3>
      </div>
    </Container>
  );
}

export default ModalError;
