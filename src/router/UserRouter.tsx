import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Main from "../components/main/index";
import Test from "../components/test/index";
=======
import Test from "../components/test";
>>>>>>> main

const UserRouter = () => {
  return (
    <Routes>
      <Route path="/test" element={<Test />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
};

export default UserRouter;
