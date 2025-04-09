import styles from "./CartProduct.module.css";
import { ProductTypes } from "../../types/types";
import DELETE from "../../assets/remove.svg";

interface Props {
  product: ProductTypes;
}

export const CartProduct = ({ product }: Props) => {
  return (
    <div className={styles.favouriteProduct}>
      <img src={product.photos[0]} alt="Photo" />

      <div className={styles.favouriteProductInfo}>
        <div className={styles.topRow}>
          <h3>
            {product.brand} {product.productName}
          </h3>
          <p>{product.pricePLN}zł</p>
        </div>
        <p className={styles.priceRow}>
          <span>Cena: </span>
          {product.pricePLN}zł
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
