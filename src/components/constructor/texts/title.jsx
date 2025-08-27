import { t } from "i18next";
import { Heading } from "@chakra-ui/react";

export const Title = ({ text }) => {
  return (
    <Heading as="h1" fontWeight={"700"} size="3xl" letterSpacing={"0"}>
      {t(text)}
    </Heading>
  );
};
