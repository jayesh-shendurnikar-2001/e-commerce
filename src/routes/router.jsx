import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "../App";

const Home = lazy(() => import("../pages/Home"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const Cart = lazy(() => import("../pages/Cart"));
const Checkout = lazy(() => import("../pages/Checkout"));
const NotFound = lazy(() => import("../pages/NotFound"));

const Loader = () => <h2 style={{ textAlign: "center" }}>Loading...</h2>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <Suspense fallback={<Loader />}>
        <NotFound />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "product/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<Loader />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "checkout",
        element: (
          <Suspense fallback={<Loader />}>
            <Checkout />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
