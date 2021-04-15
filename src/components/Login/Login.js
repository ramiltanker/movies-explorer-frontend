import React from "react";

import { Link, withRouter } from "react-router-dom";

import logo from "../../images/logo.svg";

import { useFormWithValidation } from "../FormValidation/FormValidation.js";
import Preloader from "../Preloader/Preloader";

function Login(props) {
  const email = useFormWithValidation();
  const password = useFormWithValidation();


  function handleLogin(event) {
    event.preventDefault();
    props.handleLogin(email.values.mail, password.values.password);

    email.resetForm();
    password.resetForm();
  }
  
  React.useEffect(() => {
    if (props.loginError) {
      props.loginError.message = '';
    }
  }, [])

  return (
    <>
      <section className="login">
        {props.isSignInStatus && <Preloader />}
        <div className="login__container">
          <div className="login__top">
          <Link to="/"><img className="login__logo" src={logo} alt="Лого" /></Link>
            <h2 className="login__title">Рады видеть!</h2>
          </div>
          <form className="login__form">
            <div className="login__box">
              <label className="login__label" id="label-email">
                E-mail
              </label>
              <input
                className="login__input"
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
                <span className="login__email-error login__email-error_active">
                  Неккоректно введён email
                </span>
              ) : (
                ""
              )}
              {email.isDirty ? (
                <span className="login__email-error login__email-error_active">
                  Поле не может быть пустым
                </span>
              ) : (
                ""
              )}
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
                placeholder="Пароль"
                value={password.values.password || ''}
                onChange={password.handleChange}
                autoComplete="off"
              />
              {password.isDirty ? (
                <span className="login__password-error login__password-error_active">
                  Поле не может быть пустым
                </span>
              ) : (
                ""
              )}
              {password.errors.password ? (
                <span className="login__password-error login__password-error_active">
                  Минимальная длина поля 6 символов
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="login__button-box">
              <span
                className={`login__signin-error ${
                  props.loginError ? "login__signin-error_active" : ""
                }`}
              >
                {props.loginError ? props.loginError.message : ""}
              </span>
              <button
                type="submit"
                className={`login__button ${
                  !email.isValid || !password.isValid
                    ? "login__button_inactive"
                    : ""
                }`}
                onClick={handleLogin}
                disabled={!email.isValid || !password.isValid}
              >
                Войти
              </button>
            </div>
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
