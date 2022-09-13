import { Route, Routes } from "react-router-dom";
import FindProject from "../components/find";
import CreateProject from "../components/find/create";
import Test from "../components/test/";

const UserRouter = () => {
  return (
    <Routes>
      <Route path="/test" element={<Test />} />
      <Route path="/find" element={<FindProject />} />
      <Route path="/find/create" element={<CreateProject />} />
    </Routes>
  );
};

export default UserRouter;
