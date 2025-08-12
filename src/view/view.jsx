import { QueryProvider } from "../providers/queryProvider";
import { ChakraUIProvider } from "../providers/chakcraProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoute } from "../routes/protectedRoute";
import { PublicRoute } from "../routes/publicRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "*",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: "/ui",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <UI />,
      },
      {
        path: "about",
        children: [
          { index: true, element: <About /> },
          { path: "edit/:id", element: <AboutEdit /> },
          { path: "add", element: <AboutAdd /> },
        ],
      },
      {
        path: "contact",
        children: [
          { index: true, element: <Contact /> },
          { path: "edit/:id", element: <ContactEdit /> },
          { path: "add", element: <ContactAdd /> },
        ],
      },
      {
        path: "places",
        children: [
          { index: true, element: <Places /> },
          { path: "edit/:id", element: <PlacesEdit /> },
          { path: "add", element: <PlacesAdd /> },
        ],
      },
      {
        path: "faqs",
        children: [
          { index: true, element: <Faqs /> },
          { path: "edit/:id", element: <FaqsEdit /> },
          { path: "add", element: <FaqsAdd /> },
        ],
      },
      {
        path: "management",
        children: [
          {
            path: "workers",
            children: [
              { index: true, element: <Workers /> },
              { path: "edit/:id", element: <WorkerEdit /> },
              { path: "add", element: <WorkerAdd /> },
            ],
          },
          {
            path: "control",
            children: [
              { index: true, element: <Control /> },
              { path: "edit/:id", element: <ControlEdit /> },
              { path: "add", element: <ControlAdd /> },
            ],
          },
          {
            path: "menu",
            children: [
              { index: true, element: <Menu /> },
              { path: "edit/:id", element: <MenuEdit /> },
              { path: "add", element: <MenuAdd /> },
            ],
          },
          {
            path: "logs",
            element: <Logs />,
          },
        ],
      },
      {
        path: "seo",
        children: [
          {
            path: "social",
            children: [
              { index: true, element: <Social /> },
              { path: "edit/:id", element: <SocialEdit /> },
              { path: "add", element: <SocialAdd /> },
            ],
          },
          {
            path: "translations",
            children: [
              { index: true, element: <Translations /> },
              { path: "edit/:id", element: <TranslationsEdit /> },
              { path: "add", element: <TranslationsAdd /> },
            ],
          },
          {
            path: "analytics",
            element: <Analytics />,
          },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const View = () => {
  return (
    <QueryProvider>
      <ChakraUIProvider>
        <RouterProvider router={routes} />
      </ChakraUIProvider>
    </QueryProvider>
  );
};

export default View;
