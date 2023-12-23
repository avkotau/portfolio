import React from "react";
import s from "./LeftSidebar.module.scss";
import { Button } from "common/components/Button/Button";
import { ReactComponent as Tg } from "assets/images/socialMedia/tg.svg";
import { ReactComponent as Instagram } from "assets/images/socialMedia/instagram.svg";
import { ReactComponent as Whatsapp } from "assets/images/socialMedia/whatsapp.svg";
import { ReactComponent as Discord } from "assets/images/socialMedia/discord.svg";
import { ReactComponent as Slack } from "assets/images/socialMedia/slack.svg";
import { ReactComponent as Github } from "assets/images/socialMedia/github.svg";
import ava from "assets/images/ava.png";
import { Tilt } from "react-tilt";

export const LeftSidebar = () => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <div className={s.leftSidebar}>
      <span>Profile</span>
      <Tilt options={defaultOptions}>
        <img src={ava} alt="Me" />
      </Tilt>
      <span>kotau.alexander@gmail.com</span>
      <span>Poland, Republic of Poland</span>
      <ul>
        <li>
          <a
            href="https://t.me/alexanderkotau"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Tg />
          </a>
        </li>
        <li>
          <a
            href="https://discord.com/users/sir_alex1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Discord />
          </a>
        </li>
        <li>
          <a
            href="https://slack.com/your_workspace"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Slack />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/your_username/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Whatsapp />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </li>
      </ul>
      <Button text={"hear me!"} />
    </div>
  );
};
