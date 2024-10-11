import React from "react";
import s from "components/Main//About/About.module.scss";

export const About = () => (
  <section className={s.about} id="about">
    <div className={s.wrapContent}>
      <h3 className={s.title}>About me</h3>
      <p className={s.text}>
        Hello! I'm a frontend developer with 2 years experience creating SPAs
        using React, React Native, Redux, TypeScript, along with profound
        knowledge in SCSS, HTML, and JavaScript. I deep understanding of modern
        technologies and web development standards. I possess knowledge in user
        interface design, as well as testing and debugging processes. In my free
        time, I solve tasks on Codewars and improve my English. I'm committed to
        continuous improvement and learning new tools to craft efficient and
        innovative solutions. Teamwork is more than just a word to me: I firmly
        believe that collaboration and knowledge sharing are keys to achieving
        outstanding results. Currently, I'm seeking opportunities to apply my
        skills in a team that sets ambitious goals and values quality. I'm open
        to both project-based work and full-time employment. I’m ready to
        cooperate!
      </p>
    </div>
  </section>
);
