import styles from "./ExpandableMenu.module.css";
import { CATEGORIES } from "../../constatns/categories";
import ARROW_ICON from "../../assets/arrow.png";
import { NavLink, useParams } from "react-router-dom";

const PATH_TO_GENDER_NAME = {
  kobieta: "Kobieta",
  mezczyzna: "Mężczyzna",
  dziecko: "Dziecko",
};

export const ExpandableMenu = () => {
  const params = useParams();
  const activePanth = params.category;

  const genderLabel =
    PATH_TO_GENDER_NAME[params.gender as keyof typeof PATH_TO_GENDER_NAME];

  return (
    <div className={styles.expandableMenu}>
      <p>{genderLabel}</p>
      <ul>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.path}>
              <NavLink to={`/${params.gender}/${category.path}`}>
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
                        <NavLink
                          to={`/${params.gender}/${params.category}/${subcategory.path}`}
                        >
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
