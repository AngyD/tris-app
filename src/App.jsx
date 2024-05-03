import Board from "./components/Board";
import Title from "./components/Title";

import "./App.css";

const App = () => {
  return (
    <div className="tris-grid">
      <Title title="TRIS APP REACT" />
      <Board />
    </div>
  );
};

export default App;
