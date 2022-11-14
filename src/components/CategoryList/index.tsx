import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import { UserContext } from "../../context/UserContext";
import { StyledCategoryList } from "./style";

export default function CategoryList() {
  const { user, control, setControl } = useContext(UserContext);
  const { setCategory } = useContext(MoviesContext);

  if (user.userMoviesCategories?.length > 0) {
    return (
      <StyledCategoryList>
        <button
          onClick={() => {
            setCategory("all");
            setControl(!control);
          }}
        >
          Todos
        </button>
        {user.userMoviesCategories?.length > 0 &&
          user.userMoviesCategories?.map(category => (
            <button
              key={category.id}
              onClick={() => {
                setCategory(category.name);
                setControl(!control);
              }}
            >
              {category.name}
            </button>
          ))}
      </StyledCategoryList>
    );
  } else {
    return (
      <StyledCategoryList>
        <h4>Nenhuma categoria listada, adicione um filme</h4>
      </StyledCategoryList>
    );
  }
}
