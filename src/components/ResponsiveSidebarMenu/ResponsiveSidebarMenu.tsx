import React, { useState } from "react";
import s from "./ResponsiveSidebarMenu.module.scss";
import { MenuContent } from "../../common/components/Menu/MenuContent";

export const ResponsiveSidebarMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (e: any) => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      {menuOpen && <div className={s.background} onClick={toggleMenu} />}
      <div>
        {!menuOpen && (
          <button
            className={s.iconMenu}
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            &#9776;
          </button>
        )}
        <div className={`${s.sidebar} ${menuOpen ? s.open : ""}`}>
          <div className={s.menuWrap}>
            <p>Menu</p>
            <MenuContent setMenuOpen={setMenuOpen} />
          </div>
        </div>
      </div>
    </>
  );
};
