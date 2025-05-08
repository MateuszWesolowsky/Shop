import styles from "./CartProduct.module.css";
import { ProductTypes } from "../../types/types";
import DELETE from "../../assets/remove.svg";
import { Price } from "../Price/Price";

interface Props {
  product: ProductTypes;
}

export const CartProduct = ({ product }: Props) => {
  const price = <Price product={product} />;

  return (
    <div className={styles.favouriteProduct}>
      <img src={product.photos[0]} alt="Photo" />

      <div className={styles.favouriteProductInfo}>
        <div className={styles.topRow}>
          <h3>
            {product.brand} {product.productName}
          </h3>
          <p>{price}</p>
        </div>
        <p className={styles.priceRow}>
          <span>Cena: </span>
          {price}
        </p>
        <div className={styles.buttonRow}>
          <button>
            <img src={DELETE} alt="Delete Icon" />
            Usuń
          </button>
        </div>
      </div>
    </div>
  );
};
