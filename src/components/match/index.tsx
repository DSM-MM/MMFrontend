import Header from "../common/header/index";
import FilterList from "./list/index";

const Match = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Header />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <FilterList />
        </div>
      </div>
    </>
  );
};

export default Match;
