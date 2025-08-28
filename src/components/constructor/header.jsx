import { useTranslation } from "react-i18next";
import { Box, Container, Flex, Icon, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { constructor } from "../../assets/svgs";
import { Steps } from "./steps";
import { Language } from "../language";
import { MidText } from "./texts/midText";
import { Auth } from "../../pages/auth";

export const Header = () => {
  const { t } = useTranslation();
  // const [_, setTemplate] = useNuqs("template", null);

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
            // onClick={() => setTemplate(null)}
            to=""
            gap="12px"
          >
            <Icon>{constructor.icon}</Icon>
            <MidText text={t("title")} />
          </Link>

          <Flex gap="12px">
            <Steps />
            <Language />
            <Auth />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
