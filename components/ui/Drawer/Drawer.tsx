import React from "react";
import styles from "./Drawer.module.css";

type DrawerProps = {
  children: React.ReactNode;
  isOpen: boolean;
  position?: "left" | "right";
};

const Drawer = ({ children, isOpen, position = "left" }: DrawerProps) => {
  return (
    <div
      className={`
        ${styles.drawer}
        ${styles[position]}
        ${isOpen ? styles.open : ""}
      `}
    >
      {children}
    </div>
  );
};

export default Drawer;
