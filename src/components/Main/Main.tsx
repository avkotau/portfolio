import React from "react";
import s from "./Main.module.scss";
import { Form } from "components/Form/Form";
import { Hero } from "components/Main/Hero/Hero";
import { About } from "components/Main/About/About";
import { Resume } from "components/Main/Resume/Resume";
import { Skills } from "components/Main/Skills/Skills";
import { Portfolio } from "components/Main/Portfolio/Portfolio";

export const Main = () => (
  <div className={s.main}>
    <Hero />
    <About />
    <Resume />
    <Skills />
    <Portfolio />
    <Form />
  </div>
);
