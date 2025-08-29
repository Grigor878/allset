import { useTranslation } from "react-i18next";
import { Box, Container, Flex, Image, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Steps } from "./steps";
import { Language } from "../language";
import { MidText } from "./texts/midText";
import { Auth } from "../../pages/auth";
import logo from "../../assets/allset.png";

export const Header = () => {
  const { t } = useTranslation();
  // const [_, setTemplate] = useNuqs("template", null);

  return (
    <Flex
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
      // pt="16px"
      // pb="16px"
      py="16px"
      px="0"
      align="center"
      justify="space-between"
    >
      <Box ml="40px">
        <Image src={logo} w="65px" h="40px" alt="AllSet" />
      </Box>
      {/* <Container maxW="1104px" px={0}> */}
      <Box
        position="absolute"
        left="50%"
        transform="translateX(-50%)"
        w="1104px"
      >
        <Container maxW="1104px" px={0}>
          <Flex justify="space-between">
            <Link as={NavLink} to="" gap="12px">
              <MidText text={t("title")} />
            </Link>

            <Steps />
          </Flex>
        </Container>
      </Box>
      <Flex gap="12px" mr="40px">
        <Language />
        <Auth />
      </Flex>
    </Flex>
  );
};
