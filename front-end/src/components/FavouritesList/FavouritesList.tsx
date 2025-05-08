import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";
import styles from "./FavouritesList.module.css";

import { FavouriteProductTypes } from "../../types/types";

interface Props {
  favourites: FavouriteProductTypes[];
}

export const FavouritesList = ({ favourites }: Props) => {
  return (
    <CenteredContent>
      <div className={styles.favouritesList}>
        <h2>Ulubione</h2>
        <div>
          {favourites.map((favourite) => (
            <FavouriteProduct key={favourite.id} favourite={favourite} />
          ))}
        </div>
      </div>
    </CenteredContent>
  );
};
