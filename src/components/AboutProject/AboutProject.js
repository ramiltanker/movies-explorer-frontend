import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <section className='about-project'>
            <h2 className='about-project__header'>О проекте</h2>
            <div className='about-project__container'>
                <div className="about-project__box">
                    <div className="about-project__description">
                        <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
                        <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, 
                        добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className="about-project__description">
                        <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
                        <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было 
                        соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className="about-project__time-container">
                    <div className="about-project__time-box">
                        <div className="about-project__time"><p>1 неделя</p></div>
                        <p className="about-project__language">Back-end</p>
                    </div>
                    <div className="about-project__time-box">
                        <div className="about-project__time" id="second-time"><p>4 недели</p></div>
                        <p className="about-project__language">Front-end</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;