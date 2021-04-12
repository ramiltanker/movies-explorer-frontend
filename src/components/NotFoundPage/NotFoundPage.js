import React from "react";

function NotFoundPage(props) {
  return (
    <section className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__type">404</h1>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <button className="not-found__link" onClick={props.handleGoBack}>
        Назад
      </button>
    </section>
  );
}

export default NotFoundPage;
