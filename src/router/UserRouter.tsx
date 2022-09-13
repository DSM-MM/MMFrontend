import { Route, Routes } from "react-router-dom";
import FindProject from "../components/find";
import Match from "../components/match/index";
import Introduce from "../components/introduce/index";
import Main from "../components/main/index";
import Test from "../components/test";

const UserRouter = () => {
  return (
    <Routes>
      <Route path="/test" element={<Test />} />
      <Route path="/find" element={<FindProject />} />
      <Route path="/mento" element={<Match />} />
      <Route path="/mento/:job/:name" element={<Introduce />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}; 

export default UserRouter;
