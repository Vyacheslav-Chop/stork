"use client";

import Link from "next/link";
import styles from "./Breadcrumbs.module.css";
import { APP_NAME, navItems } from "@/constants/constants";
import Icon from "../ui/Icon/Icon";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const current = navItems.find((item) => item.href === pathname);
  return (
    <section className={styles.breadcrumbs}>
      <div className={styles.container}>
        <Link href="/" className={styles.homeLink}>
          {APP_NAME}
        </Link>
        {current && (
          <div className={styles.separatorWrap}>
            <Icon name="arrow" width={24} height={24} className={styles.icon} />
            <span className={styles.currentLabel}>{current.label}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Breadcrumbs;
