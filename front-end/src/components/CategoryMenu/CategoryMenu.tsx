import { NavLink } from "react-router-dom";
import styles from "./CategoryMenu.module.css";
import { CATEGORIES } from "../../constatns/categories";

export const CategoryMenu = () => {
  return (
    <div className={styles.categoryMeny}>
      <ul>
        {CATEGORIES.map((el) => (
          <li key={el.path}>
            <NavLink to={el.path}>{el.categoryName}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
