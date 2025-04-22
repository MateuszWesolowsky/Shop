import "./styles/theme.css";
import "./styles/globa.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./views/MainPage/MainPage.tsx";
import { Favourites } from "./views/Favourites/Favourites.tsx";
import { Cart } from "./views/Cart/Cart.tsx";
import { Layout } from "./components/Layout/Layout.tsx";
import { mainPageLoader } from "./api/mainPageLoader.ts";
import { ProductsList } from "./views/ProductsList/ProductsList.tsx";
import { productListLoader } from "./api/productListLoader.ts";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/koszyk",
        element: <Cart />,
      },
      {
        path: "/ulubione",
        element: <Favourites />,
      },
      {
        path: "/:gender?",
        element: <MainPage />,
        loader: mainPageLoader,
      },
      {
        path: "/:gender/:category/:subcategory?",
        element: <ProductsList />,
        loader: productListLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
