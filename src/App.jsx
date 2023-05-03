import "./App.css";
import { Route, Routes } from "react-router-dom";
import Body from "./Components/html/bodyAndFooter/body";
import MainDetails from "./Components/html/bodyAndFooter/componentsBody/ListFilm/Details/mainDetails";
import MainDetailsTv from "./Components/html/bodyAndFooter/componentsBody/ListFilm/Details/mainDetailsTv";
import Navbar from "./Components/html/ComponentsNavBar/Navbar";
import SignUp from "./Components/html/ComponentsNavBar/SignUp";
import SignIn from "./Components/html/ComponentsNavBar/SignIn";
import MainDetailsNewRelease from "./Components/html/bodyAndFooter/componentsBody/ListFilm/Details/mainDetailsNewRelease";
import MainSearch from "./Components/html/bodyAndFooter/componentsBody/ListFilm/MainSearch";
import MainRecomendedDetails from "./Components/html/bodyAndFooter/componentsBody/ListFilm/ContainerGenreFilm/mainRecomendedDetails";
import MainTvShowDetails from "./Components/html/bodyAndFooter/componentsBody/ListFilm/ContainerGenreFilm/MainTvShowDetails";
import MainPopularDetails from "./Components/html/bodyAndFooter/componentsBody/ListFilm/ContainerGenreFilm/MainPopularDetails";
import MainWishlist from "./Components/html/bodyAndFooter/componentsBody/ListFilm/Details/mainWishlist";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />

        {/* Route Details Film / Movie */}
        <Route path="detailsFilms/:id" element={<MainDetails />} />
        <Route path="detailsFilmsTv/:id" element={<MainDetailsTv />} />
        <Route
          path="detailsFilmsRelease/:id"
          element={<MainDetailsNewRelease />}
        />

        {/* route genre */}
        <Route path="search" element={<MainSearch />} />
        <Route path="RecomendedFilms/:id" element={<MainRecomendedDetails />} />
        <Route path="TvShowFilms/:id" element={<MainTvShowDetails />} />
        <Route path="PopularFilms/:id" element={<MainPopularDetails />} />
        <Route path="Wishlist/:name" element={<MainWishlist />} />

        {/* router Auth */}
        <Route path="Register" element={<SignUp />} />
        <Route path="Login" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
