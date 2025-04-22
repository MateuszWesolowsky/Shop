import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { BACK_END_URL, PATH_TO_ENDPOINT_MAPPING } from "../constatns/api";

export const mainPageLoader = ({ params }: LoaderFunctionArgs) => {
  const backEndPath =
    PATH_TO_ENDPOINT_MAPPING[
      params.gender as keyof typeof PATH_TO_ENDPOINT_MAPPING
    ];

  if (backEndPath) {
    return fetch(`${BACK_END_URL}/${backEndPath}`);
  } else {
    return redirect("/kobieta");
  }
};
