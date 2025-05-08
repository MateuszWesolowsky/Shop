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
import { ProductDetails } from "./views/ProductDetails/ProductDetails.tsx";
import { productLoader } from "./api/productLoader.ts";
import { addProductToFavouritesAction } from "./api/addProductToFavouritesAction.ts";
import { favouritesLoader } from "./api/favouritesLoader.ts";
import { deleteFavouriteAction } from "./api/deleteFavouriteAction.ts";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

const router = createBrowserRouter([
  {
    path: "/add-to-favourites/:productId",
    action: addProductToFavouritesAction,
  },
  {
    path: "/delete-from-favourites/:favouriteId",
    action: deleteFavouriteAction,
  },
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
        loader: favouritesLoader,
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
      {
        path: "/:gender/:category/:subcategory/:productId",
        element: <ProductDetails />,
        loader: productLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
