import { Route, Routes } from "react-router-dom";
import FindProject from "../components/find";
<<<<<<< HEAD
import Match from "../components/match/index";
import Introduce from "../components/introduce/index";
import Main from "../components/main/index";
import Test from "../components/test";
import NotFound from "../pages/404";
=======
import CreateProject from "../components/create";
import Test from "../components/test/";
import ViewProject from "../components/view";
>>>>>>> findProject

const UserRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="/test" element={<Test />} />
      <Route path="/find" element={<FindProject />} />
<<<<<<< HEAD
      <Route path="/mento" element={<Match />} />
      <Route path="/mento/:job/:name" element={<Introduce />} />
      <Route path="/main" element={<Main />} />
      <Route path="/*" element={<NotFound />} />
=======
      <Route path="/find/create" element={<CreateProject />} />
      <Route path="/find/:id" element={<ViewProject />} />
>>>>>>> findProject
    </Routes>
  );
};

export default UserRouter;
