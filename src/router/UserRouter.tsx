import { Route, Routes } from "react-router-dom";
import FindProject from "../components/find";
import Profile from "../components/profile";
//import CreateProject from "../components/create";
import Test from "../components/test/";

const UserRouter = () => {
  return (
    <Routes>
      <Route path="/test" element={<Test />} />
      <Route path="/find" element={<FindProject />} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
  );
};

export default UserRouter;
