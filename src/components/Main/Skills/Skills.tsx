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
  SiNativescript,
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
        <SiTypescript className={`${s.iconSize} ${s.siTypescript}`} />
        <span>TypeScript</span>
      </div>

      <div className={s.item}>
        <GrReactjs className={`${s.iconSize} ${s.srReactjs}`} />
        <span>React</span>
      </div>

      <div className={s.item}>
        <SiNativescript className={`${s.iconSize} ${s.srReactjs}`} />
        <span>React Native</span>
      </div>

      <div className={s.item}>
        <SiReactquery className={`${s.iconSize} ${s.siReactquery}`} />
        <span>React-Query</span>
      </div>

      <div className={s.item}>
        <SiRedux className={`${s.iconSize} ${s.siRedux}`} />
        <span>Redux-Toolkit</span>
      </div>

      <div className={s.item}>
        <img src={reduxSaga} alt="Redux Saga" className={s.siReduxSaga} />
        <span>Redux-Saga</span>
      </div>

      <div className={s.item}>
        <TbBrandJavascript className={`${s.iconSize} ${s.tbBrandJavascript}`} />
        <span>JavaScript</span>
      </div>

      <div className={s.item}>
        <SiStorybook className={`${s.iconSize} ${s.siStorybook}`} />
        <span>Storybook</span>
      </div>

      <div className={s.item}>
        <BsGithub className={`${s.iconSize} ${s.bsGithub}`} />
        <span>Github</span>
      </div>

      <div className={s.item}>
        <img src={restApi} alt="Rest Api" className={s.restApi} />
        <span>Rest Api</span>
      </div>

      <div className={s.item}>
        <SiAxios className={`${s.iconSize} ${s.siAxios}`} />
        <span>Axios</span>
      </div>

      <div className={s.item}>
        <SiSocketdotio className={`${s.iconSize} ${s.siSocketdotio}`} />
        <span>WebSocket</span>
      </div>

      <div className={s.item}>
        <SiApollographql className={`${s.iconSize} ${s.siApollographql}`} />
        <span>Apollo</span>
      </div>

      <div className={s.item}>
        <GrGraphQl className={`${s.iconSize} ${s.grGraphQl}`} />
        <span>GraphQl</span>
      </div>

      <div className={s.item}>
        <AiOutlineHtml5 className={`${s.iconSize} ${s.aiOutlineHtml5}`} />
        <span>Html</span>
      </div>

      <div className={s.item}>
        <BsFiletypeCss className={`${s.iconSize} ${s.bsFiletypeCss}`} />
        <span>Css</span>
      </div>

      <div className={s.item}>
        <BsFiletypeScss className={`${s.iconSize} ${s.bsFiletypeScss}`} />
        <span>Scss</span>
      </div>

      <div className={s.item}>
        <BsBootstrap className={`${s.iconSize} ${s.bsBootstrap}`} />
        <span>Bootstrap</span>
      </div>

      <div className={s.item}>
        <img src={formik} alt="Formik" className={s.formik} />
        <span>Formik</span>
      </div>

      <div className={s.item}>
        <SiTestcafe className={`${s.iconSize} ${s.siTestcafe}`} />
        <span>Unit tests</span>
      </div>

      <div className={s.item}>
        <SiMaterialdesign className={`${s.iconSize} ${s.siMaterialdesign}`} />
        <span>Material UI</span>
      </div>
    </div>
  </section>
);
