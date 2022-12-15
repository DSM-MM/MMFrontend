import { Global } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import UserRouter from "./router/UserRouter";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Global styles={GlobalStyle} />
        <ToastContainer />
        <UserRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
