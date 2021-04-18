import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className="footer__container">
                <p className="footer__date">&copy; 2020</p>
                <ul className="footer__links">
                    <li><Link className="footer__link" to="https://praktikum.yandex.ru/profile/web/">Яндекс.Практикум</Link></li>
                    <li><Link className="footer__link" to="https://github.com/ramiltanker">Github</Link></li>
                    <li><Link className="footer__link" to="https://vk.com/tataring_gmp" id="facebook">Вконтакте</Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;