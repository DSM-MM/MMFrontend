import { Route, Routes } from "react-router-dom";
import Test from "../components/test/index";

const UserRouter = () => {
  return (
    <Routes>
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};

export default UserRouter;
