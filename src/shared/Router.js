<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import List from "../pages/List";
import Posting from "../pages/Posting";
import PostingEdit from "../pages/PostingEdit";
>>>>>>> 9923febd5d89afde41ac45f4f73c5b21a86059fd

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="detail" element={<Detail />} />
        <Route path="detail/:id" element={<Detail />} />
=======
        <Route path="/" element={<Main />} />
        <Route path="/:category" element={<List />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/posting" element={<Posting />} />
        <Route path="/postingEdit/:id" element={<PostingEdit />} />
>>>>>>> 9923febd5d89afde41ac45f4f73c5b21a86059fd
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
