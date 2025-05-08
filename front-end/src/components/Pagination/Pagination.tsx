import styles from "./Pagination.module.css";
import { NavLink } from "react-router-dom";

interface Props {
  numberOfPages: number;
}

export const Pagination = ({ numberOfPages }: Props) => {
  const pages = Array(numberOfPages).fill(null);

  return (
    <ul className={styles.pagination}>
      {pages.map((_, index) => (
        <li key={index}>
          <NavLink to={`?page=${index + 1}`}>{index + 1}</NavLink>
        </li>
      ))}
    </ul>
  );
};
