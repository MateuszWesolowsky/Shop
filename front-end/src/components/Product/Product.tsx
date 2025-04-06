import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import { ProductTypes } from "../../types/types";

interface ProductProps {
  product: ProductTypes;
}

export const Product = ({ product }: ProductProps) => {
  return (
    <Link className={styles.product}>
      <img src={product.photos[0]} alt="Product photo" />
      <h3>{product.productName}</h3>
      <p>{product.pricePLN} zł</p>
      <div className={styles.heart}></div>
    </Link>
  );
};
