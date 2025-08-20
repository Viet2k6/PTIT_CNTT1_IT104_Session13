import { useState } from "react";

function App_Bai07() {
  const [appState, setAppState] = useState({
    theme: "Sáng",
    language: "Tiếng Anh",
  });

  const toggleState = () => {
    if (appState.theme === "Sáng") {
      setAppState({ theme: "Tối", language: "Tiếng Việt" });
    } else {
      setAppState({ theme: "Sáng", language: "Tiếng Anh" });
    }
  };

  const backgroundColor = appState.theme === "Sáng" ? "#ffffff" : "#333333";
  const color = appState.theme === "Sáng" ? "#000000" : "#ffffff";

  return (
    <div style={{padding: "10px", backgroundColor,color,minHeight: "100vh",fontFamily: "sans-serif",fontWeight: "bold"}}>
      <h2>Trạng thái ứng dụng</h2>
      <p>Chủ đề: {appState.theme}</p>
      <p>Ngôn ngữ: {appState.language}</p>
      <button onClick={toggleState} style={{ marginTop: "10px" }}>
        Chuyển trạng thái
      </button>
    </div>
  );
}

export default App_Bai07;
