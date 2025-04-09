import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";
import styles from "./FavouritesList.module.css";

import { ProductTypes } from "../../types/types";

interface Props {
  products: ProductTypes[];
}

export const FavouritesList = ({ products }: Props) => {
  return (
    <CenteredContent>
      <div className={styles.favouritesList}>
        <h2>Ulubione</h2>
        <div>
          {products.map((el) => (
            <FavouriteProduct key={el.id} product={el} />
          ))}
        </div>
      </div>
    </CenteredContent>
  );
};
