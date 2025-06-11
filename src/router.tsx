import { lazy } from "react";
import {
  createBrowserRouter
} from "react-router";

import Layout from "@/layouts/Layout";
import { action as newProductAction } from "@/utils/actions/newProduct";

const ProductsView = lazy(() => import("@/views/Products"));
const NewProductView = lazy(() => import("@/views/NewProduct"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProductsView />,
      },
      {
        path: "/new-product",
        element: <NewProductView />,
        action: newProductAction,
      },
    ],
  },
]);

export default router;
