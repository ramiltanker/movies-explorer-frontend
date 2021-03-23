import React from "react";
import {
  Route,
  Switch,
  useHistory,
  Redirect,
  withRouter,
} from "react-router-dom";

// Компоненты
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Profile from "../Profile/Profile.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import NotFoundPage from "../NotFoundPage/NotFoundPage.js";
// Компоненты

// Фильмы
import films from "../../utils/constants.js";
// Фильмы
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  function handeOpenMenu() {
    setMenuIsOpen(true);
  }

  function handleCloseMenu() {
    setMenuIsOpen(false);
  }

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main
            onOpenMenu={handeOpenMenu}
            onCloseMenu={handleCloseMenu}
            loggedIn={loggedIn}
            menuIsOpen={menuIsOpen}
          />
        </Route>
        <Route path="/movies">
          <Movies
            films={films}
            onOpenMenu={handeOpenMenu}
            onCloseMenu={handleCloseMenu}
            loggedIn={loggedIn}
            menuIsOpen={menuIsOpen}
          />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies
            onOpenMenu={handeOpenMenu}
            onCloseMenu={handleCloseMenu}
            loggedIn={loggedIn}
            menuIsOpen={menuIsOpen}
            films={films}
          />
        </Route>
        <Route path="/profile">
          <Profile
            onOpenMenu={handeOpenMenu}
            onCloseMenu={handleCloseMenu}
            loggedIn={loggedIn}
            menuIsOpen={menuIsOpen}
          />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/not-found">
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}

export default withRouter(App);
