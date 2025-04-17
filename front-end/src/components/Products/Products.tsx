import styles from "./Products.module.css";
import { ProductTypes } from "../../types/types";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { Product } from "../Product/Product";

interface ProductsProps {
  products: ProductTypes[];
  headerText: string;
}

export const Products = ({ products, headerText }: ProductsProps) => {
  return (
    <CenteredContent>
      <h2 className={styles.bestSellersHeader}>{headerText}</h2>
      <div className={styles.productsWrapper}>
        {products.map((el) => {
          return <Product key={el.id} product={el} />;
        })}
      </div>
    </CenteredContent>
  );
};
