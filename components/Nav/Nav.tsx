"use client";

import Icon from "@/components/ui/Icon/Icon";
import styles from "./Nav.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants/constants";

type NavProps = {
  onClose?: () => void;
};

const Nav = ({ onClose }: NavProps) => {
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navItems.map(({ href, label, icon }) => (
          <li className={styles.navItem} key={href}>
            <Link
              href={href}
              className={`${styles.navLink} ${
                pathname === href ? styles.active : ""
              }`}
              onClick={onClose}
            >
              <Icon
                width={24}
                height={24}
                name={icon}
                className={styles.navLinkIcon}
              />
              <span className={styles.navLinkText}>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
