import React, { FC } from "react";
import { Link } from "react-scroll";
import { AiOutlineHome, AiOutlineProject, AiOutlineUser } from "react-icons/ai";
import { PiBriefcase } from "react-icons/pi";
import { BiBrain } from "react-icons/bi";
import { LuContact } from "react-icons/lu";
import s from "./MenuContent.module.scss";

type Props = {
  setMenuOpen?: (value: boolean) => void;
};

export const MenuContent: FC<Props> = ({ setMenuOpen }) => (
  <ul>
    <li>
      <Link
        activeClass="home"
        className={s.menu}
        to="home"
        spy={true}
        smooth={true}
        ignoreCancelEvents={true}
        offset={-200}
        duration={500}
        onClick={setMenuOpen ? () => setMenuOpen(false) : undefined}
      >
        <AiOutlineHome />
        <span>Home</span>
      </Link>
    </li>
    <li>
      <Link
        activeClass="about"
        className={s.menu}
        to="about"
        spy={true}
        smooth={true}
        ignoreCancelEvents={true}
        offset={-200}
        duration={500}
        onClick={setMenuOpen ? () => setMenuOpen(false) : undefined}
      >
        <AiOutlineUser />
        <span>About</span>
      </Link>
    </li>
    <li>
      <Link
        activeClass="resume"
        className={s.menu}
        to="resume"
        spy={true}
        smooth={true}
        ignoreCancelEvents={true}
        offset={-200}
        duration={500}
        onClick={setMenuOpen ? () => setMenuOpen(false) : undefined}
      >
        <PiBriefcase />
        <span>Resume</span>
      </Link>
    </li>
    <li>
      <Link
        activeClass="skills"
        className={s.menu}
        to="skills"
        spy={true}
        smooth={true}
        ignoreCancelEvents={true}
        offset={-200}
        duration={500}
        onClick={setMenuOpen ? () => setMenuOpen(false) : undefined}
      >
        <BiBrain />
        <span>Skills</span>
      </Link>
    </li>
    <li>
      <Link
        activeClass="portfolio"
        className={s.menu}
        to="portfolio"
        spy={true}
        smooth={true}
        ignoreCancelEvents={true}
        offset={-200}
        duration={500}
        onClick={setMenuOpen ? () => setMenuOpen(false) : undefined}
      >
        <AiOutlineProject />
        <span>Portfolios</span>
      </Link>
    </li>
    <li>
      <Link
        activeClass="contact"
        className={s.menu}
        to="contact"
        spy={true}
        smooth={true}
        ignoreCancelEvents={true}
        offset={-200}
        duration={500}
        onClick={setMenuOpen ? () => setMenuOpen(false) : undefined}
      >
        <LuContact />
        <span>Contact</span>
      </Link>
    </li>
  </ul>
);
