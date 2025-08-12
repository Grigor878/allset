import { Auth0Provider } from "@auth0/auth0-react";
import { QueryProvider } from "../providers/queryProvider";
import { ChakraUIProvider } from "../providers/chakcraProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { lazy } from "react";
import Layout from "../components/constructor/layout";
import NotFound from "../pages/404";
import { NuqsProvider } from "../providers/nuqsProvider";

const Invitation = lazy(() => import("../pages/invitation"));

const Themes = lazy(() => import("../pages/constructor/themes"));
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
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Themes />,
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

const { VITE_DOMAIN, VITE_CLIENT_ID } = import.meta.env;

const View = () => {
  return (
    <Auth0Provider
      domain={VITE_DOMAIN}
      clientId={VITE_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <QueryProvider>
        <ChakraUIProvider>
          <NuqsProvider>
            <RouterProvider router={routes} />
          </NuqsProvider>
        </ChakraUIProvider>
      </QueryProvider>
    </Auth0Provider>
  );
};

export default View;
