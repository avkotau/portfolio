import React from "react";
import s from "components/Main/Resume/Resume.module.scss";

export const Resume = () => (
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
        <h2>Master Degree in Mechanical Engineering Technology</h2>
        <p>Vitebsk State Technological University(VSTU)</p>
      </div>
    </div>
  </section>
);
