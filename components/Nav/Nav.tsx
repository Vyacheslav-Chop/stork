import Icon from "@/components/ui/Icon/Icon";
import styles from "./Nav.module.css";
import Link from "next/link";

type NavProps = {
  onClose?: () => void;
};

const Nav = ({ onClose }: NavProps) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink} onClick={onClose}>
            <Icon
              width={24}
              height={24}
              name="today"
              className={styles.navLinkIcon}
            />
            <span className={styles.navLinkText}>Мій день</span>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink} onClick={onClose}>
            <Icon
              width={24}
              height={24}
              name="conversion_path"
              className={styles.navLinkIcon}
            />
            <span className={styles.navLinkText}>Подорож</span>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink} onClick={onClose}>
            <Icon
              width={24}
              height={24}
              name="book_2"
              className={styles.navLinkIcon}
            />
            <span className={styles.navLinkText}>Щоденник</span>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink} onClick={onClose}>
            <Icon
              width={24}
              height={24}
              name="account_circle"
              className={styles.navLinkIcon}
            />
            <span className={styles.navLinkText}>Профіль</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
