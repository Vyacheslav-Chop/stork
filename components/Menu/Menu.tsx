import Nav from "../Nav/Nav";
import styles from "./Menu.module.css";
import Logo from "../ui/Logo/Logo";
import Button from "../ui/Button/Button";
import Icon from "../ui/Icon/Icon";

type MenuProps = {
  onClose: () => void;
};

const Menu = ({ onClose }: MenuProps) => {
  return (
    <div className={styles.menuWrap}>
      <div className={styles.menuHeader}>
        <Logo width={105} height={45} />
        <Button type="button" onClick={onClose} className={styles.closeBtn}>
          <Icon
            width={32}
            height={32}
            name="close"
            className={styles.closeBtnIcon}
          />
        </Button>
      </div>
      <Nav onClose={onClose} />
    </div>
  );
};

export default Menu;
