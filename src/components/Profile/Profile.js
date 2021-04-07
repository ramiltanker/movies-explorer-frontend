import React from "react";

import Header from "../Header/Header.js";

import { useFormWithValidation } from "../FormValidation/FormValidation.js";

function Profile(props) {
  const name = useFormWithValidation();
  const email = useFormWithValidation();

  function handleLogout() {
    props.handleLogout();
  }

  function handleEditProfile() {
    props.handleEditProfile({
      email: email.values.mail,
      name: name.values.name
    });
  }

  return (
    <>
      <Header
        onOpenMenu={props.onOpenMenu}
        onCloseMenu={props.onCloseMenu}
        loggedIn={props.loggedIn}
        menuIsOpen={props.menuIsOpen}
      />
      <section className="profile">
        <p className="profile__hello">Привет, {props.user.name}!</p>
        <form className="profile__form">
          <div className="profile__box">
            <label className="profile__name">Имя</label>
              <input
                required
                autoComplete="off"
                className="profile__name-input"
                placeholder="Имя"
                name="name"
                defaultValue={props.user.name}
                onChange={name.handleChange}
              />
          </div>
          {name.isDirty ? (
                <span className="profile__name-error profile__name-error_active">
                  Поле не может быть пустым
                </span>
              ) : (
                ""
              )}
          <div className="profile__box" id="box-email">
            <label className="profile__email">Почта</label>
              <input
                required
                autoComplete="off"
                type="mail"
                className="profile__email-input"
                placeholder="Почта"
                name="mail"
                defaultValue={props.user.email}
                onChange={email.handleChange}
              />
          </div>
          {email.isDirty ? (
                <span className="profile__email-error profile__email-error_active">
                  Поле не может быть пустым
                </span>
              ) : (
                ""
              )}
              {email.errors.mail ? (
                <span className="profile__email-error profile__email-error_active" id="email-valid">
                  Неккоректно введён email
                </span>
              ) : (
                ""
              )}
          <div className="profile__button-box">
              <span
                className={`profile__edit-error ${
                  props.profileError ? "profile__edit-error_active" : ""
                }`}
              >
                {props.profileError ? props.profileError.message : ""}
              </span>
          <button
            className={`profile__edit ${!name.isValid ? 'profile__edit_inactive' : ''}`}
            type="button"
            disabled={!name.isValid}
            onClick={handleEditProfile}
          >
            Редактировать
          </button>
          </div>
        </form>
        <button className="profile__exit" type="button" onClick={handleLogout}>
          Выйти из аккаунта
        </button>
      </section>
    </>
  );
}

export default Profile;
