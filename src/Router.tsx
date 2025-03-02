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
        path: "tvs",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Tv />
          </Suspense>
        ),
      },
      {
        path: "tvs/:tvId",
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
      {
        path: "movies/:movieId",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
