import React from "react";
import s from "components/Main/Hero/Hero.module.scss";
import ReactTypingEffect from "react-typing-effect";
import { Link } from "react-scroll";
import imgFake from "assets/images/round-text.png";
import { BsArrowDown } from "react-icons/bs";

const Zoom = require("react-reveal/Zoom");
export const Hero = () => (
  <section className={s.hero} id="home">
    <h1 className={s.title}>
      Aliaksandr Kotau
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
          <img className={s.rotatingText} src={imgFake} alt="Rounded Text" />
          <BsArrowDown />
        </Link>
      </div>
    </Zoom>
  </section>
);
