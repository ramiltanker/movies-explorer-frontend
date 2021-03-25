import React from 'react';

import linkIcon from "../../images/linkIcon.svg";

function Portfolio() {
    return (
        <section className="portfolio">
        <p className="portfolio__title">Портфолио</p>
        <ul className="portfolio__works">
            <li className="portfolio__work-box">
                <a href="#" className="portfolio__work-link">Статичный сайт</a>
                <a href="#"><img src={linkIcon} alt="Переход" /></a>
            </li>
            <li className="portfolio__work-box">
                <a href="#" className="portfolio__work-link">Адаптивный сайт</a>
               <a href="#"><img src={linkIcon} alt="Переход"/></a>
            </li>
            <li className="portfolio__work-box">
                <a href="#" className="portfolio__work-link">Одностраничное приложение</a>
                <a href="#"><img src={linkIcon} alt="Переход" /></a>
            </li>
        </ul>
    </section>
    )
}

export default Portfolio;