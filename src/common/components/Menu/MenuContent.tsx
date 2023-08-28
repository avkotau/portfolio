import React from "react";
import { Link } from "react-scroll";
import { AiOutlineHome, AiOutlineProject, AiOutlineUser } from "react-icons/ai";
import { PiBriefcase } from "react-icons/pi";
import { BiBrain } from "react-icons/bi";
import { LuContact } from "react-icons/lu";

type MenuContentProps = {
  setMenuOpen?: (value: boolean) => void;
};

export const MenuContent = ({ setMenuOpen }: MenuContentProps) => (
  <ul className={""}>
    <li>
      <Link
        style={{ fontSize: 20 }}
        activeClass="home"
        className={"scrollTo"}
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
        style={{ fontSize: 20 }}
        activeClass="about"
        className={"scrollTo"}
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
        style={{ fontSize: 20 }}
        activeClass="resume"
        className={"scrollTo"}
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
        style={{ fontSize: 20 }}
        activeClass="skills"
        className={"scrollTo"}
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
        style={{ fontSize: 20 }}
        activeClass="portfolio"
        className={"scrollTo"}
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
        style={{ fontSize: 20 }}
        activeClass="contact"
        className={"scrollTo"}
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
