import React from 'react';
import aboutMeAva from "../../images/avatar.png";

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__container">
                <div className="about-me__info">
                    <div className="about-me__bio">
                        <p className="about-me__name">Виталий</p>
                        <p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
                        <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
                        С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
                        начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    </div>
                    <ul className="about-me__links">
                        <li><a className="about-me__link" href="#">Facebook</a></li>
                        <li><a className="about-me__link" href="#" id="git">Github</a></li>
                    </ul>
                    <img className="about-me__image" src={aboutMeAva} alt="Аватар" />
                </div>
            </div>
        </section>
    )
}

export default AboutMe;