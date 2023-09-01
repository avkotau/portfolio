import React from "react";
import s from "./Menu.module.scss";
import { MenuContent } from "common/components/Menu/MenuContent";

export const Menu = () => (
  <div className={s.menu}>
    <MenuContent />
  </div>
);
