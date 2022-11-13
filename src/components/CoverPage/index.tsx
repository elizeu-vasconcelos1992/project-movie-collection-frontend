import { StyledCoverPage } from "./style";
import DesignCoverPage from "../../assets/coverpage.gif";

export default function CoverPage() {
  return (
    <StyledCoverPage>
      <img
        src={DesignCoverPage}
        alt='Design de apresentação da aplicação movies collection'
      />
      <h2>
        Vamos te ajudar a organizar seus filmes. Entre e adicione filmes a uma
        lista, faça edições e crie categorias.
      </h2>
    </StyledCoverPage>
  );
}
