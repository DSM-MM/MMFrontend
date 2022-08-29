import Header from "../common/header/index";
import List from "./list/index";

const Match = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Header />
        <div
          style={{
            width: "90.4%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <List />
        </div>
      </div>
    </>
  );
};

export default Match;
