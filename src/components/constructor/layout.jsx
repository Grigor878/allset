import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Header } from "./header";
import { TopPart } from "./topPart";
import { Scroll } from "../scroll";
import { Footer } from "./footer";
import { Loader } from "../loader";
import { ScrollToTop } from "../scrollToTop";
import AutoScroll from "../../utils/autoScroll";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <Box bg="#F9FAFB">
      <Header />
      <TopPart />
      <Suspense fallback={<Loader />}>
        <Scroll key={pathname}>
          <Outlet />
        </Scroll>
      </Suspense>
      <Footer />
      <ScrollToTop />
      <AutoScroll />
    </Box>
  );
};

export default Layout;
