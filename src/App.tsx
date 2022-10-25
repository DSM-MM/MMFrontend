import { Global } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import UserRouter from "./router/UserRouter";
import { GlobalStyle } from "./styles/global";
import axios from "axios";
import cookie from 'react-cookies'

function App() {

  const accessToken = cookie.load("accessToken");

  if(accessToken)
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

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
