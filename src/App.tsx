import { Global } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import UserRouter from "./router/UserRouter";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <BrowserRouter>
        <Global styles={GlobalStyle} />
        <UserRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
