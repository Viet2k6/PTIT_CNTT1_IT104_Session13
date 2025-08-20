import Exercise01 from "./component/Exercise01";
import Exercise02 from "./component/Exercise02";
import Exercise03 from "./component/Exercise03";
import Parent_Comp from "./component/Parent_Comp";
import ParentProduct from "./component/Parent_Bai05";
import ListPost from "./component/ListPost";
import App_Bai07 from "./component/App_Bai07";

function App() {
  return (
    <div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <Exercise01 />
      </div>

      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <Exercise02 />
      </div>

      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <Exercise03 />
      </div>

      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px", fontFamily: "sans-serif" }}>
        <Parent_Comp />
      </div>

      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px", fontFamily: "sans-serif" }}>
        <ParentProduct />
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px"}}>
        <ListPost />
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px",  }}>
        <App_Bai07 />
      </div>
    </div>
  );
}

export default App;
