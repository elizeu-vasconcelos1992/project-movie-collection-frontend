import "./App.css";
import GlobalProvider from "./context";
import Routing from "./routes";
import { GlobalStyle } from "./style/global";

function App() {
  return (
    <>
      <GlobalProvider>
        <GlobalStyle />
        <div className='App'>
          <Routing />
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
