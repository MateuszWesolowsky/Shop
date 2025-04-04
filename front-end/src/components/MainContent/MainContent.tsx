import { ReactNode } from "react";
import styles from "./MainContent.module.css";

interface Props {
  children: ReactNode;
}

export const MainContent = ({ children }: Props) => {
  return <div className={styles.mainContent}>{children}</div>;
};
