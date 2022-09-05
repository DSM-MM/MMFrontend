import { Route, Routes } from "react-router-dom";
import Match from "../components/match/index";
import Introduce from "../components/introduce/index";
import Test from "../components/test";

const UserRouter = () => {
  return (
    <Routes>
      <Route path="/test" element={<Test />} />
      <Route path="/mento" element={<Match />} />
      <Route path="/mento/:job/:name" element={<Introduce />} />
    </Routes>
  );
};

export default UserRouter;
