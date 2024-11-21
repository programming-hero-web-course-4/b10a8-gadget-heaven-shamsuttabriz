import { createBrowserRouter } from "react-router-dom";
import ProductCards from "../components/ProductCards";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Statistics from "../pages/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <ProductCards />,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/category/:category",
            element: <ProductCards />,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/product/:product_id",
        element: <ProductDetails />,
        loader: () => fetch("../products.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
