import { Route, Routes } from "react-router-dom";
import FindProject from "../components/find";
import CreateProject from "../components/create";
import Test from "../components/test/";
import ViewProject from "../components/view";

const UserRouter = () => {
  return (
    <Routes>
      <Route path="/test" element={<Test />} />
      <Route path="/find" element={<FindProject />} />
      <Route path="/find/create" element={<CreateProject />} />
      <Route path="/find/:id" element={<ViewProject />} />
    </Routes>
  );
};

export default UserRouter;
