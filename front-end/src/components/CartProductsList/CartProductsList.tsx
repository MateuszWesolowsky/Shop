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
        <h2>Ulubione</h2>
        <div>
          {products.map((el) => (
            <CartProduct key={el.id} product={el} />
          ))}
        </div>
      </div>
    </CenteredContent>
  );
};
