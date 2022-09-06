import { Route, Routes } from "react-router-dom";
import Main from "../components/main/index";
import Test from "../components/test";

const UserRouter = () => {
  return (
    <Routes>
      <Route path="/test" element={<Test />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
};

export default UserRouter;
