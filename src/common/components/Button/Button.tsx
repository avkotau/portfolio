import s from "./Button.module.scss";
import { Link } from "react-scroll";

export const Button = (props: { text: string }) => {
  return (
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
      {props.text}
    </Link>
  );
};
