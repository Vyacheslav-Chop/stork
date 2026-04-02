import Link from "next/link";
import Icon from "../Icon/Icon";

type LogoProps = {
  width: number;
  height: number;
};

const Logo = ({ width, height }: LogoProps) => {
  return (
    <Link href="/">
      <Icon width={width} height={height} name="logo-stork" />
    </Link>
  );
};

export default Logo;
