import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Match from "../components/match/index";
import Test from "../components/test/index";
import Introduce from "../components/introduce/index";
=======
import Test from "../components/test";
>>>>>>> main

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
