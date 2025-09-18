import React from "react";
import "./assets/style.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPostController from "./pages/ListPost/ListPostController";
import HeaderView from "./components/HeaderView";
import AddPostController from "./pages/AddPost/AddPostController";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderView />
      <Routes>
        <Route path="/" element={<ListPostController />} />
        <Route path="/add-post" element={<AddPostController />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
