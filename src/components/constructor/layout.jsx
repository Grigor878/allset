import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Header } from "./header";
import { Footer } from "./footer";
import { TopPart } from "./topPart";
import { Loader } from "../loader";
import { ScrollToTop } from "../scrollToTop";
import AutoScroll from "../../utils/autoScroll";

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
      <AutoScroll />
    </Box>
  );
};

export default Layout;
