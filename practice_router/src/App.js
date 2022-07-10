import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import Menubar from "./pages/MenuBar";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}>
          <Route path=":movieID" element={<Movie />} />
        </Route>
        <Route path="*" element={<div>Not Founded404</div>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
