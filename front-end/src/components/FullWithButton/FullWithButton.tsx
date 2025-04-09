import { ReactNode } from "react";
import styles from "./FullWithButton.module.css";

interface Props {
  children: ReactNode;
  isBlack: boolean;
  onClick: () => void;
}

export const FullWithButton = ({ children, onClick, isBlack }: Props) => {
  return (
    <button
      className={`${styles.button} ${isBlack ? styles.black : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
