import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Header } from "./header";
import { TopPart } from "./topPart";
import { Scroll } from "../scroll";
import { Footer } from "./footer";
import { Loader } from "../loader";
import { ScrollToTop } from "../scrollToTop";

const Layout = () => {
  return (
    <Box bg="#F9FAFB">
      <Header />
      <TopPart />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
      <ScrollToTop />
    </Box>
  );
};

export default Layout;
