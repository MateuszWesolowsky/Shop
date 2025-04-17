import styles from "./Photos.module.css";
import { ProductTypes } from "../../types/types";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import { useState } from "react";

interface Props {
  product: ProductTypes;
}

export const Photos = ({ product }: Props) => {
  const [currentPhoto, setCurrentPhoto] = useState(product.photos[0]);

  return (
    <FlexContainer>
      <div className={styles.thumbnails}>
        {product.photos.map((photo) => (
          <img
            onClick={() => setCurrentPhoto(photo)}
            className={currentPhoto === photo ? styles.active : ""}
            key={photo}
            src={photo}
            alt={photo}
          />
        ))}
      </div>
      <img className={styles.mainPhoto} src={currentPhoto} alt="Main photo" />
    </FlexContainer>
  );
};
