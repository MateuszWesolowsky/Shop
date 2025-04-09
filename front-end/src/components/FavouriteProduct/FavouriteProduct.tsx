import styles from "./FavouriteProduct.module.css";
import DELETE from "../../assets/remove.svg";
import CART from "../../assets/bag.svg";
import { ProductTypes } from "../../types/types";

interface Props {
  product: ProductTypes;
}

export const FavouriteProduct = ({ product }: Props) => {
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
          <button>
            <img src={CART} alt="Cart Icon" />
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  );
};
