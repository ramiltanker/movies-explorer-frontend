import React from "react";
import {
  Route,
  Switch,
  useHistory,
  withRouter,
  useLocation,
} from "react-router-dom";

// Компоненты
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Profile from "../Profile/Profile.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import NotFoundPage from "../NotFoundPage/NotFoundPage.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
// Компоненты

// MoviesApi
import api from "../../utils/MoviesApi.js";
// MoviesApi

// MoviesApi
import mainApi from "../../utils/MainApi.js";
// MoviesApi

import "./App.css";

import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function App() {
  const location = useLocation();

  const moviesIsActive =
    location.pathname === "/movies" ? "header__link-active" : "";
  const savedMoviesIsActive =
    location.pathname === "/saved-movies" ? "header__link-active" : "";

  const history = useHistory();

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  // Фильмы
  const [initialFilms, setInitialFilms] = React.useState([]);
  const [currentFilms, setCurrentFilms] = React.useState([]);
  // Фильмы
  // Сохранённые фильмы
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [savedMoviesFiltered, setSavedMoviesFiltered] = React.useState([]);
  // Сохранённые фильмы
  const [isLoadingMoviesData, setIsLoadingMoviesData] = React.useState(false);

  // токен
  const [token, setToken] = React.useState("");
  // токен

  // Данные пользователя
  const [currentUser, setCurrentUser] = React.useState({});
  // Данные пользователя

  // Ошибка пароля или почты
  const [loginError, setErrorLogin] = React.useState();
  // Ошибка пароля или почты

  // Ошибка обновления Профиля
  const [profileError, setProfileError] = React.useState();
  // Ошибка обновления Профиля

  // Успешное сохранение профиля
  const [profileSucces, setProfileSucces] = React.useState({
    status: false,
    message: ''
  });
  // Успешное сохранение профиля

  // Ошибка регистрации
  const [registerError, setRegisterError] = React.useState();
  // Ошибка регистрации
  // Проверка на короткие фильмы
  const [isChecked, setIsChecked] = React.useState(false);

  // Обновление профиля (статус)
  const [isUpdatingProfile, setIsUpdatingProfile] = React.useState(false);
  // Обновление профиля (статус)

  // Статус авторизации (прелоудер)
  const [isSignInStatus, setIsSignInStatus] = React.useState(false);
  // Статус авторизации (прелоудер)

  // Статус регистрации (прелоудер)
  const [isSignUpStatus, setIsSignUpStatus] = React.useState(false);
  // Статус регистрации (прелоудер)

  // Ошибка "ничего не найдено"(true или false)
  const [isMovieError, setIsMovieError] = React.useState(false);
  const [isSavedMovieError, setIsSavedMovieError] = React.useState(false);
  // Ошибка "ничего не найдено"(true или false)

  // Проверка на короткие фильмы
  function handleChecked(checked) {
    setIsChecked(checked);
  }
  // Проверка на короткие фильмы

  // Поиск фильмов
  function handleFindFilm(nameOfFilm) {
    if (moviesIsActive) {
      const filteredMovies = initialFilms.filter((film) => {
        const filmName = film.nameRU || film.nameEN;
        return filmName.toUpperCase().includes(nameOfFilm.toUpperCase());
      });
      if (filteredMovies.length === 0) {
        setIsMovieError(true);
      } else {
        setIsMovieError(false);
      }
      setCurrentFilms(filteredMovies);
    }
    if (moviesIsActive && isChecked) {
      const filteredMovies = initialFilms.filter((film) => {
        const filmName = film.nameRU || film.nameEN;
        return (
          filmName.toUpperCase().includes(nameOfFilm.toUpperCase()) &&
          film.duration < 40
        );
      });
      if (filteredMovies.length === 0) {
        setIsMovieError(true);
      } else {
        setIsMovieError(false);
      }
      setCurrentFilms(filteredMovies);
    } else if (savedMoviesIsActive) {
      const filteredMovies = savedMovies.filter((film) => {
        const filmName = film.nameRU || film.nameEN;
        return filmName.toUpperCase().includes(nameOfFilm.toUpperCase());
      });
      if (filteredMovies.length === 0) {
        setIsSavedMovieError(true);
      } else {
        setIsSavedMovieError(false);
      }
      setSavedMoviesFiltered(filteredMovies);
    }
    if (savedMoviesIsActive && isChecked) {
      const filteredMovies = savedMovies.filter((film) => {
        const filmName = film.nameRU || film.nameEN;
        return (
          filmName.toUpperCase().includes(nameOfFilm.toUpperCase()) &&
          film.duration < 40
        );
      });
      if (filteredMovies.length === 0) {
        setIsSavedMovieError(true);
      } else {
        setIsSavedMovieError(false);
      }
      setSavedMoviesFiltered(filteredMovies);
    }
  }
  // Поиск фильмов

  // Меню бургер
  function handeOpenMenu() {
    setMenuIsOpen(true);
  }

  function handleCloseMenu() {
    setMenuIsOpen(false);
  }
  // Меню бургер

  // Сохранение фильма
  function handleSaveFilm(movie) {
    mainApi.saveMovie(movie, token).then((newFilm) => {
      setSavedMovies([newFilm, ...savedMovies]);
    });
  }
  // Сохранение фильма

  // Удаление фильма
  function handleDeleteMovie(movieId) {
    if (savedMoviesIsActive) {
      mainApi.deleteMovie(movieId, token).then(() => {
        const newCards = savedMoviesFiltered.filter((c) => c._id !== movieId);
        setSavedMoviesFiltered(newCards);
        setSavedMovies(newCards);
      });
    }
    if (moviesIsActive) {
      const movie = savedMovies.find(({ id }) => id === movieId);
      console.log(movie);
      mainApi.deleteMovie(movie._id, token);
      const newCards = savedMoviesFiltered.filter((c) => c._id !== movie._id);
      setSavedMovies(newCards);
      setSavedMoviesFiltered(newCards);
    }
  }
  // Удаление фильма

  // Регистрация
  function handleRegister(email, password, name) {
    setIsSignUpStatus(true);
    mainApi
      .register(email, password, name)
      .then((res) => {
        if (res) {
          handleLogin(email, password);
        }
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error);
      })
      .finally(() => {
        setIsSignUpStatus(false);
      });
  }
  // Регистрация

  // Авторизация
  function handleLogin(email, password) {
    setLoggedIn(true);
    setIsSignInStatus(true);
    mainApi
      .authorization(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setToken(res.token);
          return res;
        } else {
          return;
        }
      })
      .then((data) => {
        if (data.token) {
          history.push("/movies");
        }
      })
      .catch((err) => {
        setErrorLogin(err);
      })
      .finally(() => {
        setIsSignInStatus(false);
      });
  }
  // Авторизация

  // Выход
  function handleLogout() {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    history.push("/");
  }
  // Выход

  // Проверка Токена
  function handleTokenCheck() {
    const jwt = localStorage.getItem("jwt");
    setToken(jwt);
    if (jwt) {
      setToken(jwt);
      mainApi
        .checkToken(jwt)
        .then((res) => {
          setCurrentUser(res);
          if (res) {
            setLoggedIn(true);
            history.push("/movies");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  // Редактировать данные пользователя
  function handleEditProfile(profile) {
    setIsUpdatingProfile(true);
    mainApi
      .editUser(profile, token)
      .then((newUser) => {
        setCurrentUser(newUser);
        setProfileSucces({
          status: true,
          message: 'Ваши данные успешно обновлены!'
        });
      })
      .catch((err) => {
        setProfileError(err);
      })
      .finally(() => {
        setIsUpdatingProfile(false);
      });
  }
  // Редактировать данные пользователя

  // Короткометражки
  function handleFilterShortMovies(nameOfFilm) {
    if (moviesIsActive && !isChecked) {
      const filteredMovies = initialFilms.filter((film) => {
        const filmName = film.nameRU || film.nameEN;
        return (
          filmName.toUpperCase().includes(nameOfFilm.toUpperCase()) &&
          film.duration < 40
        );
      });
      if (filteredMovies.length === 0) {
        setIsMovieError(true);
      } else {
        setIsMovieError(false);
      }
      setCurrentFilms(filteredMovies);
    } else {
      const filteredMovies = initialFilms.filter((film) => {
        const filmName = film.nameRU || film.nameEN;
        return (
          filmName.toUpperCase().includes(nameOfFilm.toUpperCase()) &&
          film.duration > 40
        );
      });
      if (filteredMovies.length === 0) {
        setIsMovieError(true);
      } else {
        setIsMovieError(false);
      }
      setCurrentFilms(filteredMovies);
    }
  }

  function handleFilterShortSavedMovies(nameOfFilm) {
    if (savedMoviesIsActive && !isChecked) {
      const filteredMovies = savedMovies.filter((film) => {
        const filmName = film.nameRU || film.nameEN;
        return (
          filmName.toUpperCase().includes(nameOfFilm.toUpperCase()) &&
          film.duration < 40
        );
      });
      if (filteredMovies.length === 0) {
        setIsSavedMovieError(true);
      } else {
        setIsSavedMovieError(false);
      }
      setSavedMoviesFiltered(filteredMovies);
    } else {
      const filteredMovies = savedMovies.filter((film) => {
        const filmName = film.nameRU || film.nameEN;
        return (
          filmName.toUpperCase().includes(nameOfFilm.toUpperCase()) &&
          film.duration > 40
        );
      });
      if (filteredMovies.length === 0) {
        setIsSavedMovieError(true);
      } else {
        setIsSavedMovieError(false);
      }
      setSavedMoviesFiltered(filteredMovies);
    }
  }
  // Короткометражки

  // NotFound кнопка назад
  function handleGoBack() {
    history.goBack();
  }
  // NotFound кнопка назад
  React.useEffect(() => {
    handleTokenCheck();
    const token = localStorage.getItem("jwt");
    if (token) {
      setIsLoadingMoviesData(true);
      api
        .getInitialFilms(token)
        .then((films) => {
          setInitialFilms(films);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoadingMoviesData(false);
        });
      mainApi
        .getSavedFilms(token)
        .then((data) => {
          setSavedMovies(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token]);
  // Проверка Токена

  const savedMoviesId = savedMovies.map((film) => {
    return film.movieId;
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Main
            onOpenMenu={handeOpenMenu}
            onCloseMenu={handleCloseMenu}
            loggedIn={loggedIn}
            menuIsOpen={menuIsOpen}
          />
        </Route>
        <ProtectedRoute
          path="/movies"
          loggedIn={loggedIn}
          component={Movies}
          films={currentFilms}
          handleChecked={handleChecked}
          onOpenMenu={handeOpenMenu}
          onCloseMenu={handleCloseMenu}
          menuIsOpen={menuIsOpen}
          handleFindFilm={handleFindFilm}
          isLoadingData={isLoadingMoviesData}
          handleSaveFilm={handleSaveFilm}
          handleDeleteMovie={handleDeleteMovie}
          savedMoviesId={savedMoviesId}
          handleFilterShortMovies={handleFilterShortMovies}
          isMovieError={isMovieError}
        />
        <ProtectedRoute
          path="/saved-movies"
          onOpenMenu={handeOpenMenu}
          onCloseMenu={handleCloseMenu}
          loggedIn={loggedIn}
          menuIsOpen={menuIsOpen}
          films={savedMoviesFiltered}
          handleChecked={handleChecked}
          isLoadingData={isLoadingMoviesData}
          handleFindFilm={handleFindFilm}
          component={SavedMovies}
          handleDeleteMovie={handleDeleteMovie}
          handleFilterShortSavedMovies={handleFilterShortSavedMovies}
          isSavedMovieError={isSavedMovieError}
        />
        <ProtectedRoute
          path="/profile"
          onOpenMenu={handeOpenMenu}
          onCloseMenu={handleCloseMenu}
          loggedIn={loggedIn}
          menuIsOpen={menuIsOpen}
          component={Profile}
          handleLogout={handleLogout}
          user={currentUser}
          handleEditProfile={handleEditProfile}
          profileError={profileError}
          isUpdatingProfile={isUpdatingProfile}
          profileSucces={profileSucces}
        />
        <Route path="/signup">
          <Register
            handleRegister={handleRegister}
            registerError={registerError}
            isSignUpStatus={isSignUpStatus}
          />
        </Route>
        <Route path="/signin">
          <Login
            handleLogin={handleLogin}
            loginError={loginError}
            isSignInStatus={isSignInStatus}
          />
        </Route>
        <Route path="*">
          <NotFoundPage handleGoBack={handleGoBack} />
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
