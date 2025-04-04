import { GENDERS } from "../../constatns/categories";
import styles from "./MainMenu.module.css";
import { NavLink } from "react-router-dom";

export const MainMenu = () => (
  <ul className={styles.menu}>
    {GENDERS.map((el) => (
      <li key={el.path}>
        <NavLink to={el.path}>{el.categoryName}</NavLink>
      </li>
    ))}
  </ul>
);
