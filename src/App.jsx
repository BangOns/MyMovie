import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Body from "./Components/html/bodyAndFooter/body";
import MainDetails from "./Components/html/bodyAndFooter/componentsBody/ListFilm/Details/mainDetails";
import MainRecomendedDetails from "./Components/html/bodyAndFooter/componentsBody/ListFilm/Details/mainRecomendedDetails";
import MainTvShowDetails from "./Components/html/bodyAndFooter/componentsBody/ListFilm/Details/MainTvShowDetails";
import MainPopularDetails from "./Components/html/bodyAndFooter/componentsBody/ListFilm/Details/MainPopularDetails";
import MainDetailsTv from "./Components/html/bodyAndFooter/componentsBody/ListFilm/Details/mainDetailsTv";
import Navbar from "./Components/html/ComponentsNavBar/Navbar";
import SignUp from "./Components/html/ComponentsNavBar/SignUp";
import SignIn from "./Components/html/ComponentsNavBar/SignIn";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="detailsFilms/:id" element={<MainDetails />} />
        <Route path="detailsFilmsTv/:id" element={<MainDetailsTv />} />
        <Route path="RecomendedFilms/:id" element={<MainRecomendedDetails />} />
        <Route path="TvShowFilms/:id" element={<MainTvShowDetails />} />
        <Route path="PopularFilms/:id" element={<MainPopularDetails />} />
        <Route path="Register" element={<SignUp />} />
        <Route path="Login" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
