import React from "react";

import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <section className="not-found">
            <div className="not-found__container">
            <h1 className="not-found__type">404</h1>
            <p className="not-found__text">Страница не найдена</p>
            </div>
            <Link className="not-found__link">Назад</Link>
        </section>
    )
}

export default NotFoundPage;