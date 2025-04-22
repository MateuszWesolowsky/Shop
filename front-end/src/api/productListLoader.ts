import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { BACK_END_URL, PATH_TO_ENDPOINT_MAPPING } from "../constatns/api";
import { CATEGORIES } from "../constatns/categories";

export const productListLoader = ({ params }: LoaderFunctionArgs) => {
  const { gender, category, subcategory } = params;

  const foundCategory = CATEGORIES.find((c) => c.path === category);
  const foundGender =
    PATH_TO_ENDPOINT_MAPPING[gender as keyof typeof PATH_TO_ENDPOINT_MAPPING];

  if (foundGender && foundCategory) {
    let url = `${BACK_END_URL}/products/?gender=${foundGender}&category=${category}`;

    if (subcategory) {
      const foundSubcategory = foundCategory.subcategories.find(
        (sc) => sc.path === subcategory
      );

      if (foundSubcategory) {
        url = `${url}&subcategory=${subcategory}`;
      } else {
        redirect("/kobieta");
      }
    }

    return fetch(url);
  } else {
    return redirect("/kobieta");
  }
};
