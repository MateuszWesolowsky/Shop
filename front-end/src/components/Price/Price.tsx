import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { CURRENCIES, CURRENCY_SIGN } from "../../constatns/currencies";
import { ProductTypes } from "../../types/types";

interface Props {
  product: ProductTypes;
}

export const Price = ({ product }: Props) => {
  const currency = useSelector(
    (state: RootState) => state.currency.currencyValue
  );

  return (
    <>
      {currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD}{" "}
      {CURRENCY_SIGN[currency]}
    </>
  );
};
