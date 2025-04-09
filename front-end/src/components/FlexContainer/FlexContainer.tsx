import { ReactNode } from "react";
import styles from "./FlexContainer.module.css";

interface Props {
  children: ReactNode;
}

export const FlexContainer = ({ children }: Props) => {
  return <div className={styles.flexContainer}>{children}</div>;
};
