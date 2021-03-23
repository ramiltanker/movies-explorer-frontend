import React from "react";
import { Link, withRouter } from "react-router-dom";

import logo from "../../images/logo.svg";
function Login() {
  return (
    <>
      <section className="login">
          <div className="login__container">
        <div className="login__top">
          <img className="login__logo" src={logo} alt="Лого" />
          <h2 className="login__title">Рады видеть!</h2>
        </div>
        <form className="login__form">
          <div className="login__box">
            <label className="login__label">E-mail</label>
            <input
              className="login__input"
              required
              id="mail"
              name="mail"
              type="email"
              minLength="5"
              maxLength="40"
              value="pochta@yandex.ru"
            />
          </div>
          <div className="login__box">
            <label className="login__label">Пароль</label>
            <input
              className="login__input"
              required
              id="password"
              name="password"
              type="password"
              minLength="6"
              maxLength="16"
            />
          </div>
          <button type="submit" className="login__button">
            Войти
          </button>
        </form>
        <div className="login__signup">
          <p>Ещё не зарегистрированы?</p>
          <Link to="signup" className="login__register-link">
            Регистрация
          </Link>
        </div>
        </div>
      </section>
    </>
  );
}

export default withRouter(Login);