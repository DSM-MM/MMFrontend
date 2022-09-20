import { Route, Routes } from "react-router-dom";
import FindProject from "../components/find";
<<<<<<< HEAD
import Match from "../components/match/index";
import Introduce from "../components/introduce/index";
import Main from "../components/main/index";
import Test from "../components/test";
import NotFound from "../pages/404";
import CreateProject from "../components/create";
=======
import Profile from "../components/profile";
import CreateProject from "../components/create";
import Test from "../components/test/";
>>>>>>> changeSetting
import ViewProject from "../components/view";

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
      <Route path="/profile" element={<Profile/>} />
>>>>>>> changeSetting
      <Route path="/find/create" element={<CreateProject />} />
      <Route path="/find/:id" element={<ViewProject />} />
    </Routes>
  );
};

export default UserRouter;
