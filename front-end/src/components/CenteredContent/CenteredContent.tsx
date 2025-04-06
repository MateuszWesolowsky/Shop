import { ReactNode } from "react";
import styles from "./CenteredContent.module.css";

interface Props {
  children: ReactNode;
}

export const CenteredContent = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
};
