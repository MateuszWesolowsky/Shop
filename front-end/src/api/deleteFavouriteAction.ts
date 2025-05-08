import { ActionFunctionArgs } from "react-router-dom";
import { BACK_END_URL } from "../constatns/api";

export const deleteFavouriteAction = ({ params }: ActionFunctionArgs) => {
  return fetch(`${BACK_END_URL}/favourites/${params.favouriteId}`, {
    method: "DELETE",
  });
};
