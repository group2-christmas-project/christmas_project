import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import List from "./pages/List";
import Posting from "./pages/Posting";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:category" element={<List />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/posting" element={<Posting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
