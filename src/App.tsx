import React from 'react';

import s from './App.module.scss';

function App() {
    return (
        <div className={s.app}>
            <div className={s.leftSidebar}>
                <span>name</span>
                <img
                    src="data:image/jpeg;base64,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"
                    alt=""/>
                <span>mail</span>
                <span>from city</span>
                <ul>
                    <li>ts</li>
                    <li>inst</li>
                    <li>discord</li>
                    <li>twitter</li>
                </ul>
                <button>button</button>
            </div>

            <div className={s.container}>

                <section className={s.hero}>
                    <h1 className={s.title}>Hello my name is Alex I'm Frontend Developer</h1>
                    <span className={s.portfolioAnimation}>
                            scroll-animation to my projects
                        </span>

                </section>
                <section className={s.about}>
                    <div className={s.wrapContent}>
                        <h3 className={s.title}>about me title</h3>
                        <p className={s.text}>Идейные соображения высшего порядка, а также сплочённость команды
                            профессионалов говорит о возможностях соответствующих условий активизации. Каждый из нас
                            понимает очевидную вещь: экономическая повестка сегодняшнего дня напрямую зависит от новых
                            принципов формирования материально-технической и кадровой базы. И нет сомнений, что
                            независимые государства заблокированы в рамках своих собственных рациональных ограничений.
                            Есть над чем задуматься: ключевые особенности структуры проекта набирают популярность среди
                            определенных слоев населения, а значит, должны быть ассоциативно распределены по отраслям.
                            Ясность нашей позиции очевидна: высококачественный прототип будущего проекта обеспечивает
                            широкому кругу (специалистов) участие в формировании приоретизации разума над эмоциями.
                        </p>
                    </div>
                </section>
                <section className={s.resume}>
                    <h3 className={s.title}>Education & Experience</h3>
                    <div className={s.educationWork}>education Work information</div>
                    {/*    create table tag with content*/}
                </section>
                <section className={s.skills}>

                    <h3 className={s.title}>My Advantages</h3>
                    <div className={s.skills}>
                        <div className={s.item}>
                            <img src="https://icon-library.com/images/50x50-icon/50x50-icon-0.jpg" alt=""/>
                            <span>React</span>

                        </div>
                        <div className={s.item}>
                            <img src="https://icon-library.com/images/50x50-icon/50x50-icon-0.jpg" alt=""/>
                            <span>ts</span>

                        </div>
                        <div className={s.item}>
                            <img src="https://icon-library.com/images/50x50-icon/50x50-icon-0.jpg" alt=""/>
                            <span>html</span>

                        </div>
                        <div className={s.item}>
                            <img src="https://icon-library.com/images/50x50-icon/50x50-icon-0.jpg" alt=""/>
                            <span>ccs</span>

                        </div>
                        <div className={s.item}>
                            <img src="https://icon-library.com/images/50x50-icon/50x50-icon-0.jpg" alt=""/>
                            <span>js</span>

                        </div>
                    </div>

                </section>
                <section className={s.portfolio}>

                    <h3 className={s.title}>Featured Projects</h3>
                    <figure>
                        <a href="https://hrautoglass.com/wp-content/themes/eshg/images/placeholder/700x400.gif">
                            <img src="https://hrautoglass.com/wp-content/themes/eshg/images/placeholder/700x400.gif"
                                 alt=""/>
                        </a>
                        <figcaption>
                            <a href="https://hrautoglass.com/wp-content/themes/eshg/images/placeholder/700x400.gif">
                                name project
                            </a>
                        </figcaption>
                    </figure>
                    <figure>
                        <a href="https://hrautoglass.com/wp-content/themes/eshg/images/placeholder/700x400.gif">
                            <img src="https://hrautoglass.com/wp-content/themes/eshg/images/placeholder/700x400.gif"
                                 alt=""/>
                        </a>
                        <figcaption>
                            <a href="https://hrautoglass.com/wp-content/themes/eshg/images/placeholder/700x400.gif">
                                name project
                            </a>
                        </figcaption>
                    </figure>

                </section>
                <section className={s.contact}>

                    <h3 className={s.title}>Contact</h3>

                    <form className={s.form} method="" action="">

                        <div className={s.inputGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name"
                                   placeholder="Your name"/>
                        </div>

                        <div className={s.inputGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Your email adress"/>
                        </div>

                        <div className={s.inputGroup}>
                            <label htmlFor="phone-number">phone <span>(optional)</span></label>
                            <input
                                type="tel" name="phone-number" id="phone-number"
                                placeholder="Your number phone"
                            />
                        </div>

                        <div className={s.inputGroup}>
                            <label htmlFor="message">message</label>
                            <textarea
                                name="message" id="message" placeholder="Wrire your message here ...">
                                    </textarea>
                        </div>

                        <div className={s.inputGroup}>
                            <button className="" name="submit" type="submit" id="submit-form">send
                                message
                            </button>
                        </div>

                    </form>
                </section>

            </div>

            <ul className={s.menu}>
                <li>Home</li>
                <li>About</li>
                <li>resume</li>
                <li>skills</li>
                <li>portfolio</li>
                <li>contact</li>
            </ul>

        </div>
    );
}

export default App;
