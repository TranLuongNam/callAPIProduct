import React from "react";
import {} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductAcitonPage from "./pages/ProductActionPage";
import ProductListPage from "./pages/ProductListPage";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/product-list",
    exact: false,
    main: () => <ProductListPage />,
  },
  {
    path: "/product/add",
    exact: false,
    main: ({history}) => <ProductAcitonPage history={history} />,
  },
  {
    path: "/product/:id/edit",
    exact: false,
    main: ({match,history}) => <ProductAcitonPage match={match} history={history} />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />,
  },
];
export default routes;
