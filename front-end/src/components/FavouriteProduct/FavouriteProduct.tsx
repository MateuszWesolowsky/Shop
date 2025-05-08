import styles from "./FavouriteProduct.module.css";
import DELETE from "../../assets/remove.svg";
import CART from "../../assets/bag.svg";
import { FavouriteProductTypes } from "../../types/types";
import { useFetcher } from "react-router-dom";
import { Price } from "../Price/Price";
import { addProductToCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

interface Props {
  favourite: FavouriteProductTypes;
}

export const FavouriteProduct = ({ favourite }: Props) => {
  const dispatch = useDispatch();
  const { Form } = useFetcher();

  const product = favourite.product;
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
          <Form
            action={`/delete-from-favourites/${favourite.id}`}
            method="DELETE"
          >
            <button>
              <img src={DELETE} alt="Delete Icon" />
              Usuń
            </button>
          </Form>
          <button onClick={() => dispatch(addProductToCart(product))}>
            <img src={CART} alt="Cart Icon" />
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  );
};
