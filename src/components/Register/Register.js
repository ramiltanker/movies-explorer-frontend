import React from "react";
import { Link, withRouter } from "react-router-dom";

import logo from "../../images/logo.svg";
function Register() {
  return (
    <>
      <section className="register">
          <div className="register__container">
        <div className="register__top">
          <img className="register__logo" src={logo} alt="Лого" />
          <h2 className="register__title">Добро пожаловать!</h2>
        </div>
        <form className="register__form">
          <div className="register__box">
            <label className="register__label">Имя</label>
            <input
              className="register__input"
              required
              id="name"
              name="name"
              type="text"
              minLength="1"
              maxLength="40"
              value="Виталий"
            />
          </div>
          <div className="register__box">
            <label className="register__label">E-mail</label>
            <input
              className="register__input"
              required
              id="mail"
              name="mail"
              type="email"
              minLength="5"
              maxLength="40"
              value="pochta@yandex.ru"
            />
          </div>
          <div className="register__box">
            <label className="register__label">Пароль</label>
            <input
              className="register__input"
              required
              id="password"
              name="password"
              type="password"
              minLength="6"
              maxLength="16"
            />
          </div>
          <button type="submit" className="register__button">
            Зарегистрироваться
          </button>
        </form>
        <div className="register__signin">
          <p>Уже зарегистрированы?</p>
          <Link to="signin" className="register__login-link">
            Войти
          </Link>
        </div>
        </div>
      </section>
    </>
  );
}

export default withRouter(Register);
