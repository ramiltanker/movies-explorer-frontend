import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className="footer__container">
                <p className="footer__date">&copy; 2020</p>
                <ul className="footer__links">
                    <li><a className="footer__link" href="#">Яндекс.Практикум</a></li>
                    <li><a className="footer__link" href="#">Github</a></li>
                    <li><a className="footer__link" href="#" id="facebook">Facebook</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;