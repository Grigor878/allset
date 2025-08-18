import { QueryProvider } from "./providers/queryProvider";
import { ChakraUIProvider } from "./providers/chakcraProvider";
import { RouterProvider } from "react-router-dom";
import { NuqsProvider } from "./providers/nuqsProvider";
import { AuthProvider } from "./providers/authProvider";
import router from "./router";
import "./services/i18n/i18n";

const App = () => {
  return (
    <AuthProvider>
      <QueryProvider>
        <ChakraUIProvider>
          <NuqsProvider>
            <RouterProvider router={router} />
          </NuqsProvider>
        </ChakraUIProvider>
      </QueryProvider>
    </AuthProvider>
  );
};

export default App;
