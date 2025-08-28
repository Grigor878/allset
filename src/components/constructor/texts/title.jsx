import { useTranslation } from "react-i18next";
import { Heading } from "@chakra-ui/react";

export const Title = ({ text }) => {
  const { t } = useTranslation();

  return (
    <Heading as="h1" fontWeight={"700"} size="3xl" letterSpacing={"0"}>
      {t(text)}
    </Heading>
  );
};
