import styles from "./Breadcrumbs.module.css";
import ARROW_ICON from "../../assets/arrow.png";
import { NavLink } from "react-router-dom";

export const Breadcrumbs = () => {
  const breadcrumbs = [
    {
      categoryName: "Kobieta",
      path: "kobieta",
    },
    {
      categoryName: "Odzież",
      path: "odziez",
    },
    {
      categoryName: "Swetry",
      path: "swetry",
    },
  ];

  return (
    <ul className={styles.breadcrumbs}>
      {breadcrumbs.map((breadcumb) => (
        <li key={breadcumb.path}>
          <NavLink to={breadcumb.path}>
            {breadcumb.categoryName} <img src={ARROW_ICON} alt="Arrow icon" />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
