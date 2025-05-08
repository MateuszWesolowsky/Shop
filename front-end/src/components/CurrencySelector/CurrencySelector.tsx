import styles from "./CurrencySelector.module.css";
import { CURRENCIES } from "../../constatns/currencies";
import {} from "react-redux";
import { useDispatch } from "react-redux";
import { changeCurrency } from "../../store/currencySlice";
import { Currency } from "../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const CurrencySelector = () => {
  const dispatch = useDispatch();
  const currency = useSelector(
    (state: RootState) => state.currency.currencyValue
  );

  return (
    <select
      value={currency}
      onChange={(e) => {
        dispatch(changeCurrency(e.currentTarget.value as Currency));
        localStorage["selected_currency"] = e.currentTarget.value;
      }}
      className={styles.currencySelector}
      name="currency"
    >
      <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
      <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
    </select>
  );
};
