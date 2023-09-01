import React from "react";
import s from "components/Main//Portfolio/Portfolio.module.scss";

const Fade = require("react-reveal/Fade");
export const Portfolio = () => (
  <section className={s.portfolio} id="portfolio">
    <h3 className={s.title}>Featured Projects</h3>
    <Fade left>
      <figure>
        <a href="https://hrautoglass.com/wp-content/themes/eshg/images/placeholder/700x400.gif">
          <img
            src="https://hrautoglass.com/wp-content/themes/eshg/images/placeholder/700x400.gif"
            alt=""
          />
        </a>
        <figcaption>
          <a href="https://hrautoglass.com/wp-content/themes/eshg/images/placeholder/700x400.gif">
            name project
          </a>
        </figcaption>
      </figure>
    </Fade>
    <Fade right>
      <figure>
        <a href="https://hrautoglass.com/wp-content/themes/eshg/images/placeholder/700x400.gif">
          <img
            src="https://hrautoglass.com/wp-content/themes/eshg/images/placeholder/700x400.gif"
            alt=""
          />
        </a>
        <figcaption>
          <a href="https://hrautoglass.com/wp-content/themes/eshg/images/placeholder/700x400.gif">
            name project
          </a>
        </figcaption>
      </figure>
    </Fade>
  </section>
);
