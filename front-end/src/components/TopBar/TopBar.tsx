import styles from "./TopBar.module.css";

interface Props {
  children: React.ReactNode;
}

export const TopBar = ({ children }: Props) => {
  return <div className={styles.topBar}>{children}</div>;
};
