import React from "react";
import s from "components/Main//Skills/Skills.module.scss";
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
import { TbBrandJavascript } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  BsBootstrap,
  BsFiletypeCss,
  BsFiletypeScss,
  BsGithub,
} from "react-icons/bs";
import restApi from "assets/images/skills/restApi.png";
import formik from "assets/images/skills/formik.png";
import reduxSaga from "assets/images/skills/Redux-Saga-Logo.png";

export const Skills = () => (
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
      {/*<div className={s.item}>*/}
      {/*  <TbJson style={{ color: "red", fontSize: "60px" }} />*/}
      {/*  <span>Json</span>*/}
      {/*</div>*/}
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
        <SiStorybook style={{ color: "rgb(255,100,66)", fontSize: "60px" }} />
        <span>Storybook</span>
      </div>
      <div className={s.item}>
        <BsGithub style={{ color: "darkgrey", fontSize: "60px" }} />
        <span>Github</span>
      </div>
    </div>
  </section>
);
