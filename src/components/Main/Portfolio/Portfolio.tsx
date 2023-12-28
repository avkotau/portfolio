import React from "react";
import s from "components/Main//Portfolio/Portfolio.module.scss";
import flashCard from "../../../assets/images/myPhotoFlashCard.png";
import taskManager from "../../../assets/images/todolist.png";
import chat from "../../../assets/images/chat.png";
import devHub from "../../../assets/images/devHub.png";

const Fade = require("react-reveal/Fade");
export const Portfolio = () => (
  <section className={s.portfolio} id="portfolio">
    <h3 className={s.title}>Featured Projects</h3>
    <Fade left>
      <figure>
        <a href="https://avkotau.github.io/it-incubator-todolist-ts-toolkit">
          <img src={taskManager} alt={"Task manager"} />
        </a>
        <figcaption>
          <a href="https://avkotau.github.io/it-incubator-todolist-ts-toolkit">
            Task manager
          </a>
        </figcaption>
      </figure>
    </Fade>
    <Fade right>
      <figure>
        <a href="https://flashcards-learning.vercel.app">
          <img src={flashCard} alt={"Flash card"} />
        </a>
        <figcaption>
          <a href="https://flashcards-learning.vercel.app">Flash cards</a>
        </figcaption>
      </figure>
    </Fade>
    <Fade right>
      <figure>
        <a href="https://avkotau.github.io/samurai-way-ts-redux-api">
          <img src={chat} alt={"Chat"} />
        </a>
        <figcaption>
          <a href="https://avkotau.github.io/samurai-way-ts-redux-api">Chat</a>
        </figcaption>
      </figure>
    </Fade>
    <Fade right>
      <figure>
        <a href="https://avkotau.github.io/it-incubator-homeworks">
          <img src={devHub} alt={"DevChallenges Hub"} />
        </a>
        <figcaption>
          <a href="https://avkotau.github.io/it-incubator-homeworks">
            DevChallenges Hub
          </a>
        </figcaption>
      </figure>
    </Fade>
  </section>
);
