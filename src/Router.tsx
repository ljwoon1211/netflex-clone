import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "./App";

const Home = lazy(() => import("./pages/Home"));
const Tv = lazy(() => import("./pages/Tv"));
const Search = lazy(() => import("./pages/Search"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "tv",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Tv />
          </Suspense>
        ),
      },
      {
        path: "search",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Search />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
