import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navigation";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Register from "../pages/Register";
import AddMovies from "../pages/AddMovies";
import WatchList from "../pages/WatchList";
import DeleteMovie from "../pages/DeleteMovie";
import Story from "../pages/Story";
import LoginRouter from "./LoginRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginRouter />}>
          <Route path="" element={<Main />} />
        </Route>
        <Route path="/login">
          <Route path="" element={<Login />} />
        </Route>
        <Route path="/register">
          <Route path="" element={<Register />} />
        </Route>
        <Route path="/addmovies" element={<LoginRouter />}>
          <Route path="" element={<AddMovies />} />
        </Route>
        <Route path="/watchlist" element={<LoginRouter />}>
          <Route path="" element={<WatchList />} />
        </Route>
        <Route path="/deletemovie" element={<LoginRouter />}>
          <Route path="" element={<DeleteMovie />} />
        </Route>
        <Route path="/story/:id">
          <Route path="" element={<Story />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
