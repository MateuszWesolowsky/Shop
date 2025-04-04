import styles from "./IconMenu.module.css";
import { Link } from "react-router-dom";

import BAG_ICON from "../../assets/bag.svg";
import HEART from "../../assets/heart.svg";

export const IconMenu = () => {
  return (
    <ul className={styles.iconMenu}>
      <li>
        <Link to="/ulubione">
          <img src={HEART} alt="Ulubione" />
        </Link>
      </li>
      <li>
        <Link to="/koszyk">
          <img src={BAG_ICON} alt="Koszyk" />
          <div className={styles.cartItems}>2</div>
        </Link>
      </li>
    </ul>
  );
};
