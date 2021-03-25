import React from "react";

import Header from "../Header/Header.js";

function Profile(props) {
  return (
    <>
      <Header
        onOpenMenu={props.handeOpenMenu}
        onCloseMenu={props.handleCloseMenu}
        loggedIn={props.loggedIn}
        menuIsOpen={props.menuIsOpen}
      />
      <section className="profile">
        <p className="profile__hello">Привет, Виталий!</p>
        <form className="profile__form">
          <div className="profile__box">
            <label className="profile__name">Имя</label>
            <input className="profile__name-input" value="Виталий" />
          </div>
          <div className="profile__box">
            <label className="profile__email">Почта</label>
            <input className="profile__email-input" value="pochta@yandex.ru" />
          </div>
          <button className="profile__edit" type="button">
            Редактировать
          </button>
        </form>
        <button className="profile__exit" type="button">
          Выйти из аккаунта
        </button>
      </section>
    </>
  );
}

export default Profile;
