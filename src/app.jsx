import { HelmetProvider } from "@dr.pogodin/react-helmet";
import { AuthProvider } from "./providers/authProvider";
import { QueryProvider } from "./providers/queryProvider";
import { ChakraUIProvider } from "./providers/chakcraProvider";
import { NuqsProvider } from "./providers/nuqsProvider";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./services/i18n/i18n";

const App = () => {
  return (
    <HelmetProvider>
      <AuthProvider>
        <QueryProvider>
          <ChakraUIProvider>
            <NuqsProvider>
              <RouterProvider router={router} />
            </NuqsProvider>
          </ChakraUIProvider>
        </QueryProvider>
      </AuthProvider>
    </HelmetProvider>
  );
};

export default App;
