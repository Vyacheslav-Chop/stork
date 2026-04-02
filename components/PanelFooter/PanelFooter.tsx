import styles from "./PanelFooter.module.css";
import Image from "next/image";
import Icon from "../ui/Icon/Icon";

const PanelFooter = () => {
  return (
    <div className={styles.panelFooterWrap}>
      <div className={styles.userInfo}>
        <Image
          width={40}
          height={40}
          src="/images/profile/avatar_default.webp"
          alt="User Avatar"
          className={styles.userAvatar}
        />
        <div className={styles.userInner}>
          <p className={styles.userName}>Ім&apos;я</p>
          <p className={styles.userEmail}>Пошта</p>
        </div>
      </div>
      <button type="button" aria-label="Logout" className={styles.logoutBtn}>
        <Icon
          name="logout"
          width={24}
          height={24}
          className={styles.logoutBtnIcon}
        />
      </button>
    </div>
  );
};

export default PanelFooter;
