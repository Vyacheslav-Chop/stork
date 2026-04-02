"use client";

import { useState } from "react";
import styles from "./Header.module.css";
import Overlay from "../Overlay/Overlay";
import Menu from "../Menu/Menu";
import Icon from "../ui/Icon/Icon";
import Button from "../ui/Button/Button";
import Logo from "../ui/Logo/Logo";
import Drawer from "../ui/Drawer/Drawer";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const open = () => setOpenMenu(true);
  const close = () => setOpenMenu(false);

  return (
    <div className={styles.headerContainer}>
      <Logo width={84} height={36} />

      <Button className={styles.menuBtn} onClick={open} type="button">
        <Icon
          className={styles.menuBtnIcon}
          width={32}
          height={32}
          name="menu"
        />
      </Button>

      <Overlay onClose={close} isOpen={openMenu}>
        <Drawer isOpen={openMenu}>
          <Menu onClose={close} />
        </Drawer>
      </Overlay>
    </div>
  );
};

export default Header;
