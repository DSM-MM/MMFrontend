import Header from "../common/header/index";
import List from "./list/index";

const Match = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Header />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <List />
        </div>
      </div>
    </>
  );
};

export default Match;
