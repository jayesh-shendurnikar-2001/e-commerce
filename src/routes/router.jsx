import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "../App";

/*
  Lazy load all page components.
  This improves performance by loading pages only when needed.
*/
const Home = lazy(() => import("../pages/Home"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const Cart = lazy(() => import("../pages/Cart"));
const Checkout = lazy(() => import("../pages/Checkout"));
const NotFound = lazy(() => import("../pages/NotFound"));

/*
  Loader component
  This will show while lazy-loaded components are being downloaded.
*/
const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[40vh]">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
      </div>
    </div>
  );
};

/*
  Create application routes
*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    /*
      errorElement will render when route is invalid
      Wrapped with Suspense because NotFound is lazy loaded
    */
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
