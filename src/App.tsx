import React from "react";
import "./App.css";
// import Books from "./Books";
import Todos from "./Todos";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Books /> */}
      <Todos />
    </div>
  );
};

export default App;
