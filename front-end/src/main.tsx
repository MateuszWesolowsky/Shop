import "./styles/theme.css";
import "./styles/globa.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./views/MainPage/MainPage.tsx";
import { Favourites } from "./views/Favourites/Favourites.tsx";
import { Cart } from "./views/Cart/Cart.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/ulubione",
    element: <Favourites />,
  },
  {
    path: "/koszyk",
    element: <Cart />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
