import styles from "./BestSellers.module.css";
import { ProductTypes } from "../../types/types";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { Product } from "../Product/Product";

interface ProductsProps {
  products: ProductTypes[];
}

export const BestSellers = ({ products }: ProductsProps) => {
  return (
    <CenteredContent>
      <h2 className={styles.bestSellersHeader}>Sprawdź nasze bestellery</h2>
      <div className={styles.productsWrapper}>
        {products.map((el) => {
          return <Product key={el.id} product={el} />;
        })}
      </div>
    </CenteredContent>
  );
};
