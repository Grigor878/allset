import { Box, Container, Flex, Icon, Link } from "@chakra-ui/react";
// import { Auth } from "../../pages/auth";
import { Steps } from "./steps";
import { NavLink } from "react-router-dom";
import { constructor } from "../../assets/svgs";
import { useQueryState } from "nuqs";

export const Header = () => {
  const [_, setTemplate] = useQueryState("template");

  return (
    <Box
      as="header"
      w="100%"
      // boxShadow="md"
      position="sticky"
      top="0"
      left="0"
      right="0"
      zIndex="100"
      bg="white"
      boxShadow="sm"
      pt="16px"
      pb="16px"
    >
      <Container maxW="container.md">
        <Flex justify="space-between">
          <Link
            as={NavLink}
            onClick={() => setTemplate(null)}
            to="/"
            fontWeight="700"
            fontSize={"20px"}
            gap="12px"
          >
            <Icon>{constructor.icon}</Icon>
            Wedding Constructor
          </Link>

          <Steps />
        </Flex>
        {/* <Auth /> */}
      </Container>
    </Box>
  );
};
