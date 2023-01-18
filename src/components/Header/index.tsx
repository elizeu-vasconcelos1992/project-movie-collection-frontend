import { StyledHeader } from "./style";
import Logo from "../../assets/logo.png";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function Header() {
  const { logout, user } = useContext(UserContext);
  return (
    <StyledHeader>
      <h3>Seja bem-vindo, {user.name?.split(" ")[0]}</h3>
      <img src={Logo} alt='logomarca da aplicação movies collection' />
      <button onClick={() => logout()}>Logout</button>
    </StyledHeader>
  );
}
