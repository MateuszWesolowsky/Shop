import styles from "./CartSummary.module.css";
import { FullWithButton } from "../FullWithButton/FullWithButton";
import CAR_ICON from "../../assets/car.svg";
import { ProductTypes } from "../../types/types";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { CURRENCIES, CURRENCY_SIGN } from "../../constatns/currencies";

interface Props {
  products: ProductTypes[];
}

export const CartSummary = ({ products }: Props) => {
  const currency = useSelector(
    (state: RootState) => state.currency.currencyValue
  );

  const deliveryCosts = {
    [CURRENCIES.USD]: 10,
    [CURRENCIES.PLN]: 49,
  };

  const minSumsForFreeDelivery = {
    [CURRENCIES.USD]: 100,
    [CURRENCIES.PLN]: 500,
  };

  const currencySign = CURRENCY_SIGN[currency];

  const deliveryCost = deliveryCosts[currency];
  const minSumForFreeDelivery = minSumsForFreeDelivery[currency];

  const sum = products.reduce((acc, product) => {
    return (
      acc + (currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD)
    );
  }, 0);

  const totalCost = sum > minSumForFreeDelivery ? sum : sum + deliveryCost;

  return (
    <div className={styles.cartSummary}>
      <h2>Podsumowanie</h2>
      <div className={styles.cartRow}>
        <p>Wartość produktów:</p>
        <p>
          {sum} {currencySign}
        </p>
      </div>
      <div className={styles.cartRow}>
        <p>Koszt dostawy:</p>
        <p>
          {sum > minSumForFreeDelivery ? 0 : deliveryCost} {currencySign}
        </p>
      </div>
      <div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
        <p>Do zapłaty:</p>
        <p>
          {totalCost} {currencySign}
        </p>
      </div>
      <FullWithButton isBlack onClick={() => console.log("x")}>
        DO KASY
      </FullWithButton>
      <div className={styles.deliveryInfo}>
        <img src={CAR_ICON} alt="Car icon" />
        <p>
          Darmowa dostawa od {minSumForFreeDelivery} {currencySign}
        </p>
      </div>
    </div>
  );
};
