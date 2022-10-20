import { Global } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import UserRouter from "./router/UserRouter";
import { GlobalStyle } from "./styles/global";
import axios from "axios";
import cookie from 'react-cookies'

function App() {

  axios.defaults.baseURL = "https://ec2-43-200-178-101.ap-northeast-2.compute.amazonaws.com";
  axios.defaults.headers.common['Authorization'] = `Bearer ${cookie.load("accessToken")}`;

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
