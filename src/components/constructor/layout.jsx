import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// import { Aside } from "./aside";
import { Box } from "@chakra-ui/react";
import { Header } from "./header";
import { Footer } from "./footer";
import { TopPart } from "./topPart";
import { Loader } from "../loader";

const Layout = () => {
  return (
    <Box bg="#F9FAFB">
      <Header />
      <TopPart />
      <Suspense fallback={<Loader />}>
      {/* <Suspense fallback={null}> */}
        {/* <Box as="main" flex="1" p={4}> */}
        <Outlet />
        {/* </Box> */}
      </Suspense>
      <Footer />
    </Box>
  );
};

export default Layout;
