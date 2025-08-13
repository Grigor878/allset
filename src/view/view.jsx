import { QueryProvider } from "../providers/queryProvider";
import { ChakraUIProvider } from "../providers/chakcraProvider";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { lazy } from "react";
import Layout from "../components/constructor/layout";
import NotFound from "../pages/404";
import { NuqsProvider } from "../providers/nuqsProvider";
import { AuthProvider } from "../providers/authProvider";
import cookies from "js-cookie";

const Invitation = lazy(() => import("../pages/invitation"));
const Templates = lazy(() => import("../pages/constructor/templates"));
const Customisations = lazy(() =>
  import("../pages/constructor/customisations")
);
const Details = lazy(() => import("../pages/constructor/details"));
const Preview = lazy(() => import("../pages/constructor/preview"));
const Confirm = lazy(() => import("../pages/constructor/confirm"));

const routes = createBrowserRouter([
  {
    path: "/men-women",
    element: <Invitation model={1} />,
  },
  {
    path: "/",
    element: <Navigate to={cookies.get("i18next") || "hy"} replace />,
  },
  {
    // path: "/",
    path: "/:language",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Templates />,
      },
      {
        path: "customisations",
        element: <Customisations />,
      },
      {
        path: "details",
        element: <Details />,
      },
      {
        path: "preview",
        element: <Preview />,
      },
      {
        path: "confirm",
        element: <Confirm />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

const View = () => {
  return (
    <AuthProvider>
      <QueryProvider>
        <ChakraUIProvider>
          <NuqsProvider>
            <RouterProvider router={routes} />
          </NuqsProvider>
        </ChakraUIProvider>
      </QueryProvider>
    </AuthProvider>
  );
};

export default View;
