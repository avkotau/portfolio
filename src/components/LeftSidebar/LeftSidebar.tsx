import React from "react";
import s from "./LeftSidebar.module.scss";
import { Button } from "common/components/Button/Button";
import { ReactComponent as Tg } from "assets/images/socialMedia/tg.svg";
import { ReactComponent as Instagram } from "assets/images/socialMedia/instagram.svg";
import { ReactComponent as Whatsapp } from "assets/images/socialMedia/whatsapp.svg";
import { ReactComponent as Discord } from "assets/images/socialMedia/discord.svg";
import { ReactComponent as Slack } from "assets/images/socialMedia/slack.svg";
import { ReactComponent as Github } from "assets/images/socialMedia/github.svg";
import fakeFace from "assets/images/fakeFace.png";

export const LeftSidebar = () => {
  return (
    <div className={s.leftSidebar}>
      <span>Alexander</span>
      <img style={{ width: "350px" }} src={fakeFace} alt="Me" />
      <span>kotau.alexander@gmail.com</span>
      <span>Poland, Republic of Poland</span>
      <ul>
        <li>
          <Tg />
        </li>
        <li>
          <Discord />
        </li>
        <li>
          <Slack />
        </li>
        <li>
          <Instagram />
        </li>
        <li>
          <Whatsapp />
        </li>
        <li>
          <Github />
        </li>
      </ul>
      <Button text={"hear me!"} />
    </div>
  );
};
