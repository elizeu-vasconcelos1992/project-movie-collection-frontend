import { ReactNode } from "react";
import UserProvider from "./UserContext";

interface IGlobalProvider {
  children: ReactNode;
}

function GlobalProvider({ children }: IGlobalProvider) {
  return <UserProvider> {children}</UserProvider>;
}

export default GlobalProvider;
