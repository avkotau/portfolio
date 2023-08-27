import React from "react";
import s from "./Main.module.scss";
import btn from "common/components/Button/Button.module.scss";
import imgFake from "assets/images/round-text.png";
import { Link } from "react-scroll";
import reduxSaga from "assets/images/skills/Redux-Saga-Logo.png";
import formik from "assets/images/skills/formik.png";
import restApi from "assets/images/skills/restApi.png";
import {
  BsArrowDown,
  BsBootstrap,
  BsFiletypeCss,
  BsFiletypeScss,
} from "react-icons/bs";
import { GrGraphQl, GrReactjs } from "react-icons/gr";
import {
  SiApollographql,
  SiAxios,
  SiMaterialdesign,
  SiReactquery,
  SiRedux,
  SiSocketdotio,
  SiStorybook,
  SiTestcafe,
  SiTypescript,
} from "react-icons/si";
import { TbBrandJavascript, TbJson } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";

export const Main = () => {
  return (
    <div className={s.main}>
      <section className={s.hero} id="home">
        <h1 className={s.title}>
          Hello my name is Alex I'm Frontend Developer
        </h1>
        <div className={s.circleContainer}>
          <Link to="portfolio" spy={true} smooth={true} duration={500}>
            <img className={s.rotatingText} src={imgFake} alt="Rounded Text" />
            <BsArrowDown className={s.arrowDown} />
          </Link>
        </div>
      </section>
      <section className={s.about} id="about">
        <div className={s.wrapContent}>
          <h3 className={s.title}>about me title</h3>
          <p className={s.text}>
            Идейные соображения высшего порядка, а также сплочённость команды
            профессионалов говорит о возможностях соответствующих условий
            активизации. Каждый из нас понимает очевидную вещь: экономическая
            повестка сегодняшнего дня напрямую зависит от новых принципов
            формирования материально-технической и кадровой базы. И нет
            сомнений, что независимые государства заблокированы в рамках своих
            собственных рациональных ограничений. Есть над чем задуматься:
            ключевые особенности структуры проекта набирают популярность среди
            определенных слоев населения, а значит, должны быть ассоциативно
            распределены по отраслям. Ясность нашей позиции очевидна:
            высококачественный прототип будущего проекта обеспечивает широкому
            кругу (специалистов) участие в формировании приоретизации разума над
            эмоциями.
          </p>
        </div>
      </section>
      <section className={s.resume} id="resume">
        <h3 className={s.title}>Education & Experience</h3>
        <div className={s.educationWork}>education Work information</div>
        {/*    create table tag with content*/}
      </section>
      <section className={s.skills} id="skills">
        <h3 className={s.title}>My Advantages</h3>
        <div className={s.skills}>
          <div className={s.item}>
            <GrReactjs style={{ color: "turquoise", fontSize: "60px" }} />
            <span>React</span>
          </div>
          <div className={s.item}>
            <SiTypescript style={{ color: "#3d5bff", fontSize: "60px" }} />
            <span>TypeScript</span>
          </div>
          <div className={s.item}>
            <TbBrandJavascript style={{ color: "#ffe800", fontSize: "60px" }} />
            <span>JavaScript</span>
          </div>
          <div className={s.item}>
            <AiOutlineHtml5 style={{ color: "#ea641a", fontSize: "60px" }} />
            <span>Html</span>
          </div>
          <div className={s.item}>
            <BsFiletypeCss style={{ color: "lightblue", fontSize: "60px" }} />
            <span>Css</span>
          </div>
          <div className={s.item}>
            <BsFiletypeScss style={{ color: "hotpink", fontSize: "60px" }} />
            <span>Scss</span>
          </div>
          <div className={s.item}>
            <BsBootstrap style={{ color: "mediumpurple", fontSize: "60px" }} />
            <span>Bootstrap</span>
          </div>
          <div className={s.item}>
            <TbJson style={{ color: "red", fontSize: "60px" }} />
            <span>Json</span>
          </div>
          <div className={s.item}>
            <SiAxios style={{ color: "rgb(90, 41, 228)", fontSize: "60px" }} />
            <span>Axios</span>
          </div>
          <div className={s.item}>
            <img
              src={restApi}
              alt="Rest Api"
              style={{ height: "60px", width: "95px" }}
            />
            <span>Rest Api</span>
          </div>
          <div className={s.item}>
            <img
              src={formik}
              alt="Formik"
              style={{ height: "60px", width: "60px" }}
            />
            <span>Formik</span>
          </div>
          <div className={s.item}>
            <SiRedux style={{ color: "#764abc", fontSize: "60px" }} />
            <span>Redux-Toolkit</span>
          </div>
          <div className={s.item}>
            <img
              src={reduxSaga}
              alt="Redux Saga"
              style={{ height: "60px", width: "95px" }}
            />
            <span>Redux-Saga</span>
          </div>
          <div className={s.item}>
            <SiTestcafe style={{ color: "greenyellow", fontSize: "60px" }} />
            <span>Unit tests</span>
          </div>
          <div className={s.item}>
            <SiSocketdotio style={{ color: "white", fontSize: "60px" }} />
            <span>WebSocket</span>
          </div>
          <div className={s.item}>
            <SiReactquery style={{ color: "rgb(192,0,0)", fontSize: "60px" }} />
            <span>React-Query</span>
          </div>
          <div className={s.item}>
            <SiApollographql style={{ color: "darkgrey", fontSize: "60px" }} />
            <span>Apollo</span>
          </div>
          <div className={s.item}>
            <GrGraphQl style={{ color: "#ef00a2", fontSize: "60px" }} />
            <span>GraphQl</span>
          </div>
          <div className={s.item}>
            <SiMaterialdesign style={{ color: "#0e6fff", fontSize: "60px" }} />
            <span>Material UI</span>
          </div>
          <div className={s.item}>
            <SiStorybook
              style={{ color: "rgb(255,100,66)", fontSize: "60px" }}
            />
            <span>Storybook</span>
          </div>
        </div>
      </section>
      <section className={s.portfolio} id="portfolio">
        <h3 className={s.title}>Featured Projects</h3>
        <figure>
          <a href="https://hrautoglass.com/wp-content/themes/eshg/images/placeholder/700x400.gif">
            <img
              src="https://hrautoglass.com/wp-content/themes/eshg/images/placeholder/700x400.gif"
              alt=""
            />
          </a>
          <figcaption>
            <a href="https://hrautoglass.com/wp-content/themes/eshg/images/placeholder/700x400.gif">
              name project
            </a>
          </figcaption>
        </figure>
        <figure>
          <a href="https://hrautoglass.com/wp-content/themes/eshg/images/placeholder/700x400.gif">
            <img
              src="https://hrautoglass.com/wp-content/themes/eshg/images/placeholder/700x400.gif"
              alt=""
            />
          </a>
          <figcaption>
            <a href="https://hrautoglass.com/wp-content/themes/eshg/images/placeholder/700x400.gif">
              name project
            </a>
          </figcaption>
        </figure>
      </section>
      <section className={s.contact} id="contact">
        <h3 className={s.title}>Contact</h3>
        <form className={s.form} method="" action="">
          <div className={s.inputGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Your name" />
          </div>
          <div className={s.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email adress"
            />
          </div>

          <div className={s.inputGroup}>
            <label htmlFor="phone-number">
              phone <span>(optional)</span>
            </label>
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              placeholder="Your number phone"
            />
          </div>
          <div className={s.inputGroup}>
            <label htmlFor="message">message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Wrire your message here ..."
            ></textarea>
          </div>
          <div className={s.inputGroup}>
            <button
              className={btn.themeBtn}
              name="submit"
              type="submit"
              id="submit-form"
            >
              send message
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
