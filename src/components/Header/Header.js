import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";

function Header(props) {
  const location = useLocation();
  const moviesIsActive =
    location.pathname === "/movies" ? "header__link-active" : "";
  const savedMoviesIsActive =
    location.pathname === "/saved-movies" ? "header__link-active" : "";

  const burgerMenu = (
    <button
      className={`header__hamburger ${
        props.menuIsOpen ? "header__hamburger_inactive" : ""
      }`}
      onClick={props.onOpenMenu}
    />
  );

  const loggedInMenu = (
    <header className="header header_logged-in">
      <img className="header__logo" src={logo} alt="Логотип" />
      {burgerMenu}
      <button
        className={`header__close-icon ${
          props.menuIsOpen ? "header__close-icon_active" : " "
        }`}
        onClick={props.onCloseMenu}
      ></button>
      <div
        className={`header__container ${
          props.menuIsOpen ? "header__container_active" : " "
        }`}
      >
        <div className="header__films-box">
          <Link
            className={`header__films ${
              moviesIsActive ? "header__link-active" : ""
            }`}
            to="movies"
          >
            Фильмы
          </Link>
          <Link
            className={`header__saved-films ${
              savedMoviesIsActive ? "header__link-active" : ""
            }`}
            to="saved-movies"
          >
            Сохранённые фильмы
          </Link>
        </div>
        <div className="header__account-box">
          <Link className="header__account" to="profile">
            Аккаунт
            <div className="header__account-image"></div>
          </Link>
        </div>
      </div>
    </header>
  );

  const noLoggedInMenu = (
    <header className="header header_auntification">
      <img className="header__logo" src={logo} alt="Логотип" />
      <div className="header__auntification">
        <div className="header__auntification-box">
          <Link className="header__sign-up" to="signup">
            Регистрация
          </Link>
          <Link className="header__sign-in" to="signin">
            Войти
          </Link>
        </div>
      </div>
    </header>
  );

  return <>{props.loggedIn ? loggedInMenu : noLoggedInMenu}</>;
}

export default Header;
