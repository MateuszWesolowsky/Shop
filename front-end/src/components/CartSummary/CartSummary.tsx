import styles from "./CartSummary.module.css";
import { FullWithButton } from "../FullWithButton/FullWithButton";
import CAR_ICON from "../../assets/car.svg";
import { ProductTypes } from "../../types/types";

interface Props {
  products: ProductTypes[];
}

export const CartSummary = ({ products }: Props) => {
  const deliveryCost = 49;
  const minSumForFreeDelivery = 500;

  const sum = products.reduce((acc, curr) => acc + curr.pricePLN, 0);

  const totalCost = sum > minSumForFreeDelivery ? sum : sum + deliveryCost;

  return (
    <div className={styles.cartSummary}>
      <h2>Podsumowanie</h2>
      <div className={styles.cartRow}>
        <p>Wartość produktów:</p>
        <p>{sum} zł</p>
      </div>
      <div className={styles.cartRow}>
        <p>Koszt dostawy:</p>
        <p>{sum > minSumForFreeDelivery ? 0 : deliveryCost}</p>
      </div>
      <div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
        <p>Do zapłaty:</p>
        <p>{totalCost} zł</p>
      </div>
      <FullWithButton isBlack onClick={() => console.log("x")}>
        DO KASY
      </FullWithButton>
      <div className={styles.deliveryInfo}>
        <img src={CAR_ICON} alt="Car icon" />
        <p>Darmowa dostawa od {minSumForFreeDelivery} zł</p>
      </div>
    </div>
  );
};
