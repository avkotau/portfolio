import s from "./Button.module.scss";
import { Link } from "react-scroll";
import { FC } from "react";

type Props = {
  text: string;
};

export const Button: FC<Props> = ({ text }) => (
  <Link
    activeClass="home"
    className={s.themeBtn}
    to="home"
    spy={true}
    smooth={true}
    ignoreCancelEvents={true}
    offset={-200}
    duration={500}
  >
    {text}
  </Link>
);
