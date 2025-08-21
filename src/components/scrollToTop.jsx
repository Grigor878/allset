import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        return setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return;

  return (
    <Button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      position="fixed"
      right={{ base: "33px", md: "10px" }}
      bottom={{ base: "99px", md: "50px" }}
      zIndex="101"
      border="1px solid"
      borderColor="white"
      bg="#F43F5E"
      boxShadow="xl"
      _hover={{ bg: "white", color: "#F43F5E", borderColor: "#F43F5E" }}
      transition="all 0.3s ease-in-out"
      aria-label="Scroll to top"
      fontWeight="400"
      fontSize="14px"
      borderRadius="8px"
    >
      Top &#8593;
    </Button>
  );
};
