import CategoryList from "../CategoryList";
import MovieAdd from "../MovieAdd";
import { StyledControllerApp } from "./style";

export default function ControllerApp() {
  return (
    <StyledControllerApp>
      <MovieAdd />
      <CategoryList />
    </StyledControllerApp>
  );
}
