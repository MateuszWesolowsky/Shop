import styles from "./CartProductsList.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { CartProduct } from "../CartProduct/CartProduct";

import { ProductTypes } from "../../types/types";

interface Props {
  products: ProductTypes[];
}

export const CartProductsList = ({ products }: Props) => {
  return (
    <CenteredContent>
      <div className={styles.favouritesList}>
        <h2>Koszyk</h2>
        <div>
          {products.map((el) => (
            <CartProduct key={Math.random() * 5} product={el} />
          ))}
        </div>
      </div>
    </CenteredContent>
  );
};
