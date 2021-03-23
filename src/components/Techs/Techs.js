import React from 'react';

function Techs() {
    return (
        <section className="tech">
            <h2 className="tech__title">Технологии</h2>
            <div className="tech__container">
                <p className="tech__number">7 технологий</p>
                <p className="tech__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <div className="tech__box">
                    <div className="tech__technology">
                        <p className="tech__name">HTML</p>
                    </div>
                    <div className="tech__technology">
                        <p className="tech__name">CSS</p>
                    </div>
                    <div className="tech__technology">
                        <p className="tech__name">JS</p>
                    </div>
                    <div className="tech__technology">
                        <p className="tech__name">React</p>
                    </div>
                    <div className="tech__technology">
                        <p className="tech__name">Git</p>
                    </div>
                    <div className="tech__technology">
                        <p className="tech__name">Express.js</p>
                    </div>
                    <div className="tech__technology">
                        <p className="tech__name">mongoDB</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Techs;