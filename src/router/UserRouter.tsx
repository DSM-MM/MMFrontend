import { Route, Routes } from "react-router-dom";
import FindProject from "../components/find";
import Match from "../components/match/index";
import Introduce from "../components/introduce/index";
import Main from "../components/main/index";
import Test from "../components/test";
import NotFound from "../pages/404";

const UserRouter = () => {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Test />} />
=======
      <Route path="/test" element={<Test />} />
      <Route path="/find" element={<FindProject />} />
>>>>>>> main
      <Route path="/mento" element={<Match />} />
      <Route path="/mento/:job/:name" element={<Introduce />} />
      <Route path="/main" element={<Main />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default UserRouter;
