import { t } from "i18next";
import { Text } from "@chakra-ui/react";

export const SubTitle = ({ text }) => {
  return (
    <Text color={"#4B5563"} w="672px" textStyle="lg" textAlign={"center"}>
      {t(text)}
    </Text>
  );
};
