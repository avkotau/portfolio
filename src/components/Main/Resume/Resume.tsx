import React from "react";
import s from "components/Main/Resume/Resume.module.scss";

export const Resume = () => (
  <section className={s.resume} id="resume">
    <h3 className={s.title}>Education & Experience</h3>
    <div className={s.educationWork}>
      <div>
        <span>2024</span>
        <h2>React Native Developer</h2>
        <p>Mook LTD</p>
      </div>
      <div>
        <span>2023</span>
        <h2>React Native Developer</h2>
        <p>Intry</p>
      </div>
      <div>
        <span>2022</span>
        <h2>Front-End Developer</h2>
        <p>IT-INCUBATOR</p>
      </div>
      <div>
        <span>2021</span>
        <h2>Learning English</h2>
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
