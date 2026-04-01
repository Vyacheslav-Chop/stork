"use client";

import { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Overlay from "../Overlay/Overlay";
import Menu from "../Menu/Menu";
import Icon from "../ui/Icon/Icon";
import Button from "../ui/Button/Button";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const open = () => setOpenMenu(true);
  const close = () => setOpenMenu(false);

  return (
    <div className={styles.headerContainer}>
      <Link href="/" className={styles.logoLink}>
        <Icon
          className={styles.logoLinkIcon}
          width={84}
          height={36}
          name="logo-stork"
        />
      </Link>

      <Button className={styles.menuBtn} onClick={open} type="button">
        <Icon
          className={styles.menuBtnIcon}
          width={32}
          height={32}
          name="menu"
        />
      </Button>

      <Overlay onClose={close} isOpen={openMenu}>
        <Menu />
      </Overlay>
    </div>
  );
};

export default Header;
