import { ReactNode } from "react";
import styles from "./FullWithButton.module.css";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

export const FullWithButton = ({ children, onClick }: Props) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
