import { Route, Routes } from "react-router-dom";
import Match from "../components/match/index";
import Test from "../components/test/index";

const UserRouter = () => {
  return (
    <Routes>
      <Route path="/test" element={<Test />} />
      <Route path="/mento" element={<Match />} />
    </Routes>
  );
};

export default UserRouter;
