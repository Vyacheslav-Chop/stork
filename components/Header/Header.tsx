import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Link href="/" className={styles.logoLink}>
        <svg className={styles.logoLinkIcon} width={84} height={36}>
          <use href="/icons/icons.svg#logo-stork"></use>
        </svg>
      </Link>
      <button className={styles.menuBtn}>
        <svg className={styles.menuBtnIcon} width={32} height={32}>
          <use href="/public/icons/icons.svg#menu"></use>
        </svg>
      </button>
    </div>
  );
};

export default Header;
