import { Route, Routes } from "react-router-dom";
import Editor from "./Editor";
import Home from "./Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />,
      <Route path="/editor/" element={<Editor />} />
    </Routes>
  );
};

export default App;
