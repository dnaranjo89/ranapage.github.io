import "./App.css";
import Todo from "./Todo";
import Home from "./Home";

import { HashRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      aaa2
      <HashRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
