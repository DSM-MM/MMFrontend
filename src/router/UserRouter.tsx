import { Route, Routes } from "react-router-dom";
import FindProject from "../components/find";
import Test from "../components/test/";

const UserRouter = () => {
  return (
    <Routes>
      <Route path="/test" element={<Test />} />
      <Route path="/find" element={<FindProject />} />
    </Routes>
  );
};

export default UserRouter;
