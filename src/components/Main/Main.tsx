import React from "react";
import s from "./Main.module.scss";
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
  BsGithub,
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
import ReactTypingEffect from "react-typing-effect";
import { Form } from "components/Form/Form";

const Zoom = require("react-reveal/Zoom");
const Fade = require("react-reveal/Fade");

export const Main = () => {
  return (
    <div className={s.main}>
      <section className={s.hero} id="home">
        <h1 className={s.title}>
          Kotov Alexander
          <br />
          <ReactTypingEffect
            className={s.typingEffect}
            text={["Frontend Developer"]}
            speed={100}
            eraseSpeed={100}
          />
        </h1>
        <Zoom top>
          <div className={s.circleContainer}>
            <Link to="portfolio" spy={true} smooth={true} duration={500}>
              <img
                className={s.rotatingText}
                src={imgFake}
                alt="Rounded Text"
              />
              <BsArrowDown />
            </Link>
          </div>
        </Zoom>
      </section>
      <section className={s.about} id="about">
        <div className={s.wrapContent}>
          <h3 className={s.title}>About me</h3>
          <p className={s.text}>
            Hello! I'm a frontend developer with a deep understanding of modern
            technologies and web development standards. My experience
            encompasses creating SPAs using React, Redux, TypeScript, along with
            profound knowledge in SCSS, HTML, and JavaScript. I'm committed to
            continuous improvement and learning new tools to craft efficient and
            innovative solutions. Teamwork is more than just a word to me: I
            firmly believe that collaboration and knowledge sharing are keys to
            achieving outstanding results. Currently, I'm seeking opportunities
            to apply my skills in a team that sets ambitious goals and values
            quality. I'm open to both project-based work and full-time
            employment. Let's create something amazing together!
          </p>
        </div>
      </section>
      <section className={s.resume} id="resume">
        <h3 className={s.title}>Education & Experience</h3>
        <div className={s.educationWork}>
          <div>
            <span>2023 - Present</span>
            <h2>Front-End Developer</h2>
            <p>IT-INCUBATOR</p>
          </div>

          <div>
            <span>2021 - Present</span>
            <h2>Logistician</h2>
            <p>Viessmann</p>
          </div>

          <div>
            <span>2016 - 2020</span>
            <h2>Estimation Engineer</h2>
            <p>State Utility Enterprise 'Housing Maintenance'</p>
          </div>

          <div>
            <span>2021</span>
            <h2>Learning English to the level pre-intermediate</h2>
            <p>Don't Speak school</p>
          </div>

          <div>
            <span>
              {/*05/*/}2019 - {/*01/*/}2020
            </span>
            <h2>Website development with html, css & javascript</h2>
            <p>IT-Academy</p>
          </div>

          <div>
            <span>
              {/*09/*/}2012 - {/*02/*/}2019
            </span>
            <h2>Bachelor Degree in Mechanical Engineering Technology</h2>
            <p>Vitebsk State Technological University(VSTU)</p>
          </div>
        </div>
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
          <div className={s.item}>
            <BsGithub style={{ color: "darkgrey", fontSize: "60px" }} />
            <span>Github</span>
          </div>
        </div>
      </section>
      <section className={s.portfolio} id="portfolio">
        <h3 className={s.title}>Featured Projects</h3>
        <Fade left>
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
        </Fade>
        <Fade right>
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
        </Fade>
      </section>
      <section className={s.contact} id="contact">
        <h3 className={s.title}>Contact</h3>
        <Form />
      </section>
    </div>
  );
};
