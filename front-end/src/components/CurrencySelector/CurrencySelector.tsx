import styles from "./CurrencySelector.module.css";
import { CURRENCIES } from "../../constatns/currencies";

export const CurrencySelector = () => {
  return (
    <select className={styles.currencySelector} name="currency">
      <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
      <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
    </select>
  );
};
