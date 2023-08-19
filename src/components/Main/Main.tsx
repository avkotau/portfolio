import React from 'react';
import s from "./Main.module.scss";

const Main = () => {
    return (
        <div className={s.main}>

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
    );
};

export default Main;
