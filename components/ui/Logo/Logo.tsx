import Link from "next/link";
import Icon from "../Icon/Icon";
import styles from "./Logo.module.css";

type LogoProps = {
  width: number;
  height: number;
};

const Logo = ({ width, height }: LogoProps) => {
  return (
    <Link href="/" className={styles.logoLink}>
      <Icon
        className={styles.logoLinkIcon}
        width={width}
        height={height}
        name="logo-stork"
      />
    </Link>
  );
};

export default Logo;
