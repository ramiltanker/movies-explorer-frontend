import React from "react";
import { Link, withRouter } from "react-router-dom";

import logo from "../../images/logo.svg";

import { useFormWithValidation } from "../FormValidation/FormValidation.js";
import Preloader from "../Preloader/Preloader";

function Register(props) {

  const name = useFormWithValidation();
  const email = useFormWithValidation();
  const password = useFormWithValidation();

  function handleRegister(event) {
    event.preventDefault();
    props.handleRegister(email.values.mail, password.values.password, name.values.name);
    
    email.resetForm();
    password.resetForm();
    name.resetForm();
  }

  React.useEffect(() => {
    if (props.registerError) {
      props.registerError.message = '';
    }
  }, [])
  
  return (
    <>
      <section className="register">
        {props.isSignUpStatus && <Preloader />}
        <div className="register__container">
          <div className="register__top">
          <Link to="/"><img className="register__logo" src={logo} alt="Лого" /></Link>
            <h2 className="register__title">Добро пожаловать!</h2>
          </div>
          <form className="register__form">
            <div className="register__box">
              <label className="register__label" id="label-name">
                Имя
              </label>
              <input
                className="register__input"
                required
                id="name"
                name="name"
                minLength="1"
                maxLength="1000"
                type="text"
                placeholder="Имя"
                value={name.values.name || ''}
                onChange={name.handleChange}
                autoComplete="off"
              />
              {name.isDirty && (
                <span className="register__name-error register__name-error_active">
                  Имя не может быть пустым
                </span>
              )}
              {name.errors.name ? (
                <span className="register__name-error register__name-error_active">
                  Минимальная длина поля 1 символ(-ов)
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="register__box">
              <label className="register__label">E-mail</label>
              <input
                className="register__input"
                required
                id="mail"
                name="mail"
                type="email"
                value={email.values.mail || ''}
                placeholder="Почта"
                onChange={email.handleChange}
                autoComplete="off"
              />
              {!email.isEmail && email.values.mail ? (
                <span className="register__email-error register__email-error_active">
                  Неккоректно введён email
                </span>
              ) : (
                ""
              )}
              {email.isDirty && (
                <span className="register__email-error register__email-error_active">
                  Почта не может быть пустой
                </span>
              )}
            </div>
            <div className="register__box">
              <label className="register__label">Пароль</label>
              <input
                className="register__input"
                required
                id="password"
                name="password"
                type="password"
                placeholder="Пароль"
                minLength="6"
                maxLength="1000"
                value={password.values.password || ''}
                onChange={password.handleChange}
                autoComplete="off"
              />
              {password.isDirty && (
                <span className="register__password-error register__password-error_active">
                  Пароль не может быть пустым
                </span>
              )}
              {password.errors.password ? (
                <span className="register__password-error register__password-error_active">
                  Минимальная длина поля 6 символов
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="register__button-box">
              <span
                className={`register__signup-error ${
                  props.registerError ? "register__signup-error_active" : ""
                }`}
              >
                {props.registerError ? props.registerError.message : ""}
              </span>
            <button
              type="submit"
              className={`register__button ${!email.isValid || !password.isValid || !name.isValid ? 'register__button_inactive' : ''}`}
              onClick={handleRegister}
              disabled={!email.isValid || !password.isValid || !name.isValid}
            >
              Зарегистрироваться
            </button>
            </div>
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
