import { ReactNode } from "react";
import MoviesProvider from "./MoviesContext";
import UserProvider from "./UserContext";

interface IGlobalProvider {
  children: ReactNode;
}

function GlobalProvider({ children }: IGlobalProvider) {
  return (
    <UserProvider>
      <MoviesProvider>{children}</MoviesProvider>
    </UserProvider>
  );
}

export default GlobalProvider;
