import { NavLink, useParams } from "react-router-dom";
import styles from "./CategoryMenu.module.css";
import { CATEGORIES } from "../../constatns/categories";

export const CategoryMenu = () => {
  const params = useParams();

  return (
    <div className={styles.categoryMeny}>
      <ul>
        {CATEGORIES.map((el) => (
          <li key={el.path}>
            <NavLink to={`${params.gender}/${el.path}`}>
              {el.categoryName}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
