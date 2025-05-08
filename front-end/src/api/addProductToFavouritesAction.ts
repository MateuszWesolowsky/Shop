import { ActionFunctionArgs } from "react-router-dom";
import { BACK_END_URL } from "../constatns/api";

export const addProductToFavouritesAction = ({
  params: { productId },
}: ActionFunctionArgs) => {
  return fetch(`${BACK_END_URL}/favourites`, {
    method: "POST",
    body: JSON.stringify({
      productId: Number(productId),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
