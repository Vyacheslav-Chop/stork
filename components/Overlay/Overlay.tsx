"use client";

import React, { useEffect } from "react";
import styles from "./Overlay.module.css";
import { createPortal } from "react-dom";

type OverlayProps = {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
};

const Overlay = ({ children, onClose, isOpen }: OverlayProps) => {
  const handleClickBackdrop = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (ev.target === ev.currentTarget) onClose();
  };

  useEffect(() => {
    const handleKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") onClose();
      document.body.style.overflow = "hidden";
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      className={`${styles.backdrop} ${isOpen ? styles.open : ""}`}
      onClick={handleClickBackdrop}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.modalWrap}>{children}</div>
    </div>,
    document.body,
  );
};

export default Overlay;
