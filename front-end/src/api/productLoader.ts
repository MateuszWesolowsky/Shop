import { LoaderFunctionArgs } from "react-router-dom";
import { BACK_END_URL } from "../constatns/api";

export const productLoader = ({
  params: { productId },
}: LoaderFunctionArgs) => {
  return fetch(`${BACK_END_URL}/products/${productId}`);
};
