import styles from "./Details.module.css";
import CAR_ICON from "../../assets/car.svg";
import RETURN_ICON from "../../assets/return.svg";
import { ProductTypes } from "../../types/types";
import { FullWithButton } from "../FullWithButton/FullWithButton";
import { Accordion } from "../Accordion/Accordion";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../store/cartSlice";

interface Props {
  product: ProductTypes;
}

export const Details = ({ product }: Props) => {
  const dispatch = useDispatch();

  const accordionContent = [
    { title: "Opis produktu", content: product.description },
    { title: "Wskazówki pielęgnacyjne", content: product.maintenanceInfo },
  ];

  return (
    <div className={styles.details}>
      <h2>{product.brand}</h2>
      <p className={styles.productName}>{product.productName}</p>
      <p className={styles.price}>{product.pricePLN}zł</p>
      <FullWithButton
        onClick={() => dispatch(addProductToCart(product))}
        isBlack
      >
        Dodaj do koszyka
      </FullWithButton>
      <ul className={styles.extraInfo}>
        <li>
          <img src={CAR_ICON} alt="Car icon" />
          Dostawa do 24h
        </li>
        <li>
          <img src={RETURN_ICON} alt="Return icon" />
          Zwrot do 100 dni
        </li>
      </ul>
      <Accordion items={accordionContent} />
    </div>
  );
};
