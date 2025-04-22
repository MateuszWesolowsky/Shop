import { Hero } from "../../components/Hero/Hero";
import { Products } from "../../components/Products/Products";

import { useLoaderData } from "react-router-dom";

export const MainPage = () => {
  const { bestsellers, heroImageUrl } = useLoaderData();

  return (
    <>
      <Hero heroImage={heroImageUrl} />
      <Products products={bestsellers} headerText="Sprawdź nasze bestellery" />
    </>
  );
};
