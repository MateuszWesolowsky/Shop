import styles from "./ExpandableMenu.module.css";
import { CATEGORIES } from "../../constatns/categories";
import ARROW_ICON from "../../assets/arrow.png";
import { NavLink } from "react-router-dom";

export const ExpandableMenu = () => {
  const activePanth = "odziez";

  return (
    <div className={styles.expandableMenu}>
      <p>Kobieta</p>
      <ul>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.path}>
              <NavLink to={category.path}>
                {category.categoryName}{" "}
                <img
                  src={ARROW_ICON}
                  className={
                    activePanth === category.path ? "" : styles.expanded
                  }
                  alt="Arrown icon"
                />
              </NavLink>
              {activePanth === category.path && (
                <ul>
                  {category.subcategories.map((subcategory) => {
                    return (
                      <li key={subcategory.path}>
                        <NavLink to={subcategory.path}>
                          {subcategory.categoryName}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
