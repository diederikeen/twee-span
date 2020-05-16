import App from "../components/App/App";
import Homepage from "../components/Homepage/Homepage";
import CategorySingle from "../components/CategorySingle/CategorySingle";
import ProductSingleContainer from "../components/ProductSingle/ProductSingleContainer";
import CheckoutContainer from "../components/Checkout/CheckoutContainer";

const routes = [
  {
    component: App,
    exact: false,
    childRoutes: [
      {
        component: Homepage,
        path: "/",
        exact: true,
      },
      {
        component: CategorySingle,
        path: "/categorie/:category_handle",
        exact: true,
      },
      {
        component: ProductSingleContainer,
        path: "/product/:product_handle",
        exact: true,
      },
      {
        component: CheckoutContainer,
        path: "/checkout/",
        exact: true,
      },
    ],
  },
];

export default routes;
