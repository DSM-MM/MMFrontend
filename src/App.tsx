import { Global } from "@emotion/react";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import UserRouter from "./router/UserRouter";
import { GlobalStyle } from "./styles/global";
import axios from "axios";
import cookie from 'react-cookies'

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  useEffect(() => {
    if (sessionStorage.getItem("user_id") === null) {
      console.log(isLogin);
    } else {
      setIsLogin(true);
      console.log(isLogin);
    }
  }, [isLogin]);
  return (
    <>
      <BrowserRouter>
        <Global styles={GlobalStyle} />
        <UserRouter isLogin={isLogin} />
      </BrowserRouter>
    </>
  );
}

export default App;
