// import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
// import cookies from "js-cookie";
// import Layout from "../components/constructor/layout";
import NotFound from "../pages/404";
import Soon from "../pages/soon";

// const Invitation = lazy(() => import("../pages/invitation"));
// const Templates = lazy(() => import("../pages/constructor/templates"));
// const Customisations = lazy(() =>
//   import("../pages/constructor/customisations")
// );
// const Details = lazy(() => import("../pages/constructor/details"));
// const Preview = lazy(() => import("../pages/constructor/preview"));
// const Confirm = lazy(() => import("../pages/constructor/confirm"));
// const Terms = lazy(() => import("../pages/legal/terms"));
// const Policy = lazy(() => import("../pages/legal/policy"));

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Soon />,
  },
  { path: "*", element: <NotFound /> },
]);
// const router = createBrowserRouter([
//   {
//     path: "/men-women",
//     element: <Invitation model={1} />,
//   },
//   {
//     path: "/",
//     element: <Navigate to={cookies.get("i18next") || "hy"} replace />,
//   },
//   {
//     // path: "/",
//     path: "/:language",
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: <Templates />,
//       },
//       {
//         path: "customisations",
//         element: <Customisations />,
//       },
//       {
//         path: "details",
//         element: <Details />,
//       },
//       {
//         path: "preview",
//         element: <Preview />,
//       },
//       {
//         path: "confirm",
//         element: <Confirm />,
//       },
//       {
//         path: "terms-of-service",
//         element: <Terms />,
//       },
//       {
//         path: "privacy-policy",
//         element: <Policy />,
//       },
//     ],
//   },
//   { path: "*", element: <NotFound /> },
// ]);

export default router;
